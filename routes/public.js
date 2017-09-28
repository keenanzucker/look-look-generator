var router = require('express').Router();
var CardModel = require('../models/Card.js');

router.get('/get/:id', (req, res) => {
    CardModel.findOne({_id: req.params.id}, (err, card) => {
        if (err) {
            res.json({error: err});
        } else {
            res.json({card});
        }
    })
});

module.exports = router;