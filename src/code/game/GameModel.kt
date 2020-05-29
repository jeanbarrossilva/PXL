package code.game

import code.game.GameActor.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.window
import kotlin.random.Random

object GameModel {
    internal var state: GameState = GameState.Waiting
    internal var actors = mutableListOf<GameActor>()
}