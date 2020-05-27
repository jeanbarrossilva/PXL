package com.jeanbarrossilva.pxl.code.game

import com.jeanbarrossilva.pxl.code.game.GameActor.*
import com.jeanbarrossilva.pxl.code.game.GameState.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.window

class Game(val canvas: HTMLCanvasElement) {
	internal var state: GameState = Waiting
	
	private val currentPlayer = Player("player1", x = 8.0, y = 8.0).apply {
		window.addEventListener("keydown", EventListener { isMovableIn(this@Game, event = it as KeyboardEvent) }, true)
	}
	
	private val actors = mutableListOf<GameActor>()
	
	private fun drawActors(): Unit =
		with(canvas) {
			(getContext("2d") as CanvasRenderingContext2D).apply {
				clearRect(x = 0.0, y = 0.0, w = width.toDouble(), h = height.toDouble())
				
				actors.filterIsInstance<Player>().forEach { player ->
					fillStyle = if (player == currentPlayer) "blue" else "gray"
					fillRect(player.x, player.y, 1.0, 1.0)
					
					console.log("[game] ${player.id} has been successfully added.")
				}
			}
			
			window.requestAnimationFrame { drawActors() }
		}
	
	fun start() {
		state = InProgress
		actors.add(currentPlayer)
		drawActors()
		
		console.log("[game] Game started.")
	}
	
	fun stop() {
		state = Finished
		actors.clear()
		
		console.log("[game] Game stopped.")
	}
}