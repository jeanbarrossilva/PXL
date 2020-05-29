package code.game

object GameModel {
    internal var state: GameState = GameState.Waiting
    internal var actors = mutableListOf<GameActor>()
}