"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _papaparse = _interopRequireDefault(require("papaparse"));

var _fs = _interopRequireDefault(require("fs"));

var _bcrpytjs = _interopRequireDefault(require("bcrpytjs"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./database/config"));

var _Block = _interopRequireDefault(require("../../models/Block"));

var _User = _interopRequireDefault(require("../../models/User"));

var _default =
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var pathString, files, _file, url, rsFile;

  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _mongoose["default"].connect(_config["default"].db_string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, function () {
            console.log("Connected to MongoDB!");
          });

          pathString = "".concat(__dirname, "/../../assets/models");
          files = _fs["default"].readdirSync(pathString);

          for (_file in files) {
            console.log("Importing " + _file + "...");
          }

          url = pathString + "/" + file;
          rsFile = _fs["default"].createReadStream(url);

          _papaparse["default"].parse(rsFile, {
            header: true,
            step: function step(results) {// if (file == 'blocks.csv') {
              // const block = await new Block({
              //   name: results.body.name
              // });
              // await block.save();
              // } else if (file == 'users.csv') {
              //     const salt = await bcrypt.genSalt(10);
              //     const hashedPwd = await bcrypt.hash(process.env.USER_PWD, salt);
              // const user = await new User({
              //   first_name: results.data.first_name,
              //   last_name: results.data.last_name,
              //   email: results.data.email,
              //   birth_date: results.data.birth_date,
              //   about_me: results.data.about_me,
              //   profile_image_url: results.data.profile_image_url,
              //   job_title: results.data.job_title,
              //   company: results.data.company,
              //   password: hashedPwd
              // });
              // await user.save();
            },
            complete: function complete(results) {
              console.log("Finished importing " + file + "!");
            }
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports["default"] = _default;