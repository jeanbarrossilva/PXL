package code

import code.game.GameView
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

fun main() {
    val game = GameView(
        canvas = document.getElementById("canvas") as HTMLCanvasElement,
        ranking = document.getElementById("ranking") as HTMLDivElement,
        audio = document.getElementById("audio") as HTMLAudioElement
    )
    
    game.start()
}