/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nodeProject_utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodeProject/utilities/js/logger.js */ \"./nodeProject/utilities/js/logger.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nodeProject_utilities_js_restErrorHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodeProject/utilities/js/restErrorHandler.js */ \"./nodeProject/utilities/js/restErrorHandler.js\");\n/* harmony import */ var _nodeProject_utilities_js_restErrorHandler_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nodeProject_utilities_js_restErrorHandler_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nodeProject_home_homeRoutes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodeProject/home/homeRoutes.js */ \"./nodeProject/home/homeRoutes.js\");\n/* harmony import */ var _nodeProject_users_userRoutes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodeProject/users/userRoutes.js */ \"./nodeProject/users/userRoutes.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config();\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](__dirname));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.urlencoded({\n  extended: true\n})); //Indicate which folders to look in when rendering views.\n\napp.set('views', ['./nodeProject/home/views', './nodeProject/users/views']);\napp.set('view engine', 'ejs'); //Set API endpoints for home page\n\napp.use(_nodeProject_home_homeRoutes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]); //Set API endpoints for user page(s)\n\napp.use('/api', _nodeProject_users_userRoutes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); //Set error API endpoint, used to test error handling\n\napp.get('/error', function (req, res) {\n  _nodeProject_utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info('GET - Error');\n  throw new _nodeProject_utilities_js_restErrorHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"ErrorHandler\"](404, 'Try Again, Resource Not Found');\n}); //Error handler, this will display a default page when something goes wrong\n\napp.use(function (error, req, res, next) {\n  if (req.accepts('html')) {\n    console.log('Error', error);\n    res.render('index');\n    return;\n  }\n\n  if (req.accepts('json')) {\n    Object(_nodeProject_utilities_js_restErrorHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"handleError\"])(error, res);\n    return;\n  }\n});\nvar PORT = process.env.PORT || 8080;\nvar ENV = \"development\" || false;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"...\"));\n  console.log(\"Environment - \".concat(ENV));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./nodeProject/config/dbConfig.json":
/*!******************************************!*\
  !*** ./nodeProject/config/dbConfig.json ***!
  \******************************************/
/*! exports provided: dbName, userName, password, connection, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"dbName\\\":\\\"nodeproject\\\",\\\"userName\\\":\\\"postgres\\\",\\\"password\\\":\\\"CoffeeTime#1\\\",\\\"connection\\\":{\\\"host\\\":\\\"localhost\\\",\\\"dialect\\\":\\\"postgres\\\",\\\"pool\\\":{\\\"max\\\":10,\\\"min\\\":0,\\\"acquire\\\":30000,\\\"idle\\\":10000}}}\");\n\n//# sourceURL=webpack:///./nodeProject/config/dbConfig.json?");

/***/ }),

/***/ "./nodeProject/config/logConfig.json":
/*!*******************************************!*\
  !*** ./nodeProject/config/logConfig.json ***!
  \*******************************************/
/*! exports provided: logFileName, logDirectory, logFormat, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"logFileName\\\":\\\"app-%DATE%.log\\\",\\\"logDirectory\\\":\\\"logs\\\",\\\"logFormat\\\":{\\\"timestamp\\\":\\\"YYYY-MM-DD HH:mm:ss\\\"}}\");\n\n//# sourceURL=webpack:///./nodeProject/config/logConfig.json?");

/***/ }),

/***/ "./nodeProject/db/index.js":
/*!*********************************!*\
  !*** ./nodeProject/db/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Instantiates a database connection using information from the configuration file.\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar UserModel = __webpack_require__(/*! ./models/user */ \"./nodeProject/db/models/user.js\");\n\nvar config = __webpack_require__(/*! ../config/dbConfig.json */ \"./nodeProject/config/dbConfig.json\");\n\nvar sequelize = new Sequelize(config.dbName, config.userName, config.password, config.connection);\nvar User = UserModel(sequelize, Sequelize);\nUser.sync({\n  alter: true\n});\nmodule.exports = {\n  User: User\n};\n\n//# sourceURL=webpack:///./nodeProject/db/index.js?");

/***/ }),

/***/ "./nodeProject/db/models/user.js":
/*!***************************************!*\
  !*** ./nodeProject/db/models/user.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Represents a user entry in the database.\nmodule.exports = function (sequelize, type) {\n  return sequelize.define('user', {\n    username: {\n      type: type.STRING(24),\n      allowNull: false\n    },\n    password: {\n      type: type.STRING(30)\n    },\n    first_name: {\n      type: type.STRING(12)\n    },\n    last_name: {\n      type: type.STRING(24)\n    },\n    email: {\n      type: type.STRING(50)\n    }\n  }, {\n    tableName: 't_user'\n  });\n};\n\n//# sourceURL=webpack:///./nodeProject/db/models/user.js?");

/***/ }),

/***/ "./nodeProject/home/homeRoutes.js":
/*!****************************************!*\
  !*** ./nodeProject/home/homeRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/js/logger.js */ \"./nodeProject/utilities/js/logger.js\");\n//Define API endpoints for the home page\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', function (req, res) {\n  _utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info('GET - Home');\n  res.render('index');\n  res.end();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./nodeProject/home/homeRoutes.js?");

/***/ }),

