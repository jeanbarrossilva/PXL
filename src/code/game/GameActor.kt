package code.game

import code.game.GameState.*
import org.w3c.dom.events.KeyboardEvent

sealed class GameActor(open val id: String, open var x: Double, open var y: Double) {
	class Player(override val id: String, override var x: Double, override var y: Double) : GameActor(id, x, y) {
		sealed class CollisionOccurrence {
			data class Registered(val suspect: GameActor) : CollisionOccurrence()
			object NonExistent : CollisionOccurrence()
		}
		
		inner class Move {
			val collision = { suspects: List<GameActor> ->
				suspects.find { it != this@Player && x == it.x && y == it.y }?.let { CollisionOccurrence.Registered(it) }
					?: CollisionOccurrence.NonExistent
			}
			
			fun setMobilityIn(game: Game, event: KeyboardEvent) {
				if (game.state is InProgress) {
					if (event.key == "ArrowUp"    || event.key == "w" && y - 1 >= 0)                 --y
					if (event.key == "ArrowLeft"  || event.key == "a" && x - 1 >= 0)                 --x
					if (event.key == "ArrowRight" || event.key == "d" && x + 1 < game.canvas.width)  ++x
					if (event.key == "ArrowDown"  || event.key == "s" && y + 1 < game.canvas.height) ++y
				}
			}
		}
	}
	
	data class Fruit(override val id: String, override var x: Double, override var y: Double) : GameActor(id, x, y)
}