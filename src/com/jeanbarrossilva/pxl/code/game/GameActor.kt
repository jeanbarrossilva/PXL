package com.jeanbarrossilva.pxl.code.game

import com.jeanbarrossilva.pxl.code.game.GameState.*
import org.w3c.dom.events.KeyboardEvent

sealed class GameActor(open val id: String) {
	class Player(override val id: String, var x: Double, var y: Double) : GameActor(id) {
		fun isMovableIn(game: Game, event: KeyboardEvent) {
			if (game.state is InProgress)
				when (event.key) {
					"ArrowUp"    -> if (y - 1 >= 0)                 --y
					"ArrowLeft"  -> if (x - 1 >= 0)                 --x
					"ArrowRight" -> if (x + 1 < game.canvas.width)  ++x
					"ArrowDown"  -> if (y + 1 < game.canvas.height) ++y
				}
		}
	}
	
	data class Fruit(override val id: String) : GameActor(id)
}