package com.jeanbarrossilva.pxl.code

import com.jeanbarrossilva.pxl.code.game.Game
import com.jeanbarrossilva.pxl.code.game.actor.GameActor
import com.jeanbarrossilva.pxl.code.game.actor.GameActorType.*
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document

fun main() {
	val game = Game(
		actors = listOf(
			GameActor(Player, "player1", x = 1, y = 1),
			GameActor(Player, "player2", x = 9, y = 9),
			GameActor(Fruit, "fruit1", x = 3, y = 3)
		)
	)
	
	game.apply {
		drawIn(document.getElementById("canvas") as HTMLCanvasElement)
		document.addEventListener("keydown", EventListener { handleKey(it as KeyboardEvent) })
	}
}