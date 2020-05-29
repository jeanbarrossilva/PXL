package code.game

import code.game.GameActor.*
import code.game.GameActor.Player.CollisionOccurrence.*
import code.game.GameState.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLSourceElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.random.Random

object GameController {
    fun addFruitsTo(canvas: HTMLCanvasElement) =
        GameModel.actors.apply {
            fun generateRandomCoord(name: Char): Double? {
                val comparable = when (name) {
                    'x' -> canvas.width
                    'y' -> canvas.height
                    else -> 0
                }
                
                return try {
                    Random.nextInt(comparable).toDouble().let { generated ->
                        if (none { generated == (if (name == 'x') it.x else if (name == 'y') it.y else 0) })
                            generated
                        else {
                            generateRandomCoord(name)
                        }
                    }
                } catch (e: Throwable) {
                    console.log("[game] Fruit generation is canceled until one of the existent ones is collected.")
                    null
                }
            }
            
            window.setInterval(
                handler = generate@{
                    val (generatedX, generatedY) = generateRandomCoord('x') to generateRandomCoord('y')
                    
                    if (generatedX != null && generatedY != null) {
                        val fruit = Fruit(id = "fruit" + (lastIndex + 1), x = generatedX, y = generatedY)
                        add(fruit)
                    }
                },
                timeout = 5000
            )
        }
    
    fun drawActorsOn(canvas: HTMLCanvasElement, currentPlayer: Player) {
        with(canvas) {
            (getContext("2d") as CanvasRenderingContext2D).apply {
                clearRect(x = 0.0, y = 0.0, w = width.toDouble(), h = height.toDouble())
                
                GameModel.actors.forEach { actor ->
                    fillStyle = when (actor) {
                        is Player -> if (actor == currentPlayer) "blue" else "gray"
                        is Fruit -> "red"
                    }
                    
                    fillRect(actor.x, actor.y, 1.0, 1.0)
                }
            }
        }
        
        window.requestAnimationFrame {
            drawActorsOn(canvas, currentPlayer)
        }
    }
    
    fun Player.moveOn(canvas: HTMLCanvasElement, key: String) {
        if (GameModel.state is InProgress) {
            if ((key == "ArrowUp"    || key == "w") && y - 1 >= 0)                 --y
            if ((key == "ArrowLeft"  || key == "a") && x - 1 >= 0)                 --x
            if ((key == "ArrowRight" || key == "d") && x + 1 < canvas.width)  ++x
            if ((key == "ArrowDown"  || key == "s") && y + 1 < canvas.height) ++y
        }
    }
    
    fun collectFruitAs(player: Player, audio: HTMLAudioElement) =
        with(GameModel) {
            player.collision(actors).let { collision ->
                if (collision is Registered) {
                    run sound@{
                        val source = (document.createElement("source") as HTMLSourceElement).apply {
                            src = "src/coin.mp3"
                        }
                
                        audio.apply {
                            preload = "auto"
                            currentTime = 0.1
                    
                            appendChild(source)
                            play()
                        }
                    }
                    
                    player.points++
                    actors.remove(collision.suspect)
                } else
                    actors
                
                return@let
            }
        }
}