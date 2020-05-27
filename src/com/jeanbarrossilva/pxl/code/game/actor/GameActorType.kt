package com.jeanbarrossilva.pxl.code.game.actor

sealed class GameActorType {
	object Player : GameActorType()
	object Fruit : GameActorType()
}