/***/ "./nodeProject/users/userRoutes.js":
/*!*****************************************!*\
  !*** ./nodeProject/users/userRoutes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/js/logger.js */ \"./nodeProject/utilities/js/logger.js\");\n/* harmony import */ var _userService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userService.js */ \"./nodeProject/users/userService.js\");\n//Define API endpoints for the user page(s)\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/users/add', function (req, res) {\n  _utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info('GET - Add Users');\n  res.render('newUser');\n  res.end();\n});\nrouter.get('/users', function (req, res) {\n  _utilities_js_logger_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info('GET - Display Users');\n  Object(_userService_js__WEBPACK_IMPORTED_MODULE_2__[\"getUsers\"])().then(function (users) {\n    console.log(\"Users: \", users);\n    res.render('displayUsers', {\n      userData: users\n    });\n  });\n});\nrouter.post('/users/add', function (req, res) {\n  console.log(req.body);\n  Object(_userService_js__WEBPACK_IMPORTED_MODULE_2__[\"addUser\"])(req.body);\n  res.send('USERS ADD');\n  res.end();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./nodeProject/users/userRoutes.js?");

/***/ }),

/***/ "./nodeProject/users/userService.js":
/*!******************************************!*\
  !*** ./nodeProject/users/userService.js ***!
  \******************************************/
/*! exports provided: addUser, getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUser\", function() { return addUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n//Service for user related operations\nvar _require = __webpack_require__(/*! ../db */ \"./nodeProject/db/index.js\"),\n    User = _require.User;\n/**\r\n * Add user to the database. Currently no constraints exist.\r\n * @param {*} user \r\n */\n\n\nvar addUser = function addUser(user) {\n  User.create({\n    username: \"\".concat(user.userName),\n    password: \"\".concat(user.password),\n    first_name: \"\".concat(user.firstName),\n    last_name: \"\".concat(user.lastName),\n    email: \"\".concat(user.email)\n  }).then(function (result) {\n    console.log(\"Auto-generated ID:\", result.id);\n  });\n};\n/**\r\n * Retrieve all entries in the user database table.\r\n */\n\n\nvar getUsers = function getUsers() {\n  return User.findAll();\n};\n\n\n\n//# sourceURL=webpack:///./nodeProject/users/userService.js?");

/***/ }),

/***/ "./nodeProject/utilities/js/logger.js":
/*!********************************************!*\
  !*** ./nodeProject/utilities/js/logger.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var winston_daily_rotate_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! winston-daily-rotate-file */ \"winston-daily-rotate-file\");\n/* harmony import */ var winston_daily_rotate_file__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston_daily_rotate_file__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_logConfig_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/logConfig.json */ \"./nodeProject/config/logConfig.json\");\nvar _config_logConfig_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config/logConfig.json */ \"./nodeProject/config/logConfig.json\", 1);\n//Provides logging functionality\n\n\n\n\nvar ENV = \"development\" || false;\nvar transport = winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports;\nvar format = winston__WEBPACK_IMPORTED_MODULE_0___default.a.format;\nvar createLogger = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger;\n/**\r\n * Instaniates a logger using information from the configuration file.\r\n * @param {*} env \r\n */\n\nvar getLogger = function getLogger(env) {\n  var logTransports = [];\n\n  if (env === 'development') {\n    logTransports.push(new transport.Console());\n  }\n\n  logTransports.push(new transport.DailyRotateFile({\n    filename: _config_logConfig_json__WEBPACK_IMPORTED_MODULE_3__.logFileName,\n    dirname: _config_logConfig_json__WEBPACK_IMPORTED_MODULE_3__.logDirectory\n  }));\n  var logger = createLogger({\n    transports: logTransports,\n    format: format.combine(format.label({\n      label: path__WEBPACK_IMPORTED_MODULE_2___default.a.basename(process.mainModule.filename)\n    }), format.timestamp({\n      format: _config_logConfig_json__WEBPACK_IMPORTED_MODULE_3__.logFormat.timestamp\n    }), format.printf(function (info) {\n      return \"\".concat(info.timestamp, \" \").concat(info.level, \" [\").concat(info.label, \"]: \").concat(info.message);\n    }))\n  });\n  return logger;\n};\n\nvar logger = getLogger(ENV);\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n\n//# sourceURL=webpack:///./nodeProject/utilities/js/logger.js?");

/***/ }),

/***/ "./nodeProject/utilities/js/restErrorHandler.js":
/*!******************************************************!*\
  !*** ./nodeProject/utilities/js/restErrorHandler.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/**\r\n * Custom error handler handler\r\n */\nvar ErrorHandler = /*#__PURE__*/function (_Error) {\n  _inherits(ErrorHandler, _Error);\n\n  var _super = _createSuper(ErrorHandler);\n\n  function ErrorHandler(statusCode, message) {\n    var _this;\n\n    _classCallCheck(this, ErrorHandler);\n\n    _this = _super.call(this);\n    _this.statusCode = statusCode;\n    _this.message = message;\n    return _this;\n  }\n\n  return ErrorHandler;\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n/**\r\n * Sends JSON data back as response indicating what the error was\r\n * @param {*} err \r\n * @param {*} res \r\n */\n\n\nvar handleError = function handleError(err, res) {\n  var statusCode = err.statusCode,\n      message = err.message;\n  res.status(statusCode).json({\n    status: 'error',\n    statusCode: statusCode,\n    message: message\n  });\n};\n\nmodule.exports = {\n  ErrorHandler: ErrorHandler,\n  handleError: handleError\n};\n\n//# sourceURL=webpack:///./nodeProject/utilities/js/restErrorHandler.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ }),

/***/ "winston-daily-rotate-file":
/*!********************************************!*\
  !*** external "winston-daily-rotate-file" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston-daily-rotate-file\");\n\n//# sourceURL=webpack:///external_%22winston-daily-rotate-file%22?");

/***/ })

/******/ });