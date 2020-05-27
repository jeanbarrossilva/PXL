if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PXL'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PXL'.");
}var PXL = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  GameActorType$Player.prototype = Object.create(GameActorType.prototype);
  GameActorType$Player.prototype.constructor = GameActorType$Player;
  GameActorType$Fruit.prototype = Object.create(GameActorType.prototype);
  GameActorType$Fruit.prototype.constructor = GameActorType$Fruit;
  function GameActor(type, id, x, y) {
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
  }
  GameActor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameActor',
    interfaces: []
  };
  GameActor.prototype.component1 = function () {
    return this.type;
  };
  GameActor.prototype.component2 = function () {
    return this.id;
  };
  GameActor.prototype.component3 = function () {
    return this.x;
  };
  GameActor.prototype.component4 = function () {
    return this.y;
  };
  GameActor.prototype.copy_66fu6k$ = function (type, id, x, y) {
    return new GameActor(type === void 0 ? this.type : type, id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GameActor.prototype.toString = function () {
    return 'GameActor(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GameActor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GameActor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function GameActorType() {
  }
  function GameActorType$Player() {
    GameActorType$Player_instance = this;
    GameActorType.call(this);
  }
  GameActorType$Player.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Player',
    interfaces: [GameActorType]
  };
  var GameActorType$Player_instance = null;
  function GameActorType$Player_getInstance() {
    if (GameActorType$Player_instance === null) {
      new GameActorType$Player();
    }return GameActorType$Player_instance;
  }
  function GameActorType$Fruit() {
    GameActorType$Fruit_instance = this;
    GameActorType.call(this);
  }
  GameActorType$Fruit.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Fruit',
    interfaces: [GameActorType]
  };
  var GameActorType$Fruit_instance = null;
  function GameActorType$Fruit_getInstance() {
    if (GameActorType$Fruit_instance === null) {
      new GameActorType$Fruit();
    }return GameActorType$Fruit_instance;
  }
  GameActorType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameActorType',
    interfaces: []
  };
  function Game(actors) {
    this.actors = actors;
    var $receiver = this.actors;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element.type, GameActorType$Player) && equals(element.id, 'player1')) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    this.currentPlayer_0 = firstOrNull$result;
    var tmp$_0;
    if ((tmp$_0 = this.currentPlayer_0) != null) {
      document.addEventListener('keydown', EventListener(Game_init$lambda$lambda(tmp$_0)));
    }}
  function Game$drawIn$lambda(closure$canvas, this$Game) {
    return function (it) {
      this$Game.drawIn_ap7jt0$(closure$canvas);
      return Unit;
    };
  }
  Game.prototype.drawIn_ap7jt0$ = function (canvas) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    var tmp$_0;
    tmp$_0 = canvas.height;
    $receiver.clearRect(0.0, 0.0, canvas.width, tmp$_0);
    var tmp$_1;
    tmp$_1 = this.actors.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_2, tmp$_3;
      tmp$_2 = element.type;
      if (Kotlin.isType(tmp$_2, GameActorType$Player))
        tmp$_3 = 'black';
      else if (Kotlin.isType(tmp$_2, GameActorType$Fruit))
        tmp$_3 = 'green';
      else
        tmp$_3 = Kotlin.noWhenBranchMatched();
      $receiver.fillStyle = tmp$_3;
      $receiver.fillRect(element.x, element.y, 1.0, 1.0);
    }
    window.requestAnimationFrame(Game$drawIn$lambda(canvas, this));
  };
  function Game_init$lambda$lambda(closure$player) {
    return function (it) {
      var tmp$;
      GameViewModel_getInstance().movePlayer_8jr9gp$(closure$player.id, Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  Game.prototype.component1 = function () {
    return this.actors;
  };
  Game.prototype.copy_2yjlbj$ = function (actors) {
    return new Game(actors === void 0 ? this.actors : actors);
  };
  Game.prototype.toString = function () {
    return 'Game(actors=' + Kotlin.toString(this.actors) + ')';
  };
  Game.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.actors) | 0;
    return result;
  };
  Game.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.actors, other.actors))));
  };
  function GameModel() {
    GameModel_instance = this;
    this.actors_0 = ArrayList_init();
  }
  GameModel.prototype.getActors = function () {
    return this.actors_0;
  };
  GameModel.prototype.addActors_5pio8t$ = function (actors) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== actors.length; ++tmp$) {
      var element = actors[tmp$];
      this.actors_0.add_11rb$(element);
    }
  };
  GameModel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameModel',
    interfaces: []
  };
  var GameModel_instance = null;
  function GameModel_getInstance() {
    if (GameModel_instance === null) {
      new GameModel();
    }return GameModel_instance;
  }
  function GameViewModel() {
    GameViewModel_instance = this;
  }
  GameViewModel.prototype.movePlayer_8jr9gp$ = function (id, event) {
    var tmp$;
    var tmp$_0;
    var $receiver = GameModel_getInstance().getActors();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (equals(element.id, id)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null) {
      switch (event.key) {
        case 'ArrowUp':
          tmp$.y = -1;
          break;
        case 'ArrowLeft':
          tmp$.x = -1;
          break;
        case 'ArrowRight':
          tmp$.x = 1;
          break;
        case 'ArrowDown':
          tmp$.y = 1;
          break;
      }
      tmp$_0 = tmp$;
    } else
      tmp$_0 = null;
    return tmp$_0;
  };
  GameViewModel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameViewModel',
    interfaces: []
  };
  var GameViewModel_instance = null;
  function GameViewModel_getInstance() {
    if (GameViewModel_instance === null) {
      new GameViewModel();
    }return GameViewModel_instance;
  }
  function main() {
    var tmp$;
    var game = new Game(listOf([new GameActor(GameActorType$Player_getInstance(), 'player1', 1, 1), new GameActor(GameActorType$Player_getInstance(), 'player2', 9, 9), new GameActor(GameActorType$Fruit_getInstance(), 'fruit1', 3, 3)]));
    game.drawIn_ap7jt0$(Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE());
  }
  var package$com = _.com || (_.com = {});
  var package$jeanbarrossilva = package$com.jeanbarrossilva || (package$com.jeanbarrossilva = {});
  var package$pxl = package$jeanbarrossilva.pxl || (package$jeanbarrossilva.pxl = {});
  var package$code = package$pxl.code || (package$pxl.code = {});
  var package$game = package$code.game || (package$code.game = {});
  var package$actor = package$game.actor || (package$game.actor = {});
  package$actor.GameActor = GameActor;
  Object.defineProperty(GameActorType, 'Player', {
    get: GameActorType$Player_getInstance
  });
  Object.defineProperty(GameActorType, 'Fruit', {
    get: GameActorType$Fruit_getInstance
  });
  package$actor.GameActorType = GameActorType;
  package$game.Game = Game;
  Object.defineProperty(package$game, 'GameModel', {
    get: GameModel_getInstance
  });
  Object.defineProperty(package$game, 'GameViewModel', {
    get: GameViewModel_getInstance
  });
  package$code.main = main;
  main();
  Kotlin.defineModule('PXL', _);
  return _;
}(typeof PXL === 'undefined' ? {} : PXL, kotlin);
