package code.game

sealed class GameActor(open val id: String, open var x: Double, open var y: Double) {
	class Player(override val id: String, override var x: Double, override var y: Double) : GameActor(id, x, y) {
		sealed class CollisionOccurrence {
			data class Registered(val suspect: GameActor) : CollisionOccurrence()
			object NonExistent : CollisionOccurrence()
		}
		
		val collision = { suspects: List<GameActor> ->
			suspects.find { it != this@Player && x == it.x && y == it.y }?.let { CollisionOccurrence.Registered(it) }
				?: CollisionOccurrence.NonExistent
		}
	}
	
	data class Fruit(override val id: String, override var x: Double, override var y: Double) : GameActor(id, x, y)
}