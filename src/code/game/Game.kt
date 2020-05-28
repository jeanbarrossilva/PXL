package code.game

import code.game.GameActor.*
import code.game.GameActor.Player.CollisionOccurrence.*
import code.game.GameState.*
import org.w3c.dom.*
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.window
import kotlin.random.Random

class Game(val canvas: HTMLCanvasElement) {
	internal var state: GameState = Waiting
	
	private val actors = mutableListOf<GameActor>()
	
	private val currentPlayer = Player("player1", x = 8.0, y = 8.0).apply {
		window.addEventListener(
			"keydown",
			EventListener {
				Move().apply {
					setMobilityIn(this@Game, event = it as KeyboardEvent)
					collision(actors).let { collision -> if (collision is Registered) actors.remove(collision.suspect) }
				}
			},
			true
		)
	}
	
	private fun addFruits() =
		actors.apply {
			fun generateRandomCoord(name: Char): Double? {
				val comparable = when (name) {
					'x' -> canvas.width
					'y' -> canvas.height
					else -> 0
				}
				
				return Random.nextInt(comparable).toDouble().let { generated ->
					if (none { it is Fruit && generated == (if (name == 'x') it.x else if (name == 'y') it.y else 0) })
						generated
					else
						generateRandomCoord(name)
				}
			}
			
			window.setInterval(
				handler = {
					val (generatedX, generatedY) = generateRandomCoord('x') to generateRandomCoord('y')
					
					if (generatedX != null && generatedY != null) {
						val fruit = Fruit(id = "fruit" + (lastIndex + 1), x = generatedX, y = generatedY)
						add(fruit)
					}
				},
				timeout = 2000
			)
		}
	
	private fun drawActors(): Unit =
		with(canvas) {
			(getContext("2d") as CanvasRenderingContext2D).apply {
				clearRect(x = 0.0, y = 0.0, w = width.toDouble(), h = height.toDouble())
				
				actors.forEach { actor ->
					fillStyle = when (actor) {
						is Player -> if (actor == currentPlayer) "blue" else "gray"
						is Fruit -> "red"
					}
					
					fillRect(actor.x, actor.y, 1.0, 1.0)
				}
			}
			
			window.requestAnimationFrame { drawActors() }
		}
	
	fun start() {
		state = InProgress
		actors.add(currentPlayer)
		
		addFruits()
		drawActors()
		
		console.log("[game] Game started.")
	}
	
	fun stop() {
		state = Finished
		actors.clear()
		
		console.log("[game] Game stopped.")
	}
}