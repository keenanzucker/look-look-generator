'use strict';

var mongoose = require('mongoose');
var _ = require('underscore');

mongoose.Promise = global.Promise;

let cardSchema = mongoose.Schema({
    id: String,
    habitat: Number,
    lifespan: Number,
    size: {
        feet: Number,
        inches: Number
    },
    domain: Number,
    trophicLevel: Number,
    superDefender: Boolean,
    nocturnal: Boolean,
    name: String,
    title: String,
    description: String,
    cardSet: String,
    image: String,
    author: String
});

cardSchema.statics.makeCard = function(cb) {
    var newCard = {
        habitat: -1,
        lifespan: -1,
        size: {
            feet: -1,
            inches: -1
        },
        domain: -1,
        trophicLevel: -1,
        superDefender: null,
        nocturnal: null,
        name: '',
        title: '',
        description: '',
        cardSet: '',
        image: '',
        author: '',
        id: ''
    };

    this.create(newCard, (err, card) => {
        if (err) return console.error(err);
        cb(card);
    });
};

cardSchema.statics.getCards = function(cb) {
    this.find({},
        (err, cards) => {
            if (err) return console.error('could not get all cards', cards);
            cb(cards);
        }
    );
}

cardSchema.statics.setHabitat = function(id, habitat, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {habitat: habitat}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update habitat on card', id, habitat, err);
            cb(card);
        }
    );
};

cardSchema.statics.setLifespan = function(id, lifespan, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {lifespan: lifespan}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update lifespan on card', id, lifespan, err);
            cb(card);
        }
    );
};

cardSchema.statics.setDomain = function(id, domain, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {domain: domain}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update domain on card', id, domain, err);
            cb(card);
        }
    );
};

cardSchema.statics.setTrophicLevel = function(id, trophicLevel, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {trophicLevel: trophicLevel}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update trophicLevel on card', id, trophicLevel, err);
            cb(card);
        }
    );
};

cardSchema.statics.setName = function(id, name, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {name: name}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update name on card', id, name, err);
            cb(card);
        }
    );
};

cardSchema.statics.setTitle = function(id, title, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {title: title}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update title on card', id, title, err);
            cb(card);
        }
    );
};

cardSchema.statics.setDescription = function(id, description, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {description: description}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update description on card', id, description, err);
            cb(card);
        }
    );
};

cardSchema.statics.setAuthor = function(id, author, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {author: author}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update author on card', id, author, err);
            cb(card);
        }
    );
};

// Image currently going to be passed in as string (a url to an image for simplicity)
cardSchema.statics.setImage = function(id, image, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {image: image}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update image on card', id, image, err);
            cb(card);
        }
    );
};

cardSchema.statics.setCardSet = function(id, cardSet, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {cardSet: cardSet}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update cardSet on card', id, cardSet, err);
            cb(card);
        }
    );
};

cardSchema.statics.setNocturnal = function(id, nocturnal, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {nocturnal: nocturnal}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update nocturnal on card', id, nocturnal, err);
            cb(card);
        }
    );
};

cardSchema.statics.setSuperDefender = function(id, superDefender, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {superDefender: superDefender}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update super defender on card', id, superDefender, err);
            cb(card);
        }
    );
};

cardSchema.statics.setSize = function(id, size, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {size: size}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update size on card', id, size, err);
            cb(card);
        }
    );
};

module.exports = mongoose.model('Card', cardSchema);
