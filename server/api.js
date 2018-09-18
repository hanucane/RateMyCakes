const Cakes = require("./models.js");

module.exports = {
    readAll:    (req,res)=>Cakes.find({}).then(data => res.json(data)).catch(errs=>res.json(errs))
}
