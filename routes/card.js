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

router.post('/set-habitat/', (req, res) => {
    
    CardModel.setHabitat(req.body.id, req.body.habitat, (card) => {
        if (!card) {
            res.json({error: 'Could not set habitat'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-lifespan/', (req, res) => {
    
    CardModel.setLifespan(req.body.id, req.body.lifespan, (card) => {
        if (!card) {
            res.json({error: 'Could not set lifespan'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-domain/', (req, res) => {
    
    CardModel.setDomain(req.body.id, req.body.domain, (card) => {
        if (!card) {
            res.json({error: 'Could not set domain'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-trophic-level/', (req, res) => {
    
    CardModel.setTrophicLevel(req.body.id, req.body.trophicLevel, (card) => {
        if (!card) {
            res.json({error: 'Could not set trophic level'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-name/', (req, res) => {
    
    CardModel.setName(req.body.id, req.body.name, (card) => {
        if (!card) {
            res.json({error: 'Could not set name'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-title/', (req, res) => {
    
    CardModel.setTitle(req.body.id, req.body.title, (card) => {
        if (!card) {
            res.json({error: 'Could not set title'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-description/', (req, res) => {
    
    CardModel.setDescription(req.body.id, req.body.description, (card) => {
        if (!card) {
            res.json({error: 'Could not set description'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-author/', (req, res) => {
    
    CardModel.setAuthor(req.body.id, req.body.author, (card) => {
        if (!card) {
            res.json({error: 'Could not set author'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-image/', (req, res) => {
    
    CardModel.setImage(req.body.id, req.body.image, (card) => {
        if (!card) {
            res.json({error: 'Could not set image'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-map/', (req, res) => {
    
    CardModel.setMap(req.body.id, req.body.map, (card) => {
        if (!card) {
            res.json({error: 'Could not set map'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-nocturnal/', (req, res) => {
    
    CardModel.setNocturnal(req.body.id, req.body.nocturnal, (card) => {
        if (!card) {
            res.json({error: 'Could not set nocturnal'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-super-defender/', (req, res) => {
    
    CardModel.setSuperDefender(req.body.id, req.body.superDefender, (card) => {
        if (!card) {
            res.json({error: 'Could not set super defender'});
        } else {
            res.json(card);
        }
    })
});

router.post('/set-size/', (req, res) => {
    
    CardModel.setSize(req.body.id, req.body.size, (card) => {
        if (!card) {
            res.json({error: 'Could not set size'});
        } else {
            res.json(card);
        }
    })
});

module.exports = router;