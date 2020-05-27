package com.jeanbarrossilva.pxl.code.game

import com.jeanbarrossilva.pxl.code.game.GameState.*
import org.w3c.dom.events.KeyboardEvent

sealed class GameActor(open val id: String) {
	data class Player(override val id: String, var x: Double, var y: Double) : GameActor(id) {
		fun isMovableIn(game: Game, event: KeyboardEvent) {
			if (game.state is InProgress)
				when (event.key) {
					"ArrowUp"    -> --y
					"ArrowLeft"  -> --x
					"ArrowRight" -> ++x
					"ArrowDown"  -> ++y
				}
		}
	}
	
	data class Fruit(override val id: String) : GameActor(id)
}