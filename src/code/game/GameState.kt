package code.game

sealed class GameState {
	object Waiting : GameState()
	object InProgress : GameState()
	object Finished : GameState()
}