import {
  require_prop_types
} from "./chunk-JL2MEAST.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-input-position/dist/utils.js
var require_utils = __commonJS({
  "node_modules/react-input-position/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = require_react();
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function isReactComponent(element) {
      return typeof element.type === "function";
    }
    function decorateChild(child, props) {
      return (0, _react.cloneElement)(child, props);
    }
    function shouldDecorateChild(child) {
      return !!child && isReactComponent(child);
    }
    function decorateChildren(children, props) {
      return _react.Children.map(children, function(child) {
        return shouldDecorateChild(child) ? decorateChild(child, props) : child;
      });
    }
    function preventDefault(e) {
      e.preventDefault();
    }
    function convertRange(oldMin, oldMax, newMin, newMax, oldValue) {
      var percent = (oldValue - oldMin) / (oldMax - oldMin);
      return percent * (newMax - newMin) + newMin;
    }
    function limitPosition(minX, maxX, minY, maxY) {
      var itemPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      var position = _objectSpread({}, itemPosition);
      if (minX !== void 0 && position.x < minX) {
        position.x = minX;
      } else if (maxX !== void 0 && position.x > maxX) {
        position.x = maxX;
      }
      if (minY !== void 0 && position.y < minY) {
        position.y = minY;
      } else if (maxY !== void 0 && position.y > maxY) {
        position.y = maxY;
      }
      return position;
    }
    function createAdjustedLimits(minX, maxX, minY, maxY) {
      var elemDimensions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      var itemDimensions = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      var limitBySize = arguments.length > 6 ? arguments[6] : void 0;
      var internal = arguments.length > 7 ? arguments[7] : void 0;
      var limits = {
        minX,
        maxX,
        minY,
        maxY
      };
      if (limits.maxX < 0) {
        limits.maxX = elemDimensions.width + limits.maxX;
      }
      if (limits.maxY < 0) {
        limits.maxY = elemDimensions.height + limits.maxY;
      }
      if (!limitBySize) {
        return limits;
      }
      if (internal) {
        limits.minX = 0;
        limits.minY = 0;
        limits.maxX = elemDimensions.width - itemDimensions.width;
        limits.maxY = elemDimensions.height - itemDimensions.height;
        if (itemDimensions.width > elemDimensions.width || itemDimensions.height > elemDimensions.height) {
          limits.maxX = 0;
          limits.maxY = 0;
        }
      } else if (itemDimensions.width || itemDimensions.height) {
        limits.maxX = 0;
        limits.maxY = 0;
        limits.minX = -itemDimensions.width + elemDimensions.width;
        limits.minY = -itemDimensions.height + elemDimensions.height;
        if (itemDimensions.width < elemDimensions.width || itemDimensions.height < elemDimensions.height) {
          limits.minX = 0;
          limits.minY = 0;
        }
      }
      return limits;
    }
    function calculateItemPosition() {
      var itemPosition = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var prevActivePosition = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var activePosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var multiplier = arguments.length > 3 ? arguments[3] : void 0;
      var newItemPosition = _objectSpread({}, itemPosition);
      var moveX = (activePosition.x - prevActivePosition.x) * multiplier;
      var moveY = (activePosition.y - prevActivePosition.y) * multiplier;
      newItemPosition.x += moveX;
      newItemPosition.y += moveY;
      return newItemPosition;
    }
    function alignItemOnPosition() {
      var elemDimensions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var itemDimensions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var position = arguments.length > 2 ? arguments[2] : void 0;
      var oldMaxX = elemDimensions.width;
      var newMaxX = -(itemDimensions.width || 0) + elemDimensions.width;
      var oldMaxY = elemDimensions.height;
      var newMaxY = -(itemDimensions.height || 0) + elemDimensions.height;
      return {
        x: convertRange(0, oldMaxX, 0, newMaxX, position.x),
        y: convertRange(0, oldMaxY, 0, newMaxY, position.y)
      };
    }
    function centerItemOnPosition() {
      var elemDimensions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var itemDimensions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var position = arguments.length > 2 ? arguments[2] : void 0;
      var itemPosition = alignItemOnPosition(elemDimensions, itemDimensions, position);
      itemPosition.x += elemDimensions.width / 2 - position.x;
      itemPosition.y += elemDimensions.height / 2 - position.y;
      return itemPosition;
    }
    var _default = {
      decorateChildren,
      preventDefault,
      convertRange,
      limitPosition,
      createAdjustedLimits,
      calculateItemPosition,
      alignItemOnPosition,
      centerItemOnPosition
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/mouseActivation/click.js
var require_click = __commonJS({
  "node_modules/react-input-position/dist/mouseActivation/click.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = _interopRequireDefault(require_utils());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function mouseDown(e) {
      this.mouseDown = true;
      this.clickMoveStartRef = e.clientX + e.clientY;
    }
    function mouseUp(e) {
      if (!this.mouseDown) return;
      this.mouseDown = false;
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      var clickMoveEnd = position.x + position.y;
      var diff = Math.abs(this.clickMoveStartRef - clickMoveEnd);
      if (diff < this.props.clickMoveLimit) {
        this.toggleActive(position);
      }
    }
    function mouseMove(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      if (!this.getState().active) {
        return this.setPassivePosition(position);
      }
      this.setPosition(position, this.mouseDown);
    }
    function mouseLeave() {
      this.mouseDown = false;
    }
    var _default = {
      mouseDown,
      mouseUp,
      mouseMove,
      mouseLeave,
      dragStart: _utils["default"].preventDefault
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/mouseActivation/doubleClick.js
var require_doubleClick = __commonJS({
  "node_modules/react-input-position/dist/mouseActivation/doubleClick.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = _interopRequireDefault(require_utils());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function mouseDown() {
      this.mouseDown = true;
    }
    function mouseUp() {
      this.mouseDown = false;
    }
    function dblClick(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      this.toggleActive(position);
    }
    function mouseMove(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      if (!this.getState().active) {
        return this.setPassivePosition(position);
      }
      this.setPosition(position, this.mouseDown);
    }
    function mouseLeave() {
      this.mouseDown = false;
    }
    var _default = {
      mouseDown,
      mouseUp,
      dblClick,
      mouseMove,
      mouseLeave,
      dragStart: _utils["default"].preventDefault
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/mouseActivation/hover.js
var require_hover = __commonJS({
  "node_modules/react-input-position/dist/mouseActivation/hover.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = _interopRequireDefault(require_utils());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function mouseDown() {
      this.mouseDown = true;
    }
    function mouseUp() {
      this.mouseDown = false;
    }
    function mouseMove(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      if (!this.getState().active) {
        return this.activate(position);
      }
      this.setPosition(position, this.mouseDown);
    }
    function mouseEnter(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      this.activate(position);
    }
    function mouseLeave() {
      this.deactivate();
      this.mouseDown = false;
    }
    var _default = {
      mouseDown,
      mouseUp,
      mouseMove,
      mouseEnter,
      mouseLeave,
      dragStart: _utils["default"].preventDefault
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/mouseActivation/mouseDown.js
var require_mouseDown = __commonJS({
  "node_modules/react-input-position/dist/mouseActivation/mouseDown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = _interopRequireDefault(require_utils());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function mouseDown(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      this.activate(position);
    }
    function mouseUp() {
      this.deactivate();
      if (this.mouseOutside) {
        addRemoveOutsideHandlers.call(this);
      }
    }
    function mouseMove(e) {
      var position = {
        x: e.clientX,
        y: e.clientY
      };
      if (!this.getState().active) {
        return this.setPassivePosition(position);
      }
      this.setPosition(position, true);
    }
    function mouseEnter() {
      if (this.mouseOutside) {
        this.mouseOutside = false;
        addRemoveOutsideHandlers.call(this);
      }
    }
    function mouseLeave() {
      if (!this.getState().active) {
        return;
      }
      if (!this.props.mouseDownAllowOutside) {
        return this.deactivate();
      }
      this.mouseOutside = true;
      addRemoveOutsideHandlers.call(this, true);
    }
    function addRemoveOutsideHandlers(add) {
      this.mouseHandlers.filter(function(h) {
        return h.event === "mouseup" || h.event === "mousemove";
      }).forEach(function(_ref) {
        var event = _ref.event, handler = _ref.handler;
        if (add) {
          window.addEventListener(event, handler);
        } else {
          window.removeEventListener(event, handler);
        }
      });
    }
    var _default = {
      mouseDown,
      mouseUp,
      mouseMove,
      mouseLeave,
      mouseEnter,
      dragStart: _utils["default"].preventDefault
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/mouseActivation/index.js
var require_mouseActivation = __commonJS({
  "node_modules/react-input-position/dist/mouseActivation/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _click = _interopRequireDefault(require_click());
    var _doubleClick = _interopRequireDefault(require_doubleClick());
    var _hover = _interopRequireDefault(require_hover());
    var _mouseDown = _interopRequireDefault(require_mouseDown());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _default = {
      click: _click["default"],
      doubleClick: _doubleClick["default"],
      hover: _hover["default"],
      mouseDown: _mouseDown["default"]
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/touchActivation/doubleTap.js
var require_doubleTap = __commonJS({
  "node_modules/react-input-position/dist/touchActivation/doubleTap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function touchStart() {
      this.touched = true;
      this.justTouched = true;
      this.startTapTimer();
    }
    function touchEnd(e) {
      if (e.cancelable) e.preventDefault();
      this.touched = false;
      this.justTouched = false;
      if (this.tapTimedOut) {
        this.tapTimedOut = false;
        return;
      }
      clearTimeout(this.tapTimer);
      if (this.tapped && !this.doubleTapTimedOut) {
        clearTimeout(this.doubleTapTimer);
        var touch = e.changedTouches[0];
        var position = {
          x: touch.clientX,
          y: touch.clientY
        };
        this.toggleActive(position);
        this.tapped = false;
        return;
      }
      this.tapTimedOut = false;
      this.doubleTapTimedOut = false;
      this.tapped = true;
      this.startDoubleTapTimer();
    }
    function touchMove(e) {
      if (!this.getState().active) return;
      if (e.cancelable) e.preventDefault();
      var touch = e.touches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.setPosition(position, this.touched && !this.justTouched);
      this.justTouched = false;
    }
    function touchCancel() {
      this.deactivate();
    }
    var _default = {
      touchStart,
      touchEnd,
      touchMove,
      touchCancel
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/touchActivation/longTouch.js
var require_longTouch = __commonJS({
  "node_modules/react-input-position/dist/touchActivation/longTouch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function touchStart(e) {
      this.touched = true;
      this.justTouched = true;
      clearTimeout(this.longTouchTimer);
      var touch = e.touches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.longTouchStartRef = position.x + position.y;
      this.startLongTouchTimer(position);
    }
    function touchEnd(e) {
      if (e.cancelable) e.preventDefault();
      this.touched = false;
      this.justTouched = false;
    }
    function touchMove(e) {
      var touch = e.touches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      var end = position.x + position.y;
      var diff = Math.abs(this.longTouchStartRef - end);
      if (diff > this.props.longTouchMoveLimit) {
        clearTimeout(this.longTouchTimer);
      }
      if (!this.getState().active) return;
      if (e.cancelable) e.preventDefault();
      this.setPosition(position, this.touched && !this.justTouched);
      this.justTouched = false;
    }
    function touchCancel() {
      this.deactivate();
    }
    var _default = {
      touchStart,
      touchEnd,
      touchMove,
      touchCancel
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/touchActivation/tap.js
var require_tap = __commonJS({
  "node_modules/react-input-position/dist/touchActivation/tap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function touchStart() {
      this.touched = true;
      this.justTouched = true;
      this.startTapTimer();
    }
    function touchEnd(e) {
      if (e.cancelable) e.preventDefault();
      this.touched = false;
      this.justTouched = false;
      if (this.tapTimedOut) {
        this.tapTimedOut = false;
        return;
      }
      clearTimeout(this.tapTimer);
      var touch = e.changedTouches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.toggleActive(position);
      this.tapTimedOut = false;
    }
    function touchMove(e) {
      if (!this.getState().active) return;
      if (e.cancelable) e.preventDefault();
      var touch = e.touches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.setPosition(position, this.touched && !this.justTouched);
      this.justTouched = false;
    }
    function touchCancel() {
      this.deactivate();
    }
    var _default = {
      touchStart,
      touchEnd,
      touchMove,
      touchCancel
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/touchActivation/touch.js
var require_touch = __commonJS({
  "node_modules/react-input-position/dist/touchActivation/touch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function touchStart(e) {
      this.touched = true;
      this.justTouched = true;
      var touch = e.touches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.activate(position);
    }
    function touchEnd(e) {
      if (e.cancelable) e.preventDefault();
      this.touched = false;
      this.justTouched = false;
      this.deactivate();
    }
    function touchMove(e) {
      if (!this.getState().active) return;
      if (e.cancelable) e.preventDefault();
      var touch = e.touches[0];
      var position = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.setPosition(position, this.touched && !this.justTouched);
      this.justTouched = false;
    }
    function touchCancel() {
      this.deactivate();
    }
    var _default = {
      touchStart,
      touchEnd,
      touchMove,
      touchCancel
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/touchActivation/index.js
var require_touchActivation = __commonJS({
  "node_modules/react-input-position/dist/touchActivation/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _doubleTap = _interopRequireDefault(require_doubleTap());
    var _longTouch = _interopRequireDefault(require_longTouch());
    var _tap = _interopRequireDefault(require_tap());
    var _touch = _interopRequireDefault(require_touch());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _default = {
      doubleTap: _doubleTap["default"],
      longTouch: _longTouch["default"],
      tap: _tap["default"],
      touch: _touch["default"]
    };
    exports["default"] = _default;
  }
});

// node_modules/react-input-position/dist/constants.js
var require_constants = __commonJS({
  "node_modules/react-input-position/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TOUCH_ACTIVATION = exports.MOUSE_ACTIVATION = void 0;
    var MOUSE_ACTIVATION = {
      CLICK: "click",
      DOUBLE_CLICK: "doubleClick",
      HOVER: "hover",
      MOUSE_DOWN: "mouseDown"
    };
    exports.MOUSE_ACTIVATION = MOUSE_ACTIVATION;
    var TOUCH_ACTIVATION = {
      DOUBLE_TAP: "doubleTap",
      LONG_TOUCH: "longTouch",
      TAP: "tap",
      TOUCH: "touch"
    };
    exports.TOUCH_ACTIVATION = TOUCH_ACTIVATION;
  }
});

// node_modules/react-input-position/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-input-position/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "MOUSE_ACTIVATION", {
      enumerable: true,
      get: function get() {
        return _constants.MOUSE_ACTIVATION;
      }
    });
    Object.defineProperty(exports, "TOUCH_ACTIVATION", {
      enumerable: true,
      get: function get() {
        return _constants.TOUCH_ACTIVATION;
      }
    });
    exports["default"] = exports.defaultState = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _mouseActivation = _interopRequireDefault(require_mouseActivation());
    var _touchActivation = _interopRequireDefault(require_touchActivation());
    var _constants = require_constants();
    var _utils = _interopRequireDefault(require_utils());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var defaultState = {
      active: false,
      activePosition: {
        x: 0,
        y: 0
      },
      prevActivePosition: {
        x: 0,
        y: 0
      },
      passivePosition: {
        x: 0,
        y: 0
      },
      elementDimensions: {
        width: 0,
        height: 0
      },
      elementOffset: {
        left: 0,
        top: 0
      },
      itemPosition: {
        x: 0,
        y: 0
      },
      itemDimensions: {
        width: 0,
        height: 0
      }
    };
    exports.defaultState = defaultState;
    var ReactInputPosition = function(_Component) {
      _inherits(ReactInputPosition2, _Component);
      var _super = _createSuper(ReactInputPosition2);
      function ReactInputPosition2() {
        var _this;
        _classCallCheck(this, ReactInputPosition2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", defaultState);
        _defineProperty(_assertThisInitialized(_this), "containerRef", _react["default"].createRef());
        _defineProperty(_assertThisInitialized(_this), "itemRef", _react["default"].createRef());
        _defineProperty(_assertThisInitialized(_this), "mouseDown", false);
        _defineProperty(_assertThisInitialized(_this), "touched", false);
        _defineProperty(_assertThisInitialized(_this), "justTouched", false);
        _defineProperty(_assertThisInitialized(_this), "tapped", false);
        _defineProperty(_assertThisInitialized(_this), "tapTimer", null);
        _defineProperty(_assertThisInitialized(_this), "tapTimedOut", false);
        _defineProperty(_assertThisInitialized(_this), "doubleTapTimer", null);
        _defineProperty(_assertThisInitialized(_this), "doubleTapTimedOut", false);
        _defineProperty(_assertThisInitialized(_this), "longTouchTimer", null);
        _defineProperty(_assertThisInitialized(_this), "longTouchTimedOut", false);
        _defineProperty(_assertThisInitialized(_this), "refresh", true);
        _defineProperty(_assertThisInitialized(_this), "onLoadRefresh", function() {
          _this.refreshPosition();
        });
        _defineProperty(_assertThisInitialized(_this), "handleResize", function() {
          _this.refreshPosition();
        });
        return _this;
      }
      _createClass(ReactInputPosition2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.init();
          this.refreshPosition();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeMouseEventListeners();
          this.removeTouchEventListeners();
          this.removeOtherEventListeners();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.mouseActivationMethod !== this.props.mouseActivationMethod) {
            this.removeMouseEventListeners();
            this.setMouseInteractionMethods();
            this.addMouseEventListeners();
          }
          if (prevProps.touchActivationMethod !== this.props.touchActivationMethod) {
            this.removeTouchEventListeners();
            this.setTouchInteractionMethods();
            this.addTouchEventListeners();
          }
        }
      }, {
        key: "init",
        value: function init() {
          this.checkPassiveEventSupport();
          this.setInputInteractionMethods();
          this.addMouseEventListeners();
          this.addTouchEventListeners();
          this.addOtherEventListeners();
        }
      }, {
        key: "checkPassiveEventSupport",
        value: function checkPassiveEventSupport() {
          var _this2 = this;
          this.supportsPassive = false;
          try {
            var options = Object.defineProperty({}, "passive", {
              get: function get() {
                return _this2.supportsPassive = true;
              }
            });
            window.addEventListener("testPassive", null, options);
            window.removeEventListener("testPassive", null, options);
          } catch (e) {
          }
        }
      }, {
        key: "updateState",
        value: function updateState(changes, cb) {
          var _this3 = this;
          var onUpdate = this.props.onUpdate;
          var activationCallback;
          if (changes.hasOwnProperty("active")) {
            if (changes.active) {
              activationCallback = this.props.onActivate;
            } else {
              activationCallback = this.props.onDeactivate;
            }
          }
          if (this.props.overrideState) {
            onUpdate && onUpdate(changes);
            activationCallback && activationCallback();
            cb && cb.call(this);
            return;
          }
          this.setState(function() {
            return changes;
          }, function() {
            cb && cb.call(_this3);
            activationCallback && activationCallback();
            onUpdate && onUpdate(_this3.getStateClone());
          });
        }
      }, {
        key: "getState",
        value: function getState() {
          if (this.props.overrideState) {
            return this.props.overrideState;
          } else {
            return this.state;
          }
        }
      }, {
        key: "getStateClone",
        value: function getStateClone() {
          var state = this.getState();
          var clonedState = {};
          for (var key in state) {
            if (_typeof(state[key]) === "object") {
              clonedState[key] = _objectSpread({}, state[key]);
            } else {
              clonedState[key] = state[key];
            }
          }
          return clonedState;
        }
      }, {
        key: "refreshPosition",
        value: function refreshPosition() {
          var _this$props = this.props, trackItemPosition = _this$props.trackItemPosition, centerItemOnLoad = _this$props.centerItemOnLoad;
          this.setPosition({
            x: 0,
            y: 0
          }, trackItemPosition, false, centerItemOnLoad);
        }
      }, {
        key: "setInputInteractionMethods",
        value: function setInputInteractionMethods() {
          this.setMouseInteractionMethods();
          this.setTouchInteractionMethods();
        }
      }, {
        key: "setMouseInteractionMethods",
        value: function setMouseInteractionMethods() {
          var mouseInteractionMethods = _mouseActivation["default"][this.props.mouseActivationMethod];
          this.mouseHandlers = [];
          for (var key in mouseInteractionMethods) {
            this.mouseHandlers.push({
              event: key.toLowerCase(),
              handler: mouseInteractionMethods[key].bind(this)
            });
          }
        }
      }, {
        key: "setTouchInteractionMethods",
        value: function setTouchInteractionMethods() {
          var touchInteractionMethods = _touchActivation["default"][this.props.touchActivationMethod];
          this.touchHandlers = [];
          for (var key in touchInteractionMethods) {
            this.touchHandlers.push({
              event: key.toLowerCase(),
              handler: touchInteractionMethods[key].bind(this)
            });
          }
        }
      }, {
        key: "setPosition",
        value: function setPosition(position, updateItemPosition, activate, centerItem) {
          if (this.props.minUpdateSpeedInMs && !this.refresh) return;
          this.refresh = false;
          var _this$containerRef$cu = this.containerRef.current.getBoundingClientRect(), left = _this$containerRef$cu.left, top = _this$containerRef$cu.top, width = _this$containerRef$cu.width, height = _this$containerRef$cu.height;
          var _this$props2 = this.props, trackItemPosition = _this$props2.trackItemPosition, trackPassivePosition = _this$props2.trackPassivePosition, trackPreviousPosition = _this$props2.trackPreviousPosition, centerItemOnActivate = _this$props2.centerItemOnActivate, centerItemOnActivatePos = _this$props2.centerItemOnActivatePos, linkItemToActive = _this$props2.linkItemToActive, itemMovementMultiplier = _this$props2.itemMovementMultiplier, alignItemOnActivePos = _this$props2.alignItemOnActivePos, itemPositionMinX = _this$props2.itemPositionMinX, itemPositionMaxX = _this$props2.itemPositionMaxX, itemPositionMinY = _this$props2.itemPositionMinY, itemPositionMaxY = _this$props2.itemPositionMaxY, itemPositionLimitBySize = _this$props2.itemPositionLimitBySize, itemPositionLimitInternal = _this$props2.itemPositionLimitInternal;
          var _this$getState = this.getState(), activePosition = _this$getState.activePosition, itemPosition = _this$getState.itemPosition;
          var stateUpdate = {
            elementDimensions: {
              width,
              height
            },
            elementOffset: {
              left,
              top
            },
            activePosition: {
              x: Math.min(Math.max(0, position.x - left), width),
              y: Math.min(Math.max(0, position.y - top), height)
            }
          };
          if (activate) stateUpdate.active = true;
          if (this.itemRef.current) {
            var itemSize = this.itemRef.current.getBoundingClientRect();
            stateUpdate.itemDimensions = {
              width: itemSize.width,
              height: itemSize.height
            };
          }
          if (trackPreviousPosition || trackItemPosition) {
            stateUpdate.prevActivePosition = {
              x: activePosition.x,
              y: activePosition.y
            };
          }
          if (trackPassivePosition) {
            stateUpdate.passivePosition = {
              x: position.x - left,
              y: position.y - top
            };
          }
          var limits = _utils["default"].createAdjustedLimits(itemPositionMinX, itemPositionMaxX, itemPositionMinY, itemPositionMaxY, stateUpdate.elementDimensions, stateUpdate.itemDimensions, itemPositionLimitBySize, itemPositionLimitInternal);
          if (centerItem || activate && centerItemOnActivate) {
            var centerX = (limits.maxX + limits.minX) / 2;
            var centerY = (limits.maxY + limits.minY) / 2;
            stateUpdate.itemPosition = {
              x: centerX || 0,
              y: centerY || 0
            };
            return this.updateState(stateUpdate, this.startRefreshTimer);
          }
          var shouldLimitItem = true;
          if (trackItemPosition && linkItemToActive) {
            stateUpdate.itemPosition = _objectSpread({}, stateUpdate.activePosition);
          } else if (trackItemPosition && alignItemOnActivePos) {
            stateUpdate.itemPosition = _utils["default"].alignItemOnPosition(stateUpdate.elementDimensions, stateUpdate.itemDimensions, stateUpdate.activePosition);
          } else if (trackItemPosition && activate && centerItemOnActivatePos) {
            stateUpdate.itemPosition = _utils["default"].centerItemOnPosition(stateUpdate.elementDimensions, stateUpdate.itemDimensions, stateUpdate.activePosition);
          } else if (trackItemPosition && updateItemPosition) {
            stateUpdate.itemPosition = _utils["default"].calculateItemPosition(itemPosition, stateUpdate.prevActivePosition, stateUpdate.activePosition, itemMovementMultiplier);
          } else {
            shouldLimitItem = false;
          }
          if (shouldLimitItem) {
            stateUpdate.itemPosition = _utils["default"].limitPosition(limits.minX, limits.maxX, limits.minY, limits.maxY, stateUpdate.itemPosition);
          }
          this.updateState(stateUpdate, this.startRefreshTimer);
        }
      }, {
        key: "setPassivePosition",
        value: function setPassivePosition(position) {
          if (!this.props.trackPassivePosition) return;
          var _this$containerRef$cu2 = this.containerRef.current.getBoundingClientRect(), left = _this$containerRef$cu2.left, top = _this$containerRef$cu2.top;
          this.updateState({
            passivePosition: {
              x: position.x - left,
              y: position.y - top
            }
          });
        }
      }, {
        key: "toggleActive",
        value: function toggleActive() {
          var position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            x: 0,
            y: 0
          };
          if (!this.getState().active) {
            this.activate(position);
          } else {
            this.deactivate();
          }
        }
      }, {
        key: "activate",
        value: function activate() {
          var position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            x: 0,
            y: 0
          };
          this.setPosition(position, false, true);
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          this.updateState({
            active: false
          });
        }
      }, {
        key: "startRefreshTimer",
        value: function startRefreshTimer() {
          var _this4 = this;
          if (!this.props.minUpdateSpeedInMs) return;
          setTimeout(function() {
            _this4.refresh = true;
          }, this.props.minUpdateSpeedInMs);
        }
      }, {
        key: "startTapTimer",
        value: function startTapTimer() {
          var _this5 = this;
          this.tapTimer = setTimeout(function() {
            _this5.tapTimedOut = true;
          }, this.props.tapDurationInMs);
        }
      }, {
        key: "startDoubleTapTimer",
        value: function startDoubleTapTimer() {
          var _this6 = this;
          this.doubleTapTimer = setTimeout(function() {
            _this6.doubleTapTimedOut = true;
          }, this.props.doubleTapDurationInMs);
        }
      }, {
        key: "startLongTouchTimer",
        value: function startLongTouchTimer(e) {
          var _this7 = this;
          this.longTouchTimer = setTimeout(function() {
            if (_this7.touched) {
              _this7.toggleActive(e);
            }
          }, this.props.longTouchDurationInMs);
        }
      }, {
        key: "addMouseEventListeners",
        value: function addMouseEventListeners() {
          var _this8 = this;
          this.mouseHandlers.forEach(function(mouse) {
            _this8.containerRef.current.addEventListener(mouse.event, mouse.handler);
          });
        }
      }, {
        key: "addTouchEventListeners",
        value: function addTouchEventListeners() {
          var _this9 = this;
          this.touchHandlers.forEach(function(touch) {
            _this9.containerRef.current.addEventListener(touch.event, touch.handler, _this9.supportsPassive ? {
              passive: false
            } : false);
          });
        }
      }, {
        key: "removeMouseEventListeners",
        value: function removeMouseEventListeners() {
          var _this10 = this;
          this.mouseHandlers.forEach(function(mouse) {
            _this10.containerRef.current.removeEventListener(mouse.event, mouse.handler);
          });
        }
      }, {
        key: "removeTouchEventListeners",
        value: function removeTouchEventListeners() {
          var _this11 = this;
          this.touchHandlers.forEach(function(touch) {
            _this11.containerRef.current.removeEventListener(touch.event, touch.handler, _this11.supportsPassive ? {
              passive: false
            } : false);
          });
        }
      }, {
        key: "addOtherEventListeners",
        value: function addOtherEventListeners() {
          window.addEventListener("resize", this.handleResize);
          window.addEventListener("load", this.onLoadRefresh);
        }
      }, {
        key: "removeOtherEventListeners",
        value: function removeOtherEventListeners() {
          window.removeEventListener("resize", this.handleResize);
          window.removeEventListener("load", this.onLoadRefresh);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props, style = _this$props3.style, className = _this$props3.className, children = _this$props3.children, cursorStyle = _this$props3.cursorStyle, cursorStyleActive = _this$props3.cursorStyleActive;
          var _this$getState2 = this.getState(), active = _this$getState2.active;
          var combinedStyle = _objectSpread(_objectSpread({}, style), {}, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            cursor: active ? cursorStyleActive || cursorStyle : cursorStyle
          });
          return _react["default"].createElement("div", {
            style: combinedStyle,
            className,
            ref: this.containerRef
          }, _utils["default"].decorateChildren(children, _objectSpread(_objectSpread({}, this.getState()), {}, {
            itemRef: this.itemRef,
            onLoadRefresh: this.onLoadRefresh
          })));
        }
      }]);
      return ReactInputPosition2;
    }(_react.Component);
    _defineProperty(ReactInputPosition, "propTypes", {
      mouseActivationMethod: _propTypes["default"].oneOf([_constants.MOUSE_ACTIVATION.CLICK, _constants.MOUSE_ACTIVATION.DOUBLE_CLICK, _constants.MOUSE_ACTIVATION.HOVER, _constants.MOUSE_ACTIVATION.MOUSE_DOWN]).isRequired,
      touchActivationMethod: _propTypes["default"].oneOf([_constants.TOUCH_ACTIVATION.DOUBLE_TAP, _constants.TOUCH_ACTIVATION.LONG_TOUCH, _constants.TOUCH_ACTIVATION.TAP, _constants.TOUCH_ACTIVATION.TOUCH]).isRequired,
      tapDurationInMs: _propTypes["default"].number,
      doubleTapDurationInMs: _propTypes["default"].number,
      longTouchDurationInMs: _propTypes["default"].number,
      longTouchMoveLimit: _propTypes["default"].number,
      clickMoveLimit: _propTypes["default"].number,
      itemPositionMinX: _propTypes["default"].number,
      itemPositionMaxX: _propTypes["default"].number,
      itemPositionMinY: _propTypes["default"].number,
      itemPositionMaxY: _propTypes["default"].number,
      itemPositionLimitBySize: _propTypes["default"].bool,
      itemPositionLimitInternal: _propTypes["default"].bool,
      linkItemToActive: _propTypes["default"].bool,
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      minUpdateSpeedInMs: _propTypes["default"].number,
      trackPassivePosition: _propTypes["default"].bool,
      trackItemPosition: _propTypes["default"].bool,
      trackPreviousPosition: _propTypes["default"].bool,
      centerItemOnActivate: _propTypes["default"].bool,
      centerItemOnActivatePos: _propTypes["default"].bool,
      centerItemOnLoad: _propTypes["default"].bool,
      alignItemOnActivePos: _propTypes["default"].bool,
      itemMovementMultiplier: _propTypes["default"].number,
      cursorStyle: _propTypes["default"].string,
      cursorStyleActive: _propTypes["default"].string,
      onUpdate: _propTypes["default"].func,
      overrideState: _propTypes["default"].object,
      mouseDownAllowOutside: _propTypes["default"].bool,
      onActivate: _propTypes["default"].func,
      onDeactivate: _propTypes["default"].func
    });
    _defineProperty(ReactInputPosition, "defaultProps", {
      tapDurationInMs: 180,
      doubleTapDurationInMs: 400,
      longTouchDurationInMs: 500,
      longTouchMoveLimit: 5,
      clickMoveLimit: 5,
      style: {},
      minUpdateSpeedInMs: 1,
      itemMovementMultiplier: 1,
      cursorStyle: "crosshair",
      mouseActivationMethod: _constants.MOUSE_ACTIVATION.CLICK,
      touchActivationMethod: _constants.TOUCH_ACTIVATION.TAP,
      mouseDownAllowOutside: false
    });
    var _default = ReactInputPosition;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/utils.js
var require_utils2 = __commonJS({
  "node_modules/react-image-magnifiers/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function invertNumber(min, max, num) {
      return max + min - num;
    }
    function convertRange(oldMin, oldMax, newMin, newMax, oldValue) {
      var percent = (oldValue - oldMin) / (oldMax - oldMin);
      var result = percent * (newMax - newMin) + newMin;
      return result || 0;
    }
    function convertWidthToPx(width, containerWidth) {
      if (typeof width === "number") {
        return width;
      }
      if (typeof width !== "string") {
        throw new Error("Received: ".concat(width, " - Size must be a number or string"));
      }
      if (width.substr(-1) === "%") {
        var percent = 100 / Number(width.slice(0, -1));
        return containerWidth / percent;
      }
      if (width.substr(-2) === "px") {
        return Number(width.slice(0, -2));
      }
      return Number(width);
    }
    function convertWidthToString(width) {
      if (typeof width === "number") {
        return width + "px";
      }
      return width;
    }
    function noop() {
    }
    var _default = {
      invertNumber,
      convertRange,
      convertWidthToPx,
      convertWidthToString,
      noop
    };
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/styles.js
var require_styles = __commonJS({
  "node_modules/react-image-magnifiers/dist/styles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function getLargeImageStyle(positionX, positionY, active) {
      return {
        position: "absolute",
        boxSizing: "border-box",
        display: "block",
        top: 0,
        left: 0,
        transform: "translate(".concat(positionX, "px, ").concat(positionY, "px)"),
        zIndex: "1",
        visibility: !active ? "hidden" : "visible",
        width: "auto"
      };
    }
    function getZoomContainerStyle(width, height, inPlace, switchSides) {
      var style = {
        position: "absolute",
        boxSizing: "border-box",
        pointerEvents: "none",
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        top: "0",
        overflow: "hidden"
      };
      if (inPlace) {
        style.left = "0px";
      } else if (switchSides) {
        style.right = "".concat(width, "px");
      } else {
        style.left = "".concat(width, "px");
      }
      return style;
    }
    function getOverlayCenterStyle(width, height, left, top, opacity, transitionSpeed, color, backgroundImage, backgroundImageSize) {
      var backgroundStyle = {};
      if (backgroundImage) {
        backgroundStyle.backgroundImage = 'url("'.concat(backgroundImage, '")');
      }
      if (backgroundImageSize) {
        backgroundStyle.backgroundSize = backgroundImageSize;
      }
      return _objectSpread({
        position: "absolute",
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        left: 0,
        top: 0,
        boxSizing: "border-box",
        transform: "translate(".concat(left, "px, ").concat(top, "px)"),
        border: "1px solid ".concat(color),
        opacity,
        transition: "opacity ".concat(transitionSpeed, "s ease"),
        zIndex: "15",
        pointerEvents: "none"
      }, backgroundStyle);
    }
    function getOverlayTopStyle(width, height, opacity, transitionSpeed, backgroundColor) {
      return {
        backgroundColor,
        position: "absolute",
        boxSizing: "border-box",
        top: 0,
        left: 0,
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        zIndex: "10",
        transition: "opacity ".concat(transitionSpeed, "s ease"),
        opacity,
        transform: "scale3d(1,1,1)",
        pointerEvents: "none"
      };
    }
    function getOverlayLeftStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
      return {
        backgroundColor,
        position: "absolute",
        boxSizing: "border-box",
        width: "".concat(width, "px"),
        top: "".concat(top, "px"),
        left: 0,
        height: "".concat(height, "px"),
        zIndex: "10",
        transition: "opacity ".concat(transitionSpeed, "s ease"),
        opacity,
        transform: "scale3d(1,1,1)",
        pointerEvents: "none"
      };
    }
    function getOverlayRightStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
      return {
        backgroundColor,
        position: "absolute",
        boxSizing: "border-box",
        top: "".concat(top, "px"),
        right: 0,
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        zIndex: "10",
        transition: "opacity ".concat(transitionSpeed, "s ease"),
        opacity,
        transform: "scale3d(1,1,1)",
        pointerEvents: "none"
      };
    }
    function getOverlayBottomStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
      return {
        backgroundColor,
        position: "absolute",
        boxSizing: "border-box",
        top: "".concat(top, "px"),
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        zIndex: "10",
        transition: "opacity ".concat(transitionSpeed, "s ease"),
        opacity,
        transform: "scale3d(1,1,1)",
        pointerEvents: "none"
      };
    }
    function getMagnifierZoomStyle(active, transitionSpeed) {
      return {
        position: "relative",
        opacity: active ? 1 : 0,
        transition: "opacity ".concat(transitionSpeed, "s ease")
      };
    }
    var _default = {
      getLargeImageStyle,
      getZoomContainerStyle,
      getOverlayCenterStyle,
      getOverlayTopStyle,
      getOverlayLeftStyle,
      getOverlayRightStyle,
      getOverlayBottomStyle,
      getMagnifierZoomStyle
    };
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/Image.js
var require_Image = __commonJS({
  "node_modules/react-image-magnifiers/dist/Image.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _utils = _interopRequireDefault(require_utils2());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    var Image = _react["default"].forwardRef(function(props, ref) {
      var onImageLoad = props.onImageLoad, onLoadRefresh = props.onLoadRefresh, src = props.src, alt = props.alt, otherProps = _objectWithoutProperties(props, ["onImageLoad", "onLoadRefresh", "src", "alt"]);
      var _React$useState = _react["default"].useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), imageIdx = _React$useState2[0], setImageIdx = _React$useState2[1];
      var imageErrorRef = _react["default"].useRef(false);
      var imageArr = src.constructor === Array ? src : [src];
      return _react["default"].createElement("img", _extends({
        ref,
        src: imageArr[imageIdx],
        alt,
        onLoad: function onLoad(e) {
          onImageLoad(e);
          if (imageErrorRef.current) {
            onLoadRefresh();
          }
        },
        onError: function onError(e) {
          if (imageIdx < imageArr.length) {
            imageErrorRef.current = true;
            setImageIdx(function(idx) {
              return idx + 1;
            });
          }
        }
      }, otherProps));
    });
    Image.defaultProps = {
      onImageLoad: _utils["default"].noop,
      onLoadRefresh: _utils["default"].noop
    };
    var _default = Image;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/ImagePreviewOverlay.js
var require_ImagePreviewOverlay = __commonJS({
  "node_modules/react-image-magnifiers/dist/ImagePreviewOverlay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _styles = _interopRequireDefault(require_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var ImagePreviewOverlay = function ImagePreviewOverlay2(props) {
      var previewWidth = props.previewWidth, previewHeight = props.previewHeight, previewPosLeft = props.previewPosLeft, previewPosRight = props.previewPosRight, previewPosTop = props.previewPosTop, previewPosBottom = props.previewPosBottom, imageWidth = props.imageWidth, imageHeight = props.imageHeight, overlayOpacity = props.overlayOpacity, overlayBoxOpacity = props.overlayBoxOpacity, active = props.active, transitionSpeed = props.transitionSpeed, overlayBackgroundColor = props.overlayBackgroundColor, overlayBoxColor = props.overlayBoxColor, overlayBoxImage = props.overlayBoxImage, overlayBoxImageSize = props.overlayBoxImageSize;
      var opacity = active ? overlayOpacity : 0;
      var boxOpacity = active ? overlayBoxOpacity : 0;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        style: _styles["default"].getOverlayCenterStyle(previewWidth, previewHeight, previewPosLeft, previewPosTop, boxOpacity, transitionSpeed, overlayBoxColor, overlayBoxImage, overlayBoxImageSize)
      }), _react["default"].createElement("div", {
        style: _styles["default"].getOverlayTopStyle(imageWidth, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
      }), _react["default"].createElement("div", {
        style: _styles["default"].getOverlayLeftStyle(previewPosLeft, previewHeight, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
      }), _react["default"].createElement("div", {
        style: _styles["default"].getOverlayRightStyle(imageWidth - previewPosRight, previewHeight, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
      }), _react["default"].createElement("div", {
        style: _styles["default"].getOverlayBottomStyle(imageWidth, imageHeight - previewPosBottom, previewPosBottom, opacity, transitionSpeed, overlayBackgroundColor)
      }));
    };
    ImagePreviewOverlay.defaultProps = {
      overlayOpacity: 0.5,
      overlayBoxOpacity: 0.8,
      transitionSpeed: 0.4,
      overlayBackgroundColor: "#000",
      overlayBoxColor: "#fff",
      overlayBoxImage: "",
      overlayBoxImageSize: ""
    };
    var _default = ImagePreviewOverlay;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/SideBySideRenderer.js
var require_SideBySideRenderer = __commonJS({
  "node_modules/react-image-magnifiers/dist/SideBySideRenderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _utils = _interopRequireDefault(require_utils2());
    var _styles = _interopRequireDefault(require_styles());
    var _Image = _interopRequireDefault(require_Image());
    var _ImagePreviewOverlay = _interopRequireDefault(require_ImagePreviewOverlay());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SideBySideRenderer = function SideBySideRenderer2(props) {
      var itemPosition = props.itemPosition, active = props.active, elementDimensions = props.elementDimensions, elementOffset = props.elementOffset, itemDimensions = props.itemDimensions, imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, itemRef = props.itemRef, overlayOpacity = props.overlayOpacity, overlayBoxOpacity = props.overlayBoxOpacity, overlayBackgroundColor = props.overlayBackgroundColor, overlayBoxColor = props.overlayBoxColor, overlayBoxImage = props.overlayBoxImage, overlayBoxImageSize = props.overlayBoxImageSize, alwaysInPlace = props.alwaysInPlace, transitionSpeed = props.transitionSpeed, transitionSpeedInPlace = props.transitionSpeedInPlace, renderOverlay = props.renderOverlay, cursorStyle = props.cursorStyle, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, onLoadRefresh = props.onLoadRefresh, switchSides = props.switchSides, fillAvailableSpace = props.fillAvailableSpace, fillAlignTop = props.fillAlignTop, fillGapLeft = props.fillGapLeft, fillGapRight = props.fillGapRight, fillGapTop = props.fillGapTop, fillGapBottom = props.fillGapBottom, inPlaceMinBreakpoint = props.inPlaceMinBreakpoint, zoomContainerBorder = props.zoomContainerBorder, zoomContainerBoxShadow = props.zoomContainerBoxShadow;
      var zoomContainerDimensions = {
        width: elementDimensions.width,
        height: elementDimensions.height
      };
      var zoomContainerStyle = {};
      var availableWidth = 0;
      var availableHeight = 0;
      var windowWidth = 0;
      var zoomGapVertical = fillGapTop + fillGapBottom;
      var zoomGapHorizontal = fillGapLeft + fillGapRight;
      try {
        var _document$documentEle = document.documentElement, clientWidth = _document$documentEle.clientWidth, clientHeight = _document$documentEle.clientHeight;
        var _window = window, innerWidth = _window.innerWidth;
        availableWidth = clientWidth;
        availableHeight = clientHeight;
        windowWidth = innerWidth;
      } catch (e) {
      }
      var inPlace = alwaysInPlace || windowWidth < inPlaceMinBreakpoint;
      if (fillAvailableSpace && !inPlace) {
        var left = elementDimensions.width + elementOffset.left;
        if (fillAlignTop) {
          zoomContainerDimensions.height = Math.min(itemDimensions.height, availableHeight - elementOffset.top - zoomGapVertical + fillGapTop);
          zoomContainerDimensions.top = fillGapTop;
        } else {
          zoomContainerDimensions.height = Math.min(itemDimensions.height, availableHeight - zoomGapVertical);
          var offsetTop = -elementOffset.top + fillGapTop;
          var maxOffsetTop = availableHeight - elementOffset.top - (zoomContainerDimensions.height + fillGapBottom);
          var limitedTop = Math.max(offsetTop, maxOffsetTop);
          zoomContainerDimensions.top = limitedTop;
        }
        zoomContainerDimensions.top = Math.min(zoomContainerDimensions.top, 0);
        zoomContainerStyle.top = "".concat(zoomContainerDimensions.top, "px");
        if (switchSides) {
          zoomContainerDimensions.width = Math.min(itemDimensions.width, elementOffset.left - zoomGapHorizontal);
          zoomContainerDimensions.right = elementDimensions.width + fillGapRight;
          zoomContainerStyle.right = "".concat(zoomContainerDimensions.right, "px");
        } else {
          zoomContainerDimensions.width = Math.min(itemDimensions.width, availableWidth - left - zoomGapHorizontal);
          zoomContainerDimensions.left = elementDimensions.width + fillGapLeft;
          zoomContainerStyle.left = "".concat(zoomContainerDimensions.left, "px");
        }
      } else {
        if (switchSides) {
          inPlace = inPlace || elementOffset.left < elementDimensions.width;
        } else {
          inPlace = inPlace || elementDimensions.width * 2 + elementOffset.left > availableWidth;
        }
      }
      var legalSize = itemDimensions.width > elementDimensions.width;
      var isActive = legalSize && active;
      var transSpeed = inPlace ? transitionSpeedInPlace : transitionSpeed;
      var smallImageSize = {
        width: elementDimensions.width,
        height: elementDimensions.height
      };
      var previewSize = {
        width: Math.floor(smallImageSize.width * (zoomContainerDimensions.width / itemDimensions.width)),
        height: Math.floor(smallImageSize.height * (zoomContainerDimensions.height / itemDimensions.height))
      };
      var position = {
        x: 0,
        y: 0
      };
      var itemPositionAdj = _objectSpread({}, itemPosition);
      var previewOffset = {
        x: inPlace ? 0 : previewSize.width / 2,
        y: inPlace ? 0 : previewSize.height / 2
      };
      itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
      itemPositionAdj.x = Math.min(smallImageSize.width - previewOffset.x, itemPositionAdj.x);
      itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
      itemPositionAdj.y = Math.min(smallImageSize.height - previewOffset.y, itemPositionAdj.y);
      position = _objectSpread({}, itemPositionAdj);
      var zoomContainerSize = inPlace ? smallImageSize : zoomContainerDimensions;
      position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, itemDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
      position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, itemDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
      position.x = _utils["default"].invertNumber(itemDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
      position.y = _utils["default"].invertNumber(itemDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
      previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
      previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
      previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
      previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
      return _react["default"].createElement("div", {
        style: {
          position: "relative"
        }
      }, _react["default"].createElement(_Image["default"], {
        style: {
          width: "100%",
          display: "block",
          cursor: legalSize ? cursorStyle : "default"
        },
        src: imageSrc,
        alt: imageAlt,
        onImageLoad,
        onLoadRefresh
      }), _react["default"].createElement("div", {
        style: _objectSpread(_objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(zoomContainerSize.width, zoomContainerSize.height, inPlace, switchSides)), {}, {
          opacity: isActive ? "1" : "0",
          transition: "opacity ".concat(transSpeed, "s ease"),
          zIndex: "100"
        }, zoomContainerStyle), {}, {
          border: zoomContainerBorder,
          boxShadow: zoomContainerBoxShadow
        })
      }, _react["default"].createElement(_Image["default"], {
        style: _styles["default"].getLargeImageStyle(position.x, position.y, true),
        src: largeImageSrc || imageSrc,
        alt: imageAlt,
        ref: itemRef,
        onImageLoad: onLargeImageLoad,
        onLoadRefresh
      })), _react["default"].createElement(_ImagePreviewOverlay["default"], {
        previewWidth: previewSize.width,
        previewHeight: previewSize.height,
        previewPosLeft: previewSize.left,
        previewPosRight: previewSize.right,
        previewPosTop: previewSize.top,
        previewPosBottom: previewSize.bottom,
        imageWidth: smallImageSize.width,
        imageHeight: smallImageSize.height,
        overlayOpacity,
        overlayBoxOpacity,
        overlayBackgroundColor,
        overlayBoxColor,
        overlayBoxImage,
        overlayBoxImageSize,
        active: isActive && !inPlace,
        transitionSpeed: transSpeed
      }), renderOverlay ? renderOverlay(active) : null);
    };
    var _default = SideBySideRenderer;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/SideBySideMagnifier.js
var require_SideBySideMagnifier = __commonJS({
  "node_modules/react-image-magnifiers/dist/SideBySideMagnifier.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = _interopRequireDefault(require_utils2());
    var _reactInputPosition = _interopRequireWildcard(require_dist());
    var _SideBySideRenderer = _interopRequireDefault(require_SideBySideRenderer());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var SideBySideMagnifier = function SideBySideMagnifier2(props) {
      var imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, overlayOpacity = props.overlayOpacity, overlayBoxOpacity = props.overlayBoxOpacity, overlayBackgroundColor = props.overlayBackgroundColor, overlayBoxColor = props.overlayBoxColor, overlayBoxImage = props.overlayBoxImage, overlayBoxImageSize = props.overlayBoxImageSize, cursorStyle = props.cursorStyle, alwaysInPlace = props.alwaysInPlace, transitionSpeed = props.transitionSpeed, transitionSpeedInPlace = props.transitionSpeedInPlace, renderOverlay = props.renderOverlay, className = props.className, style = props.style, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, switchSides = props.switchSides, onZoomStart = props.onZoomStart, onZoomEnd = props.onZoomEnd, fillAvailableSpace = props.fillAvailableSpace, fillAlignTop = props.fillAlignTop, fillGapLeft = props.fillGapLeft, fillGapRight = props.fillGapRight, fillGapTop = props.fillGapTop, fillGapBottom = props.fillGapBottom, inPlaceMinBreakpoint = props.inPlaceMinBreakpoint, zoomContainerBorder = props.zoomContainerBorder, zoomContainerBoxShadow = props.zoomContainerBoxShadow, mouseActivation = props.mouseActivation, touchActivation = props.touchActivation;
      return _react["default"].createElement(_reactInputPosition["default"], {
        style,
        className,
        touchActivationMethod: touchActivation,
        mouseActivationMethod: mouseActivation,
        onActivate: onZoomStart,
        onDeactivate: onZoomEnd,
        trackItemPosition: true,
        linkItemToActive: true
      }, _react["default"].createElement(_SideBySideRenderer["default"], {
        imageSrc,
        largeImageSrc,
        imageAlt,
        overlayOpacity,
        overlayBoxOpacity,
        overlayBackgroundColor,
        overlayBoxColor,
        overlayBoxImage,
        overlayBoxImageSize,
        alwaysInPlace,
        transitionSpeed,
        transitionSpeedInPlace,
        renderOverlay,
        cursorStyle,
        onImageLoad,
        onLargeImageLoad,
        switchSides,
        fillAvailableSpace,
        fillAlignTop,
        fillGapLeft,
        fillGapRight,
        fillGapTop,
        fillGapBottom,
        inPlaceMinBreakpoint,
        zoomContainerBorder,
        zoomContainerBoxShadow
      }));
    };
    SideBySideMagnifier.propTypes = {
      imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      imageAlt: _propTypes["default"].string,
      overlayOpacity: _propTypes["default"].number,
      overlayBoxOpacity: _propTypes["default"].number,
      overlayBackgroundColor: _propTypes["default"].string,
      overlayBoxColor: _propTypes["default"].string,
      overlayBoxImage: _propTypes["default"].string,
      overlayBoxImageSize: _propTypes["default"].string,
      cursorStyle: _propTypes["default"].string,
      alwaysInPlace: _propTypes["default"].bool,
      transitionSpeed: _propTypes["default"].number,
      transitionSpeedInPlace: _propTypes["default"].number,
      renderOverlay: _propTypes["default"].func,
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      onImageLoad: _propTypes["default"].func,
      onLargeImageLoad: _propTypes["default"].func,
      fillAvailableSpace: _propTypes["default"].bool,
      fillAlignTop: _propTypes["default"].bool,
      fillGapLeft: _propTypes["default"].number,
      fillGapRight: _propTypes["default"].number,
      fillGapTop: _propTypes["default"].number,
      fillGapBottom: _propTypes["default"].number,
      inPlaceMinBreakpoint: _propTypes["default"].number,
      zoomContainerBorder: _propTypes["default"].string,
      zoomContainerBoxShadow: _propTypes["default"].string,
      mouseActivation: _propTypes["default"].string,
      touchActivation: _propTypes["default"].string
    };
    SideBySideMagnifier.defaultProps = {
      imageSrc: "",
      largeImageSrc: "",
      imageAlt: "",
      overlayOpacity: 0.5,
      overlayBoxOpacity: 0.8,
      overlayBackgroundColor: "#000",
      overlayBoxColor: "#fff",
      overlayBoxImage: "",
      overlayBoxImageSize: "",
      cursorStyle: "crosshair",
      transitionSpeed: 0.4,
      transitionSpeedInPlace: 0.4,
      onImageLoad: _utils["default"].noop,
      onLargeImageLoad: _utils["default"].noop,
      fillAvailableSpace: true,
      fillAlignTop: false,
      fillGapLeft: 0,
      fillGapRight: 0,
      fillGapTop: 0,
      fillGapBottom: 0,
      inPlaceMinBreakpoint: 0,
      zoomContainerBorder: "none",
      zoomContainerBoxShadow: "none",
      mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
      touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TOUCH
    };
    var _default = SideBySideMagnifier;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/MagnifierRenderer.js
var require_MagnifierRenderer = __commonJS({
  "node_modules/react-image-magnifiers/dist/MagnifierRenderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _Image = _interopRequireDefault(require_Image());
    var _styles = _interopRequireDefault(require_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var MagnifierRenderer = function MagnifierRenderer2(props) {
      var itemPosition = props.itemPosition, active = props.active, elementDimensions = props.elementDimensions, itemDimensions = props.itemDimensions, imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, itemRef = props.itemRef, renderOverlay = props.renderOverlay, cursorStyle = props.cursorStyle, cursorStyleActive = props.cursorStyleActive, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, onLoadRefresh = props.onLoadRefresh;
      var legalSize = itemDimensions.width > elementDimensions.width;
      var isActive = legalSize && active;
      var finalCursorStyle = !legalSize ? "default" : active ? cursorStyleActive : cursorStyle;
      return _react["default"].createElement("div", {
        style: {
          position: "relative",
          cursor: finalCursorStyle
        }
      }, _react["default"].createElement(_Image["default"], {
        style: {
          display: "block",
          visibility: isActive ? "hidden" : "visible",
          width: "100%"
        },
        src: imageSrc,
        alt: imageAlt,
        onImageLoad,
        onLoadRefresh
      }), _react["default"].createElement("div", {
        style: _styles["default"].getZoomContainerStyle(elementDimensions.width, elementDimensions.height, true)
      }, _react["default"].createElement(_Image["default"], {
        style: _styles["default"].getLargeImageStyle(itemPosition.x, itemPosition.y, isActive),
        src: largeImageSrc || imageSrc,
        alt: imageAlt,
        ref: itemRef,
        onImageLoad: onLargeImageLoad,
        onLoadRefresh
      })), renderOverlay ? renderOverlay(active) : null);
    };
    var _default = MagnifierRenderer;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/Magnifier.js
var require_Magnifier = __commonJS({
  "node_modules/react-image-magnifiers/dist/Magnifier.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = _interopRequireDefault(require_utils2());
    var _reactInputPosition = _interopRequireWildcard(require_dist());
    var _MagnifierRenderer = _interopRequireDefault(require_MagnifierRenderer());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var Magnifier = function Magnifier2(props) {
      var imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, cursorStyle = props.cursorStyle, cursorStyleActive = props.cursorStyleActive, renderOverlay = props.renderOverlay, dragToMove = props.dragToMove, className = props.className, style = props.style, mouseActivation = props.mouseActivation, touchActivation = props.touchActivation, interactionSettings = props.interactionSettings, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, onImageError = props.onImageError, onLargeImageError = props.onLargeImageError, onZoomStart = props.onZoomStart, onZoomEnd = props.onZoomEnd;
      var finalActiveCursorStyle = cursorStyleActive || dragToMove ? "move" : "zoom-out";
      return _react["default"].createElement(_reactInputPosition["default"], _extends({
        style,
        className,
        touchActivationMethod: touchActivation,
        mouseActivationMethod: mouseActivation,
        trackItemPosition: true,
        centerItemOnActivatePos: dragToMove,
        alignItemOnActivePos: !dragToMove,
        onActivate: onZoomStart,
        onDeactivate: onZoomEnd,
        itemPositionLimitBySize: true
      }, interactionSettings), _react["default"].createElement(_MagnifierRenderer["default"], {
        imageSrc,
        largeImageSrc,
        imageAlt,
        renderOverlay,
        cursorStyle,
        cursorStyleActive: finalActiveCursorStyle,
        onImageLoad,
        onLargeImageLoad,
        onImageError,
        onLargeImageError
      }));
    };
    Magnifier.propTypes = {
      imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      imageAlt: _propTypes["default"].string,
      cursorStyle: _propTypes["default"].string,
      cursorStyleActive: _propTypes["default"].string,
      renderOverlay: _propTypes["default"].func,
      dragToMove: _propTypes["default"].bool,
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      mouseActivation: _propTypes["default"].string,
      touchActivation: _propTypes["default"].string,
      interactionSettings: _propTypes["default"].shape({
        tapDurationInMs: _propTypes["default"].number,
        doubleTapDurationInMs: _propTypes["default"].number,
        longTouchDurationInMs: _propTypes["default"].number,
        longTouchMoveLimit: _propTypes["default"].number,
        clickMoveLimit: _propTypes["default"].number
      }),
      onImageLoad: _propTypes["default"].func,
      onLargeImageLoad: _propTypes["default"].func
    };
    Magnifier.defaultProps = {
      imageSrc: "",
      largeImageSrc: "",
      imageAlt: "",
      cursorStyle: "zoom-in",
      cursorStyleActive: "",
      dragToMove: true,
      mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.CLICK,
      touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TAP,
      interactionSettings: {},
      onImageLoad: _utils["default"].noop,
      onLargeImageLoad: _utils["default"].noop
    };
    var _default = Magnifier;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/GlassRenderer.js
var require_GlassRenderer = __commonJS({
  "node_modules/react-image-magnifiers/dist/GlassRenderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _utils = _interopRequireDefault(require_utils2());
    var _Image = _interopRequireDefault(require_Image());
    var _styles = _interopRequireDefault(require_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var GlassRenderer = function GlassRenderer2(props) {
      var itemRef = props.itemRef, itemPosition = props.itemPosition, activePosition = props.activePosition, elementDimensions = props.elementDimensions, itemDimensions = props.itemDimensions, active = props.active, imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, magnifierBorderSize = props.magnifierBorderSize, magnifierBorderColor = props.magnifierBorderColor, magnifierBackgroundColor = props.magnifierBackgroundColor, square = props.square, magnifierSize = props.magnifierSize, magnifierOffsetX = props.magnifierOffsetX, magnifierOffsetY = props.magnifierOffsetY, renderOverlay = props.renderOverlay, cursorStyle = props.cursorStyle, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, onLoadRefresh = props.onLoadRefresh;
      var legalSize = itemDimensions.width > elementDimensions.width;
      var isActive = legalSize && active;
      var magnifierSizeNum = _utils["default"].convertWidthToPx(magnifierSize, elementDimensions.width);
      var positionOffset = magnifierSizeNum / 2;
      var position = {
        x: itemPosition.x - activePosition.x + positionOffset - magnifierBorderSize,
        y: itemPosition.y - activePosition.y + positionOffset - magnifierBorderSize
      };
      var divPosition = {
        x: activePosition.x - positionOffset + magnifierOffsetX,
        y: activePosition.y - positionOffset + magnifierOffsetY
      };
      var borderRadius = square ? "0" : "50%";
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Image["default"], {
        style: {
          width: "100%",
          display: "block",
          boxSizing: "border-box",
          cursor: legalSize ? cursorStyle : "default"
        },
        src: imageSrc,
        alt: imageAlt,
        onImageLoad,
        onLoadRefresh
      }), _react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(magnifierSizeNum, magnifierSizeNum, true)), {}, {
          visibility: !isActive ? "hidden" : "visible",
          borderRadius,
          zIndex: "1",
          border: "".concat(magnifierBorderSize, "px solid ").concat(magnifierBorderColor),
          transform: "translate(".concat(divPosition.x, "px, ").concat(divPosition.y, "px)"),
          backgroundColor: magnifierBackgroundColor,
          backgroundClip: "padding-box"
        })
      }, _react["default"].createElement(_Image["default"], {
        style: _styles["default"].getLargeImageStyle(position.x, position.y, isActive),
        ref: itemRef,
        src: largeImageSrc || imageSrc,
        alt: imageAlt,
        onImageLoad: onLargeImageLoad,
        onLoadRefresh
      })), renderOverlay ? renderOverlay(active) : null);
    };
    var _default = GlassRenderer;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/GlassMagnifier.js
var require_GlassMagnifier = __commonJS({
  "node_modules/react-image-magnifiers/dist/GlassMagnifier.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = _interopRequireDefault(require_utils2());
    var _reactInputPosition = _interopRequireWildcard(require_dist());
    var _GlassRenderer = _interopRequireDefault(require_GlassRenderer());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var GlassMagnifier = function GlassMagnifier2(props) {
      var imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, magnifierBorderSize = props.magnifierBorderSize, magnifierBorderColor = props.magnifierBorderColor, magnifierBackgroundColor = props.magnifierBackgroundColor, magnifierSize = props.magnifierSize, magnifierOffsetX = props.magnifierOffsetX, magnifierOffsetY = props.magnifierOffsetY, square = props.square, cursorStyle = props.cursorStyle, renderOverlay = props.renderOverlay, allowOverflow = props.allowOverflow, style = props.style, className = props.className, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, onZoomStart = props.onZoomStart, onZoomEnd = props.onZoomEnd;
      return _react["default"].createElement(_reactInputPosition["default"], {
        style: _objectSpread(_objectSpread({}, style), {}, {
          position: "relative",
          overflow: allowOverflow ? "visible" : "hidden"
        }),
        className,
        touchActivationMethod: _reactInputPosition.TOUCH_ACTIVATION.TOUCH,
        mouseActivationMethod: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
        onActivate: onZoomStart,
        onDeactivate: onZoomEnd,
        trackItemPosition: true,
        alignItemOnActivePos: true,
        itemPositionLimitBySize: true
      }, _react["default"].createElement(_GlassRenderer["default"], {
        magnifierBorderSize,
        magnifierBorderColor,
        magnifierBackgroundColor,
        magnifierSize,
        imageSrc,
        largeImageSrc,
        imageAlt,
        square,
        magnifierOffsetX,
        magnifierOffsetY,
        renderOverlay,
        cursorStyle,
        onImageLoad,
        onLargeImageLoad
      }));
    };
    GlassMagnifier.propTypes = {
      imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      imageAlt: _propTypes["default"].string,
      allowOverflow: _propTypes["default"].bool,
      magnifierBorderSize: _propTypes["default"].number,
      magnifierBorderColor: _propTypes["default"].string,
      magnifierBackgroundColor: _propTypes["default"].string,
      magnifierSize: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      magnifierOffsetX: _propTypes["default"].number,
      magnifierOffsetY: _propTypes["default"].number,
      square: _propTypes["default"].bool,
      cursorStyle: _propTypes["default"].string,
      renderOverlay: _propTypes["default"].func,
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      onImageLoad: _propTypes["default"].func,
      onLargeImageLoad: _propTypes["default"].func
    };
    GlassMagnifier.defaultProps = {
      imageSrc: "",
      largeImageSrc: "",
      imageAlt: "",
      allowOverflow: false,
      magnifierBorderSize: 3,
      magnifierBorderColor: "rgba(255,255,255,.5)",
      magnifierBackgroundColor: "rgba(225,225,225,.5)",
      magnifierSize: "25%",
      magnifierOffsetX: 0,
      magnifierOffsetY: 0,
      square: false,
      cursorStyle: "none",
      onImageLoad: _utils["default"].noop,
      onLargeImageLoad: _utils["default"].noop
    };
    var _default = GlassMagnifier;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/PictureInPictureRenderer.js
var require_PictureInPictureRenderer = __commonJS({
  "node_modules/react-image-magnifiers/dist/PictureInPictureRenderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _utils = _interopRequireDefault(require_utils2());
    var _styles = _interopRequireDefault(require_styles());
    var _Image = _interopRequireDefault(require_Image());
    var _ImagePreviewOverlay = _interopRequireDefault(require_ImagePreviewOverlay());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var PictureInPictureRenderer = function PictureInPictureRenderer2(props) {
      var active = props.active, itemPosition = props.itemPosition, elementDimensions = props.elementDimensions, itemDimensions = props.itemDimensions, imageSrc = props.imageSrc, largeImageSrc = props.largeImageSrc, imageAlt = props.imageAlt, itemRef = props.itemRef, previewSizePercentage = props.previewSizePercentage, containerRef = props.containerRef, previewVerticalPos = props.previewVerticalPos, previewOpacity = props.previewOpacity, previewOverlayOpacity = props.previewOverlayOpacity, previewOverlayBoxOpacity = props.previewOverlayBoxOpacity, previewOverlayBackgroundColor = props.previewOverlayBackgroundColor, previewOverlayBoxColor = props.previewOverlayBoxColor, previewOverlayBoxImage = props.previewOverlayBoxImage, previewOverlayBoxImageSize = props.previewOverlayBoxImageSize, renderOverlay = props.renderOverlay, cursorStyle = props.cursorStyle, cursorStyleActive = props.cursorStyleActive, onLoadRefresh = props.onLoadRefresh, _onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad;
      var sizeMult = 100 / previewSizePercentage;
      var containerTop = 0;
      var containerLeft = 0;
      var containerWidth = 0;
      if (containerRef.current) {
        containerWidth = containerRef.current.getBoundingClientRect().width;
        if (previewVerticalPos === "bottom") {
          containerTop = elementDimensions.height * (sizeMult - 1);
          containerRef.current.style.paddingTop = "".concat(containerTop, "px");
        } else {
          containerRef.current.style.paddingBottom = "".concat(elementDimensions.height * (sizeMult - 1), "px");
        }
        if (containerRef.current.style.textAlign === "right") {
          containerLeft = elementDimensions.width * (sizeMult - 1);
        }
      }
      var smallImageSize = {
        width: elementDimensions.width,
        height: elementDimensions.height
      };
      var previewSize = {
        width: Math.floor(smallImageSize.width * (smallImageSize.width / itemDimensions.width) * sizeMult),
        height: Math.floor(smallImageSize.height * (smallImageSize.height / itemDimensions.height) * sizeMult)
      };
      if (isNaN(previewSize.width)) {
        previewSize.width = 0;
        previewSize.height = 0;
      }
      var position = {
        x: 0,
        y: 0
      };
      var itemPositionAdj = _objectSpread({}, itemPosition);
      var previewOffset = {
        x: previewSize.width / 2,
        y: previewSize.height / 2
      };
      itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
      itemPositionAdj.x = Math.min(smallImageSize.width - previewOffset.x, itemPositionAdj.x);
      itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
      itemPositionAdj.y = Math.min(smallImageSize.height - previewOffset.y, itemPositionAdj.y);
      position = _objectSpread({}, itemPositionAdj);
      position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, itemDimensions.width * -1 + containerWidth, 0, position.x);
      position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, itemDimensions.height * -1 + smallImageSize.height * sizeMult, 0, position.y);
      position.x = _utils["default"].invertNumber(itemDimensions.width * -1 + containerWidth, 0, position.x);
      position.y = _utils["default"].invertNumber(itemDimensions.height * -1 + smallImageSize.height * sizeMult, 0, position.y);
      previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
      previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
      previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
      previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
      var legalSize = previewSize.width < smallImageSize.width;
      var finalCursorStyle = active ? cursorStyleActive : cursorStyle;
      return _react["default"].createElement("div", {
        style: {
          position: "relative",
          cursor: legalSize ? finalCursorStyle : "default"
        }
      }, _react["default"].createElement(_Image["default"], {
        style: {
          width: "100%",
          display: "block",
          opacity: previewOpacity,
          visibility: legalSize ? "visible" : "hidden"
        },
        src: imageSrc,
        alt: imageAlt,
        onImageLoad: function onImageLoad(e) {
          onLoadRefresh();
          _onImageLoad(e);
        },
        onLoadRefresh
      }), _react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(smallImageSize.width, smallImageSize.height, true)), {}, {
          width: containerWidth + "px",
          height: elementDimensions.height * sizeMult + "px",
          position: "absolute",
          left: -containerLeft,
          top: -containerTop,
          fontSize: "1rem"
        })
      }, _react["default"].createElement(_Image["default"], {
        style: _objectSpread(_objectSpread({}, _styles["default"].getLargeImageStyle(position.x, position.y, true)), {}, {
          visibility: legalSize ? "visible" : "hidden",
          zIndex: "-1"
        }),
        src: largeImageSrc || imageSrc,
        alt: imageAlt,
        ref: itemRef,
        onImageLoad: onLargeImageLoad,
        onLoadRefresh
      }), _react["default"].createElement("img", {
        src: imageSrc,
        alt: imageAlt,
        style: {
          display: legalSize ? "none" : "block",
          width: "100%"
        }
      }), renderOverlay ? renderOverlay(active) : null), _react["default"].createElement(_ImagePreviewOverlay["default"], {
        previewWidth: previewSize.width,
        previewHeight: previewSize.height,
        previewPosLeft: previewSize.left,
        previewPosRight: previewSize.right,
        previewPosTop: previewSize.top,
        previewPosBottom: previewSize.bottom,
        imageWidth: smallImageSize.width,
        imageHeight: smallImageSize.height,
        overlayOpacity: previewOverlayOpacity,
        overlayBoxOpacity: previewOverlayBoxOpacity,
        overlayBackgroundColor: previewOverlayBackgroundColor,
        overlayBoxColor: previewOverlayBoxColor,
        overlayBoxImage: previewOverlayBoxImage,
        overlayBoxImageSize: previewOverlayBoxImageSize,
        active: legalSize
      }));
    };
    var _default = PictureInPictureRenderer;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/PictureInPictureMagnifier.js
var require_PictureInPictureMagnifier = __commonJS({
  "node_modules/react-image-magnifiers/dist/PictureInPictureMagnifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = _interopRequireDefault(require_utils2());
    var _reactInputPosition = _interopRequireWildcard(require_dist());
    var _PictureInPictureRenderer = _interopRequireDefault(require_PictureInPictureRenderer());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var PictureInPictureMagnifier = function(_Component) {
      _inherits(PictureInPictureMagnifier2, _Component);
      var _super = _createSuper(PictureInPictureMagnifier2);
      function PictureInPictureMagnifier2() {
        var _this;
        _classCallCheck(this, PictureInPictureMagnifier2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "containerRef", _react["default"].createRef());
        return _this;
      }
      _createClass(PictureInPictureMagnifier2, [{
        key: "render",
        value: function render() {
          var _this$props = this.props, imageSrc = _this$props.imageSrc, largeImageSrc = _this$props.largeImageSrc, imageAlt = _this$props.imageAlt, previewSizePercentage = _this$props.previewSizePercentage, previewHorizontalPos = _this$props.previewHorizontalPos, previewVerticalPos = _this$props.previewVerticalPos, previewOpacity = _this$props.previewOpacity, previewOverlayOpacity = _this$props.previewOverlayOpacity, previewOverlayBoxOpacity = _this$props.previewOverlayBoxOpacity, previewOverlayBackgroundColor = _this$props.previewOverlayBackgroundColor, previewOverlayBoxColor = _this$props.previewOverlayBoxColor, previewOverlayBoxImage = _this$props.previewOverlayBoxImage, previewOverlayBoxImageSize = _this$props.previewOverlayBoxImageSize, cursorStyle = _this$props.cursorStyle, cursorStyleActive = _this$props.cursorStyleActive, shadow = _this$props.shadow, shadowColor = _this$props.shadowColor, renderOverlay = _this$props.renderOverlay, className = _this$props.className, style = _this$props.style, onImageLoad = _this$props.onImageLoad, onLargeImageLoad = _this$props.onLargeImageLoad, onZoomStart = _this$props.onZoomStart, onZoomEnd = _this$props.onZoomEnd;
          return _react["default"].createElement("div", {
            ref: this.containerRef,
            style: _objectSpread(_objectSpread({}, style), {}, {
              textAlign: previewHorizontalPos,
              overflow: "hidden",
              fontSize: "0"
            }),
            className
          }, _react["default"].createElement(_reactInputPosition["default"], {
            style: {
              width: "".concat(previewSizePercentage, "%"),
              display: "inline-block",
              boxShadow: shadow ? "1px -1px 1px ".concat(shadowColor) : "none"
            },
            touchActivationMethod: _reactInputPosition.TOUCH_ACTIVATION.TOUCH,
            mouseActivationMethod: _reactInputPosition.MOUSE_ACTIVATION.MOUSE_DOWN,
            onActivate: onZoomStart,
            onDeactivate: onZoomEnd,
            trackItemPosition: true,
            itemPositionMinX: 0,
            itemPositionMinY: 0,
            itemPositionMaxX: -0.1,
            itemPositionMaxY: -0.1,
            linkItemToActive: true,
            centerItemOnLoad: true
          }, _react["default"].createElement(_PictureInPictureRenderer["default"], {
            containerRef: this.containerRef,
            previewSizePercentage,
            previewVerticalPos,
            previewOpacity,
            previewOverlayOpacity,
            previewOverlayBoxOpacity,
            previewOverlayBackgroundColor,
            previewOverlayBoxColor,
            previewOverlayBoxImage,
            previewOverlayBoxImageSize,
            imageSrc,
            largeImageSrc,
            imageAlt,
            renderOverlay,
            cursorStyle,
            cursorStyleActive: cursorStyleActive || cursorStyle,
            onImageLoad,
            onLargeImageLoad
          })));
        }
      }]);
      return PictureInPictureMagnifier2;
    }(_react.Component);
    _defineProperty(PictureInPictureMagnifier, "propTypes", {
      imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      imageAlt: _propTypes["default"].string,
      previewSizePercentage: _propTypes["default"].number,
      previewHorizontalPos: _propTypes["default"].oneOf(["left", "right"]),
      previewVerticalPos: _propTypes["default"].oneOf(["top", "bottom"]),
      previewOpacity: _propTypes["default"].number,
      previewOverlayOpacity: _propTypes["default"].number,
      previewOverlayBoxOpacity: _propTypes["default"].number,
      previewOverlayBackgroundColor: _propTypes["default"].string,
      previewOverlayBoxColor: _propTypes["default"].string,
      previewOverlayBoxImage: _propTypes["default"].string,
      previewOverlayBoxImageSize: _propTypes["default"].string,
      cursorStyle: _propTypes["default"].string,
      cursorStyleActive: _propTypes["default"].string,
      shadow: _propTypes["default"].bool,
      shadowColor: _propTypes["default"].string,
      renderOverlay: _propTypes["default"].func,
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      onImageLoad: _propTypes["default"].func,
      onLargeImageLoad: _propTypes["default"].func,
      onZoomStart: _propTypes["default"].func,
      onZoomEnd: _propTypes["default"].func
    });
    _defineProperty(PictureInPictureMagnifier, "defaultProps", {
      imageSrc: "",
      largeImageSrc: "",
      imageAlt: "",
      previewSizePercentage: 35,
      previewHorizontalPos: "left",
      previewVerticalPos: "bottom",
      previewOpacity: 0.8,
      previewOverlayOpacity: 0.4,
      previewOverlayBoxOpacity: 0.8,
      previewOverlayBackgroundColor: "#000",
      previewOverlayBoxColor: "#fff",
      previewOverlayBoxImage: "",
      previewOverlayBoxImageSize: "",
      cursorStyle: "crosshair",
      cursorStyleActive: "",
      shadowColor: "rgba(0,0,0,.4)",
      onImageLoad: _utils["default"].noop,
      onLargeImageLoad: _utils["default"].noop
    });
    var _default = PictureInPictureMagnifier;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/MagnifierContainer.js
var require_MagnifierContainer = __commonJS({
  "node_modules/react-image-magnifiers/dist/MagnifierContainer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = exports.MagnifierContext = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactInputPosition = require_dist();
    var _utils = _interopRequireDefault(require_utils2());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var MagnifierContext = _react["default"].createContext();
    exports.MagnifierContext = MagnifierContext;
    var MagnifierContainer = function(_Component) {
      _inherits(MagnifierContainer2, _Component);
      var _super = _createSuper(MagnifierContainer2);
      function MagnifierContainer2() {
        var _this;
        _classCallCheck(this, MagnifierContainer2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          inputPositionState: _reactInputPosition.defaultState
        });
        _defineProperty(_assertThisInitialized(_this), "zoomContainerRef", _react["default"].createRef());
        _defineProperty(_assertThisInitialized(_this), "zoomImageRef", _react["default"].createRef());
        _defineProperty(_assertThisInitialized(_this), "zoomImageDimensions", {
          width: 0,
          height: 0
        });
        _defineProperty(_assertThisInitialized(_this), "getZoomContainerDimensions", function() {
          if (!_this.zoomContainerRef.current) {
            return {
              width: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            };
          }
          var _this$zoomContainerRe = _this.zoomContainerRef.current.getBoundingClientRect(), width = _this$zoomContainerRe.width, height = _this$zoomContainerRe.height, left = _this$zoomContainerRe.left, right = _this$zoomContainerRe.right, top = _this$zoomContainerRe.top, bottom = _this$zoomContainerRe.bottom;
          return {
            width,
            height,
            left,
            right,
            top,
            bottom
          };
        });
        _defineProperty(_assertThisInitialized(_this), "onUpdate", function(changes) {
          _this.setState({
            inputPositionState: changes
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onZoomImageLoad", function(e) {
          var rect = e.target.getBoundingClientRect();
          _this.zoomImageDimensions = {
            width: rect.width,
            height: rect.height
          };
        });
        return _this;
      }
      _createClass(MagnifierContainer2, [{
        key: "getZoomImageDimensions",
        value: function getZoomImageDimensions() {
          if (!this.zoomImageDimensions.width && this.zoomImageRef.current) {
            var rect = this.zoomImageRef.current.getBoundingClientRect();
            this.zoomImageDimensions = {
              width: rect.width,
              height: rect.height
            };
          }
          return this.zoomImageDimensions;
        }
      }, {
        key: "getContextValue",
        value: function getContextValue() {
          return _objectSpread({
            stateOverride: this.state.inputPositionState,
            isActive: this.state.inputPositionState.active,
            onUpdate: this.onUpdate,
            zoomImageDimensions: this.zoomImageDimensions,
            zoomRef: this.zoomContainerRef,
            zoomImageRef: this.zoomImageRef,
            onZoomImageLoad: this.onZoomImageLoad
          }, this.calculatePositions());
        }
      }, {
        key: "calculatePositions",
        value: function calculatePositions() {
          var _this$state$inputPosi = this.state.inputPositionState, elementDimensions = _this$state$inputPosi.elementDimensions, itemPosition = _this$state$inputPosi.itemPosition;
          var zoomContainerDimensions = this.getZoomContainerDimensions();
          var zoomImageDimensions = this.getZoomImageDimensions();
          var inPlace = false;
          var _this$props = this.props, autoInPlace = _this$props.autoInPlace, inPlaceMinBreakpoint = _this$props.inPlaceMinBreakpoint;
          if (autoInPlace || inPlaceMinBreakpoint) {
            try {
              var left = zoomContainerDimensions.left, right = zoomContainerDimensions.right;
              var windowWidth = window.innerWidth;
              if (windowWidth < inPlaceMinBreakpoint || left < 0 || right > windowWidth) {
                inPlace = true;
              }
            } catch (e) {
            }
          }
          var smallImageSize = {
            width: elementDimensions.width,
            height: elementDimensions.height
          };
          var previewSize = {
            width: Math.floor(smallImageSize.width * (zoomContainerDimensions.width / zoomImageDimensions.width)),
            height: Math.floor(smallImageSize.height * (zoomContainerDimensions.height / zoomImageDimensions.height))
          };
          var position = {
            x: 0,
            y: 0
          };
          var itemPositionAdj = _objectSpread({}, itemPosition);
          var previewOffset = {
            x: inPlace ? 0 : previewSize.width / 2,
            y: inPlace ? 0 : previewSize.height / 2
          };
          itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
          itemPositionAdj.x = Math.min(smallImageSize.width - previewOffset.x, itemPositionAdj.x);
          itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
          itemPositionAdj.y = Math.min(smallImageSize.height - previewOffset.y, itemPositionAdj.y);
          position = _objectSpread({}, itemPositionAdj);
          var zoomContainerSize = inPlace ? smallImageSize : zoomContainerDimensions;
          position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, zoomImageDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
          position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, zoomImageDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
          position.x = _utils["default"].invertNumber(zoomImageDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
          position.y = _utils["default"].invertNumber(zoomImageDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
          previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
          previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
          previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
          previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
          return {
            position,
            smallImageSize,
            previewSize,
            zoomContainerDimensions,
            inPlace
          };
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, style = _this$props2.style, className = _this$props2.className;
          return _react["default"].createElement("div", {
            style,
            className
          }, _react["default"].createElement(MagnifierContext.Provider, {
            value: this.getContextValue()
          }, this.props.children));
        }
      }]);
      return MagnifierContainer2;
    }(_react.Component);
    _defineProperty(MagnifierContainer, "propTypes", {
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      autoInPlace: _propTypes["default"].bool,
      inPlaceMinBreakpoint: _propTypes["default"].number
    });
    _defineProperty(MagnifierContainer, "defaultProps", {
      inPlaceMinBreakpoint: 0
    });
    var _default = MagnifierContainer;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/MagnifierPreviewRenderer.js
var require_MagnifierPreviewRenderer = __commonJS({
  "node_modules/react-image-magnifiers/dist/MagnifierPreviewRenderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _Image = _interopRequireDefault(require_Image());
    var _ImagePreviewOverlay = _interopRequireDefault(require_ImagePreviewOverlay());
    var _styles = _interopRequireDefault(require_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function MagnifierPreviewRenderer(props) {
      var image = props.image, largeImage = props.largeImage, alt = props.alt, previewSize = props.previewSize, smallImageSize = props.smallImageSize, overlayOpacity = props.overlayOpacity, overlayBoxOpacity = props.overlayBoxOpacity, overlayBackgroundColor = props.overlayBackgroundColor, overlayBoxColor = props.overlayBoxColor, overlayBoxImage = props.overlayBoxImage, overlayBoxImageSize = props.overlayBoxImageSize, active = props.active, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, renderOverlay = props.renderOverlay, transitionSpeed = props.transitionSpeed, shouldBeInPlace = props.inPlace, position = props.position;
      var _React$useState = _react["default"].useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), inPlace = _React$useState2[0], setInPlace = _React$useState2[1];
      _react["default"].useEffect(function() {
        setInPlace(shouldBeInPlace);
      }, [shouldBeInPlace]);
      return _react["default"].createElement("div", {
        style: {
          position: "relative"
        }
      }, _react["default"].createElement(_Image["default"], {
        style: {
          display: "block",
          width: "100%"
        },
        src: image,
        alt,
        onImageLoad
      }), _react["default"].createElement(_ImagePreviewOverlay["default"], {
        previewWidth: previewSize.width,
        previewHeight: previewSize.height,
        previewPosLeft: previewSize.left,
        previewPosRight: previewSize.right,
        previewPosTop: previewSize.top,
        previewPosBottom: previewSize.bottom,
        imageWidth: smallImageSize.width,
        imageHeight: smallImageSize.height,
        overlayOpacity,
        overlayBoxOpacity,
        overlayBackgroundColor,
        overlayBoxColor,
        overlayBoxImage,
        overlayBoxImageSize,
        active: active && !inPlace,
        transitionSpeed
      }), inPlace ? _react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(smallImageSize.width, smallImageSize.height, inPlace, false)), {}, {
          opacity: active ? "1" : "0",
          transition: "opacity ".concat(transitionSpeed, "s ease")
        })
      }, _react["default"].createElement(_Image["default"], {
        style: _objectSpread({}, _styles["default"].getLargeImageStyle(position.x, position.y, inPlace)),
        src: largeImage,
        alt,
        onImageLoad: onLargeImageLoad
      })) : null, renderOverlay ? renderOverlay(active) : null);
    }
    var _default = MagnifierPreviewRenderer;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/MagnifierPreview.js
var require_MagnifierPreview = __commonJS({
  "node_modules/react-image-magnifiers/dist/MagnifierPreview.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = _interopRequireDefault(require_utils2());
    var _reactInputPosition = _interopRequireWildcard(require_dist());
    var _MagnifierPreviewRenderer = _interopRequireDefault(require_MagnifierPreviewRenderer());
    var _MagnifierContainer = require_MagnifierContainer();
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function MagnifierPreview(props) {
      var imageSrc = props.imageSrc, imageAlt = props.imageAlt, largeImageSrc = props.largeImageSrc, className = props.className, style = props.style, cursorStyle = props.cursorStyle, onImageLoad = props.onImageLoad, onLargeImageLoad = props.onLargeImageLoad, renderOverlay = props.renderOverlay, overlayOpacity = props.overlayOpacity, overlayBoxOpacity = props.overlayBoxOpacity, overlayBackgroundColor = props.overlayBackgroundColor, overlayBoxColor = props.overlayBoxColor, overlayBoxImage = props.overlayBoxImage, overlayBoxImageSize = props.overlayBoxImageSize, transitionSpeed = props.transitionSpeed, onZoomStart = props.onZoomStart, onZoomEnd = props.onZoomEnd, mouseActivation = props.mouseActivation, touchActivation = props.touchActivation;
      var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext), stateOverride = _React$useContext.stateOverride, onUpdate = _React$useContext.onUpdate, zoomImageDimensions = _React$useContext.zoomImageDimensions, previewSize = _React$useContext.previewSize, smallImageSize = _React$useContext.smallImageSize, position = _React$useContext.position, inPlace = _React$useContext.inPlace;
      return _react["default"].createElement(_reactInputPosition["default"], {
        touchActivationMethod: touchActivation,
        mouseActivationMethod: mouseActivation,
        onActivate: onZoomStart,
        onDeactivate: onZoomEnd,
        className,
        style,
        cursorStyle,
        trackItemPosition: true,
        linkItemToActive: true,
        stateOverride,
        onUpdate
      }, _react["default"].createElement(_MagnifierPreviewRenderer["default"], {
        image: imageSrc,
        largeImage: largeImageSrc,
        alt: imageAlt,
        zoomImageDimensions,
        previewSize,
        smallImageSize,
        onImageLoad,
        onLargeImageLoad,
        renderOverlay,
        overlayOpacity,
        overlayBoxOpacity,
        overlayBackgroundColor,
        overlayBoxColor,
        overlayBoxImage,
        overlayBoxImageSize,
        transitionSpeed,
        inPlace,
        position
      }));
    }
    MagnifierPreview.propTypes = {
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      cursorStyle: _propTypes["default"].string,
      imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      imageAlt: _propTypes["default"].string,
      onImageLoad: _propTypes["default"].func,
      onLargeImageLoad: _propTypes["default"].func,
      renderOverlay: _propTypes["default"].func,
      overlayBoxOpacity: _propTypes["default"].number,
      overlayOpacity: _propTypes["default"].number,
      overlayBackgroundColor: _propTypes["default"].string,
      overlayBoxColor: _propTypes["default"].string,
      overlayBoxImage: _propTypes["default"].string,
      overlayBoxImageSize: _propTypes["default"].string,
      transitionSpeed: _propTypes["default"].number,
      mouseActivation: _propTypes["default"].string,
      touchActivation: _propTypes["default"].string
    };
    MagnifierPreview.defaultProps = {
      cursorStyle: "crosshair",
      imageSrc: "",
      imageAlt: "",
      overlayOpacity: 0.5,
      overlayBoxOpacity: 0.8,
      overlayBackgroundColor: "#000",
      overlayBoxColor: "#fff",
      overlayBoxImage: "",
      overlayBoxImageSize: "",
      transitionSpeed: 0.4,
      onImageLoad: _utils["default"].noop,
      onLargeImageLoad: _utils["default"].noop,
      mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
      touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TOUCH
    };
    var _default = MagnifierPreview;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/MagnifierZoom.js
var require_MagnifierZoom = __commonJS({
  "node_modules/react-image-magnifiers/dist/MagnifierZoom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = _interopRequireDefault(require_utils2());
    var _styles = _interopRequireDefault(require_styles());
    var _MagnifierContainer = require_MagnifierContainer();
    var _Image = _interopRequireDefault(require_Image());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function MagnifierZoom(props) {
      var imageSrc = props.imageSrc, imageAlt = props.imageAlt, className = props.className, style = props.style, _onImageLoad = props.onImageLoad, transitionSpeed = props.transitionSpeed;
      var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext), zoomImageDimensions = _React$useContext.zoomImageDimensions, zoomContainerDimensions = _React$useContext.zoomContainerDimensions, position = _React$useContext.position, onZoomImageLoad = _React$useContext.onZoomImageLoad, zoomRef = _React$useContext.zoomRef, zoomImageRef = _React$useContext.zoomImageRef, isActive = _React$useContext.isActive, inPlace = _React$useContext.inPlace;
      var invalidVertical = zoomImageDimensions.height <= zoomContainerDimensions.height;
      var invalidHorizontal = zoomImageDimensions.width <= zoomContainerDimensions.width;
      return _react["default"].createElement("div", {
        className,
        style: _objectSpread(_objectSpread(_objectSpread({}, _styles["default"].getMagnifierZoomStyle(isActive && !inPlace, transitionSpeed)), style), {}, {
          overflow: "hidden",
          pointerEvents: "none"
        }),
        ref: zoomRef
      }, _react["default"].createElement(_Image["default"], {
        ref: zoomImageRef,
        style: _objectSpread({}, _styles["default"].getLargeImageStyle(invalidHorizontal ? 0 : position.x, invalidVertical ? 0 : position.y, true)),
        src: imageSrc,
        alt: imageAlt,
        onImageLoad: function onImageLoad(e) {
          onZoomImageLoad(e);
          _onImageLoad(e);
        }
      }));
    }
    MagnifierZoom.propTypes = {
      className: _propTypes["default"].string,
      style: _propTypes["default"].object,
      imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
      imageAlt: _propTypes["default"].string,
      onImageLoad: _propTypes["default"].func,
      transitionSpeed: _propTypes["default"].number
    };
    MagnifierZoom.defaultProps = {
      style: {},
      imageSrc: "",
      imageAlt: "",
      onImageLoad: _utils["default"].noop,
      transitionSpeed: 0.4
    };
    var _default = MagnifierZoom;
    exports["default"] = _default;
  }
});

// node_modules/react-image-magnifiers/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/react-image-magnifiers/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "SideBySideMagnifier", {
      enumerable: true,
      get: function get() {
        return _SideBySideMagnifier["default"];
      }
    });
    Object.defineProperty(exports, "Magnifier", {
      enumerable: true,
      get: function get() {
        return _Magnifier["default"];
      }
    });
    Object.defineProperty(exports, "GlassMagnifier", {
      enumerable: true,
      get: function get() {
        return _GlassMagnifier["default"];
      }
    });
    Object.defineProperty(exports, "PictureInPictureMagnifier", {
      enumerable: true,
      get: function get() {
        return _PictureInPictureMagnifier["default"];
      }
    });
    Object.defineProperty(exports, "MagnifierContainer", {
      enumerable: true,
      get: function get() {
        return _MagnifierContainer["default"];
      }
    });
    Object.defineProperty(exports, "MagnifierPreview", {
      enumerable: true,
      get: function get() {
        return _MagnifierPreview["default"];
      }
    });
    Object.defineProperty(exports, "MagnifierZoom", {
      enumerable: true,
      get: function get() {
        return _MagnifierZoom["default"];
      }
    });
    exports.TOUCH_ACTIVATION = exports.MOUSE_ACTIVATION = void 0;
    var _reactInputPosition = require_dist();
    var _SideBySideMagnifier = _interopRequireDefault(require_SideBySideMagnifier());
    var _Magnifier = _interopRequireDefault(require_Magnifier());
    var _GlassMagnifier = _interopRequireDefault(require_GlassMagnifier());
    var _PictureInPictureMagnifier = _interopRequireDefault(require_PictureInPictureMagnifier());
    var _MagnifierContainer = _interopRequireDefault(require_MagnifierContainer());
    var _MagnifierPreview = _interopRequireDefault(require_MagnifierPreview());
    var _MagnifierZoom = _interopRequireDefault(require_MagnifierZoom());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var MOUSE_ACTIVATION = {
      CLICK: _reactInputPosition.MOUSE_ACTIVATION.CLICK,
      DOUBLE_CLICK: _reactInputPosition.MOUSE_ACTIVATION.DOUBLE_CLICK
    };
    exports.MOUSE_ACTIVATION = MOUSE_ACTIVATION;
    var TOUCH_ACTIVATION = {
      TAP: _reactInputPosition.TOUCH_ACTIVATION.TAP,
      DOUBLE_TAP: _reactInputPosition.TOUCH_ACTIVATION.DOUBLE_TAP,
      LONG_TOUCH: _reactInputPosition.TOUCH_ACTIVATION.LONG_TOUCH
    };
    exports.TOUCH_ACTIVATION = TOUCH_ACTIVATION;
  }
});
export default require_dist2();
//# sourceMappingURL=react-image-magnifiers.js.map
