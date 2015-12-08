"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('first-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'first-app/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('first-app/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 27
            },
            "end": {
              "line": 3,
              "column": 50
            }
          },
          "moduleName": "first-app/application/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 27
            },
            "end": {
              "line": 4,
              "column": 58
            }
          },
          "moduleName": "first-app/application/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Examples");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "first-app/application/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"class","navbar navbar-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","nav navbar-nav");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"class","nav-item");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"class","nav-item");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["block","link-to",["home"],[],0,null,["loc",[null,[3,27],[3,62]]]],
        ["block","link-to",["examples"],[],1,null,["loc",[null,[4,27],[4,70]]]],
        ["content","outlet",["loc",[null,[7,0],[7,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('first-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'first-app/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('first-app/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('first-app/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('first-app/examples/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        showList: false,
        actions: {
            show: function show() {
                this.set('showList', true);
            },
            hide: function hide() {
                this.set('showList', false);
            }
        },
        people: [{
            name: 'Jordan Houston',
            age: '5 April 1975',
            alias: 'Juicy J',
            hometown: 'Memphis, Tennessee'
        }, {
            name: 'Patrick Houston',
            age: '8 February 1973',
            alias: 'Project Pat',
            hometown: 'Memphis, Tennessee'
        }, {
            name: 'Paul Beauregard',
            age: '12 January 1975',
            alias: 'DJ Paul',
            hometown: 'Memphis, Tennessee'
        }]
    });

});
define('first-app/examples/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('first-app/examples/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "first-app/examples/template.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
            morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
            return morphs;
          },
          statements: [
            ["content","person.name",["loc",[null,[11,6],[11,21]]]],
            ["content","person.age",["loc",[null,[13,7],[13,21]]]],
            ["content","person.alias",["loc",[null,[14,7],[14,23]]]],
            ["content","person.hometown",["loc",[null,[15,7],[15,26]]]]
          ],
          locals: ["person"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 1
            },
            "end": {
              "line": 19,
              "column": 1
            }
          },
          "moduleName": "first-app/examples/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","text-center");
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("showList");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" is set to true!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-default");
          var el2 = dom.createTextNode("Hide");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
          return morphs;
        },
        statements: [
          ["element","action",["hide"],[],["loc",[null,[8,33],[8,50]]]],
          ["block","each",[["get","people",["loc",[null,[10,10],[10,16]]]]],[],0,null,["loc",[null,[10,2],[17,11]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 1
            },
            "end": {
              "line": 22,
              "column": 1
            }
          },
          "moduleName": "first-app/examples/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","text-center");
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("showList");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" is set to false!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-default");
          var el2 = dom.createTextNode("Show");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["show"],[],["loc",[null,[21,33],[21,50]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "first-app/examples/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","jumbotron");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("This is the examples page!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]],
        ["block","if",[["get","showList",["loc",[null,[6,7],[6,15]]]]],[],0,1,["loc",[null,[6,1],[22,8]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('first-app/home/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        content: 'This is some filler content for the container. It is said that is left in the lands of Perrica is the barren canyon of Lake Superrior. Tiller, get in the boat!',
        h1: 'jumbotron',
        body: 'container',
        spLogo: 'https://www.ostraining.com/cdn/images/logo/sitepoint_logo_small.jpg',
        responsive: 'img-responsive'
    });

});
define('first-app/home/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('first-app/home/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 6
          }
        },
        "moduleName": "first-app/home/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("This is the Jumbotron!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"alt","SitePoint Logo");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [4]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createAttrMorph(element1, 'class');
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[4] = dom.createAttrMorph(element2, 'src');
        morphs[5] = dom.createAttrMorph(element2, 'class');
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]],
        ["attribute","class",["concat",[["get","h1",["loc",[null,[2,14],[2,16]]]]]]],
        ["attribute","class",["concat",[["get","body",["loc",[null,[6,14],[6,18]]]]]]],
        ["content","content",["loc",[null,[7,5],[7,16]]]],
        ["attribute","src",["concat",[["get","spLogo",["loc",[null,[8,14],[8,20]]]]]]],
        ["attribute","class",["concat",[["get","responsive",["loc",[null,[8,33],[8,43]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('first-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'first-app/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('first-app/initializers/export-application-global', ['exports', 'ember', 'first-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('first-app/router', ['exports', 'ember', 'first-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('home', {
      path: '/'
    });
    this.route('about', {});
    this.route('examples', {});
  });

  exports['default'] = Router;

});
define('first-app/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('first-app/tests/examples/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - examples');
  QUnit.test('examples/controller.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'examples/controller.js should pass jshint.\nexamples/controller.js: line 7, col 39, Missing semicolon.\nexamples/controller.js: line 10, col 40, Missing semicolon.\n\n2 errors'); 
  });

});
define('first-app/tests/examples/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - examples');
  QUnit.test('examples/route.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'examples/route.js should pass jshint.'); 
  });

});
define('first-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'first-app/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('first-app/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('first-app/tests/helpers/start-app', ['exports', 'ember', 'first-app/app', 'first-app/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('first-app/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('first-app/tests/home/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - home');
  QUnit.test('home/controller.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'home/controller.js should pass jshint.'); 
  });

});
define('first-app/tests/home/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - home');
  QUnit.test('home/route.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'home/route.js should pass jshint.'); 
  });

});
define('first-app/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('first-app/tests/test-helper', ['first-app/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('first-app/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('first-app/tests/unit/about/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('first-app/tests/unit/about/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/about');
  QUnit.test('unit/about/route-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/about/route-test.js should pass jshint.'); 
  });

});
define('first-app/tests/unit/examples/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:examples', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('first-app/tests/unit/examples/controller-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/examples');
  QUnit.test('unit/examples/controller-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/examples/controller-test.js should pass jshint.'); 
  });

});
define('first-app/tests/unit/examples/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:examples', 'Unit | Route | examples', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('first-app/tests/unit/examples/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/examples');
  QUnit.test('unit/examples/route-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/examples/route-test.js should pass jshint.'); 
  });

});
define('first-app/tests/unit/home/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('first-app/tests/unit/home/controller-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/home');
  QUnit.test('unit/home/controller-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/home/controller-test.js should pass jshint.'); 
  });

});
define('first-app/tests/unit/home/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('first-app/tests/unit/home/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/home');
  QUnit.test('unit/home/route-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/home/route-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('first-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'first-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("first-app/tests/test-helper");
} else {
  require("first-app/app")["default"].create({"name":"first-app","version":"0.0.0+56c662d3"});
}

/* jshint ignore:end */
//# sourceMappingURL=first-app.map