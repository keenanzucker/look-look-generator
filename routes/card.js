var router = require('express').Router();
var CardModel = require('../models/Card.js');

router.post('/new', (req, res) => {

    CardModel.makeCard((card) => {
        if (card) {
            res.json({cardId: card._id});
        } else {
            res.json({error: 'Could not create card'});
        }
    })
});


module.exports = router;