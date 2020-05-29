if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PXL'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PXL'.");
}var PXL = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var Random = Kotlin.kotlin.random.Random;
  var Throwable = Error;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var Collection = Kotlin.kotlin.collections.Collection;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  GameActor$Player$CollisionOccurrence$Registered.prototype = Object.create(GameActor$Player$CollisionOccurrence.prototype);
  GameActor$Player$CollisionOccurrence$Registered.prototype.constructor = GameActor$Player$CollisionOccurrence$Registered;
  GameActor$Player$CollisionOccurrence$NonExistent.prototype = Object.create(GameActor$Player$CollisionOccurrence.prototype);
  GameActor$Player$CollisionOccurrence$NonExistent.prototype.constructor = GameActor$Player$CollisionOccurrence$NonExistent;
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
  function GameActor(id, x, y) {
    this.id_t016m1$_0 = id;
    this.x_j9ku2w$_0 = x;
    this.y_j9ku3r$_0 = y;
  }
  Object.defineProperty(GameActor.prototype, 'id', {
    get: function () {
      return this.id_t016m1$_0;
    }
  });
  Object.defineProperty(GameActor.prototype, 'x', {
    get: function () {
      return this.x_j9ku2w$_0;
    },
    set: function (x) {
      this.x_j9ku2w$_0 = x;
    }
  });
  Object.defineProperty(GameActor.prototype, 'y', {
    get: function () {
      return this.y_j9ku3r$_0;
    },
    set: function (y) {
      this.y_j9ku3r$_0 = y;
    }
  });
  function GameActor$Player(id, x, y, points) {
    if (points === void 0)
      points = 0;
    GameActor.call(this, id, x, y);
    this.id_s28m1k$_0 = id;
    this.x_liz53d$_0 = x;
    this.y_liz548$_0 = y;
    this.points = points;
    this.collision = GameActor$Player$collision$lambda(this);
  }
  Object.defineProperty(GameActor$Player.prototype, 'id', {
    get: function () {
      return this.id_s28m1k$_0;
    }
  });
  Object.defineProperty(GameActor$Player.prototype, 'x', {
    get: function () {
      return this.x_liz53d$_0;
    },
    set: function (x) {
      this.x_liz53d$_0 = x;
    }
  });
  Object.defineProperty(GameActor$Player.prototype, 'y', {
    get: function () {
      return this.y_liz548$_0;
    },
    set: function (y) {
      this.y_liz548$_0 = y;
    }
  });
  function GameActor$Player$CollisionOccurrence() {
  }
  function GameActor$Player$CollisionOccurrence$Registered(suspect) {
    GameActor$Player$CollisionOccurrence.call(this);
    this.suspect = suspect;
  }
  GameActor$Player$CollisionOccurrence$Registered.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Registered',
    interfaces: [GameActor$Player$CollisionOccurrence]
  };
  GameActor$Player$CollisionOccurrence$Registered.prototype.component1 = function () {
    return this.suspect;
  };
  GameActor$Player$CollisionOccurrence$Registered.prototype.copy_jdryg8$ = function (suspect) {
    return new GameActor$Player$CollisionOccurrence$Registered(suspect === void 0 ? this.suspect : suspect);
  };
  GameActor$Player$CollisionOccurrence$Registered.prototype.toString = function () {
    return 'Registered(suspect=' + Kotlin.toString(this.suspect) + ')';
  };
  GameActor$Player$CollisionOccurrence$Registered.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.suspect) | 0;
    return result;
  };
  GameActor$Player$CollisionOccurrence$Registered.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.suspect, other.suspect))));
  };
  function GameActor$Player$CollisionOccurrence$NonExistent() {
    GameActor$Player$CollisionOccurrence$NonExistent_instance = this;
    GameActor$Player$CollisionOccurrence.call(this);
  }
  GameActor$Player$CollisionOccurrence$NonExistent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NonExistent',
    interfaces: [GameActor$Player$CollisionOccurrence]
  };
  var GameActor$Player$CollisionOccurrence$NonExistent_instance = null;
  function GameActor$Player$CollisionOccurrence$NonExistent_getInstance() {
    if (GameActor$Player$CollisionOccurrence$NonExistent_instance === null) {
      new GameActor$Player$CollisionOccurrence$NonExistent();
    }return GameActor$Player$CollisionOccurrence$NonExistent_instance;
  }
  GameActor$Player$CollisionOccurrence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollisionOccurrence',
    interfaces: []
  };
  function GameActor$Player$collision$lambda(this$Player) {
    return function (suspects) {
      var tmp$, tmp$_0;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = suspects.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          var this$Player_0 = this$Player;
          if (!equals(element, this$Player_0) && this$Player_0.x === element.x && this$Player_0.y === element.y) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      return (tmp$_0 = (tmp$ = firstOrNull$result) != null ? new GameActor$Player$CollisionOccurrence$Registered(tmp$) : null) != null ? tmp$_0 : GameActor$Player$CollisionOccurrence$NonExistent_getInstance();
    };
  }
  GameActor$Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [GameActor]
  };
  function GameActor$Fruit(id, x, y) {
    GameActor.call(this, id, x, y);
    this.id_1s3z5t$_0 = id;
    this.x_4iwnpe$_0 = x;
    this.y_4iwnq9$_0 = y;
  }
  Object.defineProperty(GameActor$Fruit.prototype, 'id', {
    get: function () {
      return this.id_1s3z5t$_0;
    }
  });
  Object.defineProperty(GameActor$Fruit.prototype, 'x', {
    get: function () {
      return this.x_4iwnpe$_0;
    },
    set: function (x) {
      this.x_4iwnpe$_0 = x;
    }
  });
  Object.defineProperty(GameActor$Fruit.prototype, 'y', {
    get: function () {
      return this.y_4iwnq9$_0;
    },
    set: function (y) {
      this.y_4iwnq9$_0 = y;
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
  GameActor$Fruit.prototype.component2 = function () {
    return this.x;
  };
  GameActor$Fruit.prototype.component3 = function () {
    return this.y;
  };
  GameActor$Fruit.prototype.copy_ai6r6m$ = function (id, x, y) {
    return new GameActor$Fruit(id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GameActor$Fruit.prototype.toString = function () {
    return 'Fruit(id=' + Kotlin.toString(this.id) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GameActor$Fruit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GameActor$Fruit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  GameActor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameActor',
    interfaces: []
  };
  function GameController() {
    GameController_instance = this;
  }
  function GameController$addFruitsTo$lambda$generateRandomCoord(closure$canvas, this$) {
    return function closure$generateRandomCoord(name) {
      var tmp$, tmp$_0;
      switch (name) {
        case 120:
          tmp$ = closure$canvas.width;
          break;
        case 121:
          tmp$ = closure$canvas.height;
          break;
        default:tmp$ = 0;
          break;
      }
      var comparable = tmp$;
      try {
        var $receiver = Random.Default.nextInt_za3lpa$(comparable);
        closure$generateRandomCoord;
        var this$_0 = this$;
        var closure$generateRandomCoord_0 = closure$generateRandomCoord;
        var block$result;
        var none$result;
        none$break: do {
          var tmp$_1;
          if (Kotlin.isType(this$_0, Collection) && this$_0.isEmpty()) {
            none$result = true;
            break none$break;
          }tmp$_1 = this$_0.iterator();
          while (tmp$_1.hasNext()) {
            var element = tmp$_1.next();
            if (equals($receiver, name === 120 ? element.x : name === 121 ? element.y : 0)) {
              none$result = false;
              break none$break;
            }}
          none$result = true;
        }
         while (false);
        if (none$result) {
          block$result = $receiver;
        } else {
          block$result = closure$generateRandomCoord_0(name);
        }
        tmp$_0 = block$result;
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          console.log('[game] Fruit generation is canceled until one of the existent ones is collected.');
          tmp$_0 = null;
        } else
          throw e;
      }
      return tmp$_0;
    };
  }
  function GameController$addFruitsTo$lambda$lambda(closure$generateRandomCoord, this$) {
    return function () {
      var tmp$ = to(closure$generateRandomCoord(120), closure$generateRandomCoord(121));
      var generatedX = tmp$.component1()
      , generatedY = tmp$.component2();
      if (generatedX != null && generatedY != null) {
        var fruit = new GameActor$Fruit('fruit' + toString(get_lastIndex(this$) + 1 | 0), generatedX, generatedY);
        this$.add_11rb$(fruit);
      }return Unit;
    };
  }
  GameController.prototype.addFruitsTo_ap7jt0$ = function (canvas) {
    var $receiver = GameModel_getInstance().actors_8be2vx$;
    var generateRandomCoord = GameController$addFruitsTo$lambda$generateRandomCoord(canvas, $receiver);
    window.setInterval(GameController$addFruitsTo$lambda$lambda(generateRandomCoord, $receiver), 5000);
    return $receiver;
  };
  function GameController$drawActorsOn$lambda(closure$canvas, closure$currentPlayer, this$GameController) {
    return function (it) {
      this$GameController.drawActorsOn_t7v64p$(closure$canvas, closure$currentPlayer);
      return Unit;
    };
  }
  GameController.prototype.drawActorsOn_t7v64p$ = function (canvas, currentPlayer) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    $receiver.clearRect(0.0, 0.0, canvas.width, canvas.height);
    var tmp$_0;
    tmp$_0 = GameModel_getInstance().actors_8be2vx$.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1;
      if (Kotlin.isType(element, GameActor$Player))
        tmp$_1 = equals(element, currentPlayer) ? 'blue' : 'gray';
      else if (Kotlin.isType(element, GameActor$Fruit))
        tmp$_1 = 'red';
      else
        tmp$_1 = Kotlin.noWhenBranchMatched();
      $receiver.fillStyle = tmp$_1;
      $receiver.fillRect(element.x, element.y, 1.0, 1.0);
    }
    window.requestAnimationFrame(GameController$drawActorsOn$lambda(canvas, currentPlayer, this));
  };
  GameController.prototype.moveOn_edy6x2$ = function ($receiver, canvas, key) {
    if (Kotlin.isType(GameModel_getInstance().state_8be2vx$, GameState$InProgress)) {
      if ((equals(key, 'ArrowUp') || equals(key, 'w')) && $receiver.y - 1 >= 0) {
        $receiver.y = $receiver.y - 1;
        $receiver.y;
      }if ((equals(key, 'ArrowLeft') || equals(key, 'a')) && $receiver.x - 1 >= 0) {
        $receiver.x = $receiver.x - 1;
        $receiver.x;
      }if ((equals(key, 'ArrowRight') || equals(key, 'd')) && $receiver.x + 1 < canvas.width) {
        $receiver.x = $receiver.x + 1;
        $receiver.x;
      }if ((equals(key, 'ArrowDown') || equals(key, 's')) && $receiver.y + 1 < canvas.height) {
        $receiver.y = $receiver.y + 1;
        $receiver.y;
      }}};
  GameController.prototype.collectFruitAs_lm2a0d$ = function (player, audio) {
    var $receiver = GameModel_getInstance();
    var $receiver_0 = player.collision($receiver.actors_8be2vx$);
    if (Kotlin.isType($receiver_0, GameActor$Player$CollisionOccurrence$Registered)) {
      var tmp$;
      var $receiver_1 = Kotlin.isType(tmp$ = document.createElement('source'), HTMLSourceElement) ? tmp$ : throwCCE();
      $receiver_1.src = 'src/coin.mp3';
      var source = $receiver_1;
      audio.preload = 'auto';
      audio.currentTime = 0.1;
      audio.appendChild(source);
      audio.play();
      player.points = player.points + 1 | 0;
      $receiver.actors_8be2vx$.remove_11rb$($receiver_0.suspect);
    } else
      $receiver.actors_8be2vx$;
  };
  GameController.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameController',
    interfaces: []
  };
  var GameController_instance = null;
  function GameController_getInstance() {
    if (GameController_instance === null) {
      new GameController();
    }return GameController_instance;
  }
  function GameModel() {
    GameModel_instance = this;
    this.state_8be2vx$ = GameState$Waiting_getInstance();
    this.actors_8be2vx$ = ArrayList_init();
  }
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
  function GameView(canvas, audio) {
    this.canvas = canvas;
    this.audio = audio;
    var $receiver = new GameActor$Player('player1', 8.0, 8.0);
    window.addEventListener('keydown', EventListener(GameView$currentPlayer$lambda$lambda($receiver, this)), true);
    this.currentPlayer_0 = $receiver;
  }
  GameView.prototype.start = function () {
    var $receiver = GameModel_getInstance();
    $receiver.state_8be2vx$ = GameState$InProgress_getInstance();
    $receiver.actors_8be2vx$.add_11rb$(this.currentPlayer_0);
    var $receiver_0 = GameController_getInstance();
    $receiver_0.addFruitsTo_ap7jt0$(this.canvas);
    $receiver_0.drawActorsOn_t7v64p$(this.canvas, this.currentPlayer_0);
    console.log('[game] Game started.');
  };
  GameView.prototype.stop = function () {
    var $receiver = GameModel_getInstance();
    $receiver.state_8be2vx$ = GameState$Finished_getInstance();
    $receiver.actors_8be2vx$.clear();
    console.log('[game] Game stopped.');
  };
  function GameView$currentPlayer$lambda$lambda(this$, this$GameView) {
    return function (event) {
      var receiver = GameController_getInstance();
      var this$_0 = this$;
      var this$GameView_0 = this$GameView;
      var tmp$;
      receiver.moveOn_edy6x2$(this$_0, this$GameView_0.canvas, (Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE()).key);
      receiver.collectFruitAs_lm2a0d$(this$_0, this$GameView_0.audio);
      return Unit;
    };
  }
  GameView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameView',
    interfaces: []
  };
  function main() {
    var tmp$, tmp$_0;
    var game = new GameView(Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = document.getElementById('audio'), HTMLAudioElement) ? tmp$_0 : throwCCE());
    game.start();
  }
  GameActor$Player$CollisionOccurrence.Registered = GameActor$Player$CollisionOccurrence$Registered;
  Object.defineProperty(GameActor$Player$CollisionOccurrence, 'NonExistent', {
    get: GameActor$Player$CollisionOccurrence$NonExistent_getInstance
  });
  GameActor$Player.CollisionOccurrence = GameActor$Player$CollisionOccurrence;
  GameActor.Player = GameActor$Player;
  GameActor.Fruit = GameActor$Fruit;
  var package$code = _.code || (_.code = {});
  var package$game = package$code.game || (package$code.game = {});
  package$game.GameActor = GameActor;
  Object.defineProperty(package$game, 'GameController', {
    get: GameController_getInstance
  });
  Object.defineProperty(package$game, 'GameModel', {
    get: GameModel_getInstance
  });
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
  package$game.GameView = GameView;
  package$code.main = main;
  main();
  Kotlin.defineModule('PXL', _);
  return _;
}(typeof PXL === 'undefined' ? {} : PXL, kotlin);
