package com.jeanbarrossilva.pxl.code.game

import com.jeanbarrossilva.pxl.code.game.actor.GameActor
import com.jeanbarrossilva.pxl.code.game.actor.GameActorType.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.window

data class Game(
	val actors: List<GameActor>
) {
	private val currentPlayer = actors.find { it.type is Player && it.id == "player1" }
	
	fun drawIn(canvas: HTMLCanvasElement) {
		(canvas.getContext("2d") as CanvasRenderingContext2D).apply {
			clearRect(x = 0.0, y = 0.0, h = canvas.height.toDouble(), w = canvas.width.toDouble())
			
			actors.forEach { actor ->
				fillStyle = when (actor.type) {
					is Player -> "black"
					is Fruit -> "green"
				}
				
				fillRect(x = actor.x.toDouble(), y = actor.y.toDouble(), w = 1.0, h = 1.0)
			}
		}
		
		window.requestAnimationFrame {
			drawIn(canvas)
		}
	}
	
	fun handleKey(event: KeyboardEvent) = currentPlayer?.apply {
		when (event.key) {
			"ArrowUp" -> y -= 1
			"ArrowLeft" -> x -= 1
			"ArrowRight" -> x += 1
			"ArrowDown" -> y += 1
		}
	}
}