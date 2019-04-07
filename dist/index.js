"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _schema = _interopRequireDefault(require("./schema"));

var _database = require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _database.connect)();
app.get('/', function (req, res) {
  res.json({
    message: 'Hello world'
  });
});
app.use('/graphql', (0, _expressGraphql["default"])({
  graphiql: true,
  schema: _schema["default"],
  context: {
    messageId: 'test',
    other: 'blabla'
  }
}));
app.listen(3000, function () {
  return console.log("\uF898 Server on port 3000");
});
//# sourceMappingURL=index.js.map