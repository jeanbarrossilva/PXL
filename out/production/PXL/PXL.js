if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PXL'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PXL'.");
}var PXL = function (_, Kotlin) {
  'use strict';
  var Random = Kotlin.kotlin.random.Random;
  var equals = Kotlin.equals;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
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
  function Game$addFruits$lambda$generateRandomCoord(this$Game, this$) {
    return function closure$generateRandomCoord(name) {
      var tmp$;
      switch (name) {
        case 120:
          tmp$ = this$Game.canvas.width;
          break;
        case 121:
          tmp$ = this$Game.canvas.height;
          break;
        default:tmp$ = 0;
          break;
      }
      var comparable = tmp$;
      var $receiver = Random.Default.nextInt_za3lpa$(comparable);
      closure$generateRandomCoord;
      var this$_0 = this$;
      var closure$generateRandomCoord_0 = closure$generateRandomCoord;
      var none$result;
      none$break: do {
        var tmp$_0;
        if (Kotlin.isType(this$_0, Collection) && this$_0.isEmpty()) {
          none$result = true;
          break none$break;
        }tmp$_0 = this$_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (Kotlin.isType(element, GameActor$Fruit) && equals($receiver, name === 120 ? element.x : name === 121 ? element.y : 0)) {
            none$result = false;
            break none$break;
          }}
        none$result = true;
      }
       while (false);
      return none$result ? $receiver : closure$generateRandomCoord_0(name);
    };
  }
  function Game$addFruits$lambda$lambda(this$, closure$generateRandomCoord) {
    return function () {
      var fruit = new GameActor$Fruit('fruit' + toString(get_lastIndex(this$)) + toString(1), closure$generateRandomCoord(120), closure$generateRandomCoord(121));
      return this$.add_11rb$(fruit);
    };
  }
  Game.prototype.addFruits_0 = function () {
    var $receiver = this.actors_0;
    var generateRandomCoord = Game$addFruits$lambda$generateRandomCoord(this, $receiver);
    window.setInterval(Game$addFruits$lambda$lambda($receiver, generateRandomCoord), 5000);
    return $receiver;
  };
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
    var tmp$_0;
    tmp$_0 = this.actors_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1;
      if (Kotlin.isType(element, GameActor$Player))
        tmp$_1 = equals(element, this.currentPlayer_0) ? 'yellow' : 'gray';
      else if (Kotlin.isType(element, GameActor$Fruit))
        tmp$_1 = 'green';
      else
        tmp$_1 = Kotlin.noWhenBranchMatched();
      $receiver_0.fillStyle = tmp$_1;
      $receiver_0.fillRect(element.x, element.y, 1.0, 1.0);
    }
    window.requestAnimationFrame(Game$drawActors$lambda$lambda(this));
  };
  Game.prototype.start = function () {
    this.state_8be2vx$ = GameState$InProgress_getInstance();
    this.actors_0.add_11rb$(this.currentPlayer_0);
    this.addFruits_0();
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
  function GameActor(id, x, y) {
    this.id_ym8tau$_0 = id;
    this.x_zhihu1$_0 = x;
    this.y_zhiht6$_0 = y;
  }
  Object.defineProperty(GameActor.prototype, 'id', {
    get: function () {
      return this.id_ym8tau$_0;
    }
  });
  Object.defineProperty(GameActor.prototype, 'x', {
    get: function () {
      return this.x_zhihu1$_0;
    },
    set: function (x) {
      this.x_zhihu1$_0 = x;
    }
  });
  Object.defineProperty(GameActor.prototype, 'y', {
    get: function () {
      return this.y_zhiht6$_0;
    },
    set: function (y) {
      this.y_zhiht6$_0 = y;
    }
  });
  function GameActor$Player(id, x, y) {
    GameActor.call(this, id, x, y);
    this.id_nrpo55$_0 = id;
    this.x_f9t4my$_0 = x;
    this.y_f9t4nt$_0 = y;
  }
  Object.defineProperty(GameActor$Player.prototype, 'id', {
    get: function () {
      return this.id_nrpo55$_0;
    }
  });
  Object.defineProperty(GameActor$Player.prototype, 'x', {
    get: function () {
      return this.x_f9t4my$_0;
    },
    set: function (x) {
      this.x_f9t4my$_0 = x;
    }
  });
  Object.defineProperty(GameActor$Player.prototype, 'y', {
    get: function () {
      return this.y_f9t4nt$_0;
    },
    set: function (y) {
      this.y_f9t4nt$_0 = y;
    }
  });
  GameActor$Player.prototype.isMovableIn_89lca3$ = function (game, event) {
    if (Kotlin.isType(game.state_8be2vx$, GameState$InProgress)) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.y - 1 >= 0) {
            this.y = this.y - 1;
            this.y;
          }
          break;
        case 'ArrowLeft':
          if (this.x - 1 >= 0) {
            this.x = this.x - 1;
            this.x;
          }
          break;
        case 'ArrowRight':
          if (this.x + 1 < game.canvas.width) {
            this.x = this.x + 1;
            this.x;
          }
          break;
        case 'ArrowDown':
          if (this.y + 1 < game.canvas.height) {
            this.y = this.y + 1;
            this.y;
          }
          break;
      }
    }};
  GameActor$Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [GameActor]
  };
  function GameActor$Fruit(id, x, y) {
    GameActor.call(this, id, x, y);
    this.id_819zm8$_0 = id;
    this.x_vthrxt$_0 = x;
    this.y_vthryo$_0 = y;
  }
  Object.defineProperty(GameActor$Fruit.prototype, 'id', {
    get: function () {
      return this.id_819zm8$_0;
    }
  });
  Object.defineProperty(GameActor$Fruit.prototype, 'x', {
    get: function () {
      return this.x_vthrxt$_0;
    },
    set: function (x) {
      this.x_vthrxt$_0 = x;
    }
  });
  Object.defineProperty(GameActor$Fruit.prototype, 'y', {
    get: function () {
      return this.y_vthryo$_0;
    },
    set: function (y) {
      this.y_vthryo$_0 = y;
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
