package com.jeanbarrossilva.pxl.code.game

import com.jeanbarrossilva.pxl.code.game.GameState.*
import org.w3c.dom.events.KeyboardEvent

sealed class GameActor(open val id: String, open var x: Double, open var y: Double) {
	class Player(override val id: String, override var x: Double, override var y: Double) : GameActor(id, x, y) {
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
	
	data class Fruit(override val id: String, override var x: Double, override var y: Double) : GameActor(id, x, y)
}