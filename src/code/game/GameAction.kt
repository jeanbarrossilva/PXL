package code.game

import code.game.GameActor.*

class GameAction(private val game: Game) {
	fun move(player: Player, key: String) {
		if (game.state is GameState.InProgress) {
			if (key == "ArrowUp"    || key == "w" && player.y - 1 >= 0)                 --player.y
			if (key == "ArrowLeft"  || key == "a" && player.x - 1 >= 0)                 --player.x
			if (key == "ArrowRight" || key == "d" && player.x + 1 < game.canvas.width)  ++player.x
			if (key == "ArrowDown"  || key == "s" && player.y + 1 < game.canvas.height) ++player.y
		}
	}
}