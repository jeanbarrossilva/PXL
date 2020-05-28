package code

import code.game.Game
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document

fun main() {
	val game =
		Game(canvas = document.getElementById("canvas") as HTMLCanvasElement, audio = document.getElementById("audio") as HTMLAudioElement)
	
	game.start()
}