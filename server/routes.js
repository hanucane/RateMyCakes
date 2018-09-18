const bp = require("body-parser");
const api = require("./api.js");

module.exports = function(app)
{
    app.use(bp.json());
    app.get("/cakes", api.readAll);
}