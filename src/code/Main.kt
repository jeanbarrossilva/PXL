package com.jeanbarrossilva.pxl.code

import com.jeanbarrossilva.pxl.code.game.Game
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document

fun main() {
	Game(canvas = document.getElementById("canvas") as HTMLCanvasElement).start()
}