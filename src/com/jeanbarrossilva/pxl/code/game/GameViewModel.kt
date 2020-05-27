package com.jeanbarrossilva.pxl.code.game

import org.w3c.dom.events.KeyboardEvent

object GameViewModel {
	fun movePlayer(id: String, event: KeyboardEvent) = GameModel.actors.find { it.id == id }?.apply {
		when (event.key) {
			"ArrowUp" -> y =- 1
			"ArrowLeft" -> x =- 1
			"ArrowRight" -> x =+ 1
			"ArrowDown" -> y =+ 1
		}
	}
}