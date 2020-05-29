package code.game

import code.game.GameState.*
import org.w3c.dom.*
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.window

class GameView(val canvas: HTMLCanvasElement, val audio: HTMLAudioElement) {
    private val currentPlayer = GameActor.Player("player1", x = 8.0, y = 8.0).apply player@{
        window.addEventListener(
            "keydown",
            EventListener { event ->
                with(GameController) {
                    this@player.moveOn(canvas, (event as KeyboardEvent).key)
                    collectFruitAs(this@player, audio)
                }
            },
            true
        )
    }
    
    fun start() {
        GameModel.apply {
            state = InProgress
            actors.add(currentPlayer)
        }
        
        with(GameController) {
            addFruitsTo(canvas)
            drawActorsOn(canvas, currentPlayer)
        }
        
        console.log("[game] Game started.")
    }
    
    fun stop() {
        GameModel.apply {
            state = Finished
            actors.clear()
        }
        
        console.log("[game] Game stopped.")
    }
}