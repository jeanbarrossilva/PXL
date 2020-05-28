package code.game

import code.game.GameActor.*
import code.game.GameActor.Player.CollisionOccurrence.*
import org.w3c.dom.HTMLSourceElement
import kotlin.browser.document

class GameAction(private val game: Game) {
    fun move(player: Player, key: String) {
        if (game.state is GameState.InProgress) {
            if ((key == "ArrowUp"    || key == "w") && player.y - 1 >= 0)                 --player.y
            if ((key == "ArrowLeft"  || key == "a") && player.x - 1 >= 0)                 --player.x
            if ((key == "ArrowRight" || key == "d") && player.x + 1 < game.canvas.width)  ++player.x
            if ((key == "ArrowDown"  || key == "s") && player.y + 1 < game.canvas.height) ++player.y
        }
    }
    
    fun removeSuspectWhenCollidedWith(player: Player) =
        player.collision(game.actors).let { collision ->
            with(game) {
                if (collision is Registered) {
                    run sound@{
                        val source = (document.createElement("source") as HTMLSourceElement).apply {
                            src = "src/coin.mp3"
                        }
            
                        game.audio.apply {
                            preload = "auto"
                            currentTime = 0.1
                
                            appendChild(source)
                            play()
                        }
                    }
        
                    actors.remove(collision.suspect)
                } else
                    actors
            }
        }
}