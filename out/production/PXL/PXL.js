if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PXL'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PXL'.");
}var PXL = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  GameActor$Player.prototype = Object.create(GameActor.prototype);
  GameActor$Player.prototype.constructor = GameActor$Player;
  GameActor$Fruit.prototype = Object.create(GameActor.prototype);
  GameActor$Fruit.prototype.constructor = GameActor$Fruit;
  GameState$Waiting.prototype = Object.create(GameState.prototype);
  GameState$Waiting.prototype.constructor = GameState$Waiting;
  GameState$InProgress.prototype = Object.create(GameState.prototype);
  GameState$InProgress.prototype.constructor = GameState$InProgress;
  GameState$Finished.prototype = Object.create(GameState.prototype);
  GameState$Finished.prototype.constructor = GameState$Finished;
  function Game(canvas) {
    this.canvas = canvas;
    this.state_8be2vx$ = GameState$Waiting_getInstance();
    var $receiver = new GameActor$Player('player1', 8.0, 8.0);
    window.addEventListener('keydown', EventListener(Game$currentPlayer$lambda$lambda(this, $receiver)), true);
    this.currentPlayer_0 = $receiver;
    this.actors_0 = ArrayList_init();
  }
  function Game$drawActors$lambda$lambda(this$Game) {
    return function (it) {
      this$Game.drawActors_0();
      return Unit;
    };
  }
  Game.prototype.drawActors_0 = function () {
    var $receiver = this.canvas;
    var tmp$;
    var $receiver_0 = Kotlin.isType(tmp$ = $receiver.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    $receiver_0.clearRect(0.0, 0.0, $receiver.width, $receiver.height);
    var $receiver_1 = this.actors_0;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_1.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, GameActor$Player))
        destination.add_11rb$(element);
    }
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      $receiver_0.fillStyle = (element_0 != null ? element_0.equals(this.currentPlayer_0) : null) ? 'blue' : 'gray';
      $receiver_0.fillRect(element_0.x, element_0.y, 1.0, 1.0);
      console.log('[game] ' + element_0.id + ' has been successfully added.');
    }
    window.requestAnimationFrame(Game$drawActors$lambda$lambda(this));
  };
  Game.prototype.start = function () {
    this.state_8be2vx$ = GameState$InProgress_getInstance();
    this.actors_0.add_11rb$(this.currentPlayer_0);
    this.drawActors_0();
    console.log('[game] Game started.');
  };
  Game.prototype.stop = function () {
    this.state_8be2vx$ = GameState$Finished_getInstance();
    this.actors_0.clear();
    console.log('[game] Game stopped.');
  };
  function Game$currentPlayer$lambda$lambda(this$Game, this$) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE();
      this$.isMovableIn_89lca3$(this$Game, tmp$_0);
      return Unit;
    };
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function GameActor(id) {
    this.id_ym8tau$_0 = id;
  }
  Object.defineProperty(GameActor.prototype, 'id', {
    get: function () {
      return this.id_ym8tau$_0;
    }
  });
  function GameActor$Player(id, x, y) {
    GameActor.call(this, id);
    this.id_nrpo55$_0 = id;
    this.x = x;
    this.y = y;
  }
  Object.defineProperty(GameActor$Player.prototype, 'id', {
    get: function () {
      return this.id_nrpo55$_0;
    }
  });
  GameActor$Player.prototype.isMovableIn_89lca3$ = function (game, event) {
    if (Kotlin.isType(game.state_8be2vx$, GameState$InProgress)) {
      switch (event.key) {
        case 'ArrowUp':
          this.y = this.y - 1;
          break;
        case 'ArrowLeft':
          this.x = this.x - 1;
          break;
        case 'ArrowRight':
          this.x = this.x + 1;
          break;
        case 'ArrowDown':
          this.y = this.y + 1;
          break;
      }
    }};
  GameActor$Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [GameActor]
  };
  GameActor$Player.prototype.component1 = function () {
    return this.id;
  };
  GameActor$Player.prototype.component2 = function () {
    return this.x;
  };
  GameActor$Player.prototype.component3 = function () {
    return this.y;
  };
  GameActor$Player.prototype.copy_ai6r6m$ = function (id, x, y) {
    return new GameActor$Player(id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GameActor$Player.prototype.toString = function () {
    return 'Player(id=' + Kotlin.toString(this.id) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GameActor$Player.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GameActor$Player.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function GameActor$Fruit(id) {
    GameActor.call(this, id);
    this.id_819zm8$_0 = id;
  }
  Object.defineProperty(GameActor$Fruit.prototype, 'id', {
    get: function () {
      return this.id_819zm8$_0;
    }
  });
  GameActor$Fruit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fruit',
    interfaces: [GameActor]
  };
  GameActor$Fruit.prototype.component1 = function () {
    return this.id;
  };
  GameActor$Fruit.prototype.copy_61zpoe$ = function (id) {
    return new GameActor$Fruit(id === void 0 ? this.id : id);
  };
  GameActor$Fruit.prototype.toString = function () {
    return 'Fruit(id=' + Kotlin.toString(this.id) + ')';
  };
  GameActor$Fruit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  GameActor$Fruit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  GameActor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameActor',
    interfaces: []
  };
  function GameState() {
  }
  function GameState$Waiting() {
    GameState$Waiting_instance = this;
    GameState.call(this);
  }
  GameState$Waiting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Waiting',
    interfaces: [GameState]
  };
  var GameState$Waiting_instance = null;
  function GameState$Waiting_getInstance() {
    if (GameState$Waiting_instance === null) {
      new GameState$Waiting();
    }return GameState$Waiting_instance;
  }
  function GameState$InProgress() {
    GameState$InProgress_instance = this;
    GameState.call(this);
  }
  GameState$InProgress.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InProgress',
    interfaces: [GameState]
  };
  var GameState$InProgress_instance = null;
  function GameState$InProgress_getInstance() {
    if (GameState$InProgress_instance === null) {
      new GameState$InProgress();
    }return GameState$InProgress_instance;
  }
  function GameState$Finished() {
    GameState$Finished_instance = this;
    GameState.call(this);
  }
  GameState$Finished.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Finished',
    interfaces: [GameState]
  };
  var GameState$Finished_instance = null;
  function GameState$Finished_getInstance() {
    if (GameState$Finished_instance === null) {
      new GameState$Finished();
    }return GameState$Finished_instance;
  }
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  function main() {
    var tmp$;
    (new Game(Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE())).start();
  }
  var package$com = _.com || (_.com = {});
  var package$jeanbarrossilva = package$com.jeanbarrossilva || (package$com.jeanbarrossilva = {});
  var package$pxl = package$jeanbarrossilva.pxl || (package$jeanbarrossilva.pxl = {});
  var package$code = package$pxl.code || (package$pxl.code = {});
  var package$game = package$code.game || (package$code.game = {});
  package$game.Game = Game;
  GameActor.Player = GameActor$Player;
  GameActor.Fruit = GameActor$Fruit;
  package$game.GameActor = GameActor;
  Object.defineProperty(GameState, 'Waiting', {
    get: GameState$Waiting_getInstance
  });
  Object.defineProperty(GameState, 'InProgress', {
    get: GameState$InProgress_getInstance
  });
  Object.defineProperty(GameState, 'Finished', {
    get: GameState$Finished_getInstance
  });
  package$game.GameState = GameState;
  package$code.main = main;
  main();
  Kotlin.defineModule('PXL', _);
  return _;
}(typeof PXL === 'undefined' ? {} : PXL, kotlin);
