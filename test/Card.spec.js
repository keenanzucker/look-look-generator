'use strict';

import mongoose from 'mongoose';
import { expect } from 'chai';
import Card from '../models/Card';
import _ from 'underscore';

function clearDB(cb) {
    for (var i in mongoose.connection.collections)
        mongoose.connection.collections[i].remove(function() {});
    cb();
}

describe('Card: models', () => {
    let DUT;

    before(done => {
        let cb = (err) => {
            if (err) throw err;
            done();
        };
        if (mongoose.connection.readyState === 0) {
            mongoose.connect('mongodb://localhost/test', cb);
        }
    });

    after(done => {
        clearDB(done);
        mongoose.disconnect();
    });

    beforeEach(done => {
        Card.makeCard(c => {
            DUT = c;
            done();
        });
    });

    afterEach(done => {
        Card.remove({_id: DUT._id}, done);
    });

    it('#makeCard', (done) => {
        expect(DUT.map).to.have.lengthOf(8);
        expect(DUT.habitat).to.equal(-1);
        expect(DUT.superDefender).to.be.null;
        expect(DUT.author).to.be.empty;
        done();
    });

    it('#setsHabitat', (done) => {
        expect(DUT.habitat).to.equal(-1);
        Card.setHabitat(DUT._id, 0, (updated) => {
            expect(updated.habitat).to.equal(0);
            done();
        });
    });

    it('#setsLifespan', (done) => {
        expect(DUT.lifespan).to.equal(-1);
        Card.setLifespan(DUT._id, 0, (updated) => {
            expect(updated.lifespan).to.equal(0);
            done();
        });
    });

    it('#setsDomain', (done) => {
        expect(DUT.domain).to.equal(-1);
        Card.setDomain(DUT._id, 0, (updated) => {
            expect(updated.domain).to.equal(0);
            done();
        });
    });

    it('#setsTrophicLevel', (done) => {
        expect(DUT.trophicLevel).to.equal(-1);
        Card.setTrophicLevel(DUT._id, 0, (updated) => {
            expect(updated.trophicLevel).to.equal(0);
            done();
        });
    });

    it('#setsName', (done) => {
        expect(DUT.name).to.be.empty;
        Card.setName(DUT._id, 'updated name', (updated) => {
            expect(updated.name).to.equal('updated name');
            done();
        });
    });

    it('#setsTitle', (done) => {
        expect(DUT.title).to.be.empty;
        Card.setTitle(DUT._id, 'look look card', (updated) => {
            expect(updated.title).to.equal('look look card');
            done();
        });
    });

    it('#setsDescription', (done) => {
        expect(DUT.description).to.be.empty;
        Card.setDescription(DUT._id, 'a description', (updated) => {
            expect(updated.description).to.equal('a description');
            done();
        });
    });

    it('#setsImage', (done) => {
        expect(DUT.image).to.be.empty;
        Card.setImage(DUT._id, 'a image', (updated) => {
            expect(updated.image).to.equal('a image');
            done();
        });
    });

    it('#setsNocturnal', (done) => {
        expect(DUT.nocturnal).to.be.null;
        Card.setNocturnal(DUT._id, true, (updated) => {
            expect(updated.nocturnal).to.equal(true);
            done();
        });
    });

    it('#setsSuperDefender', (done) => {
        expect(DUT.superDefender).to.be.null;
        Card.setSuperDefender(DUT._id, true, (updated) => {
            expect(updated.superDefender).to.equal(true);
            done();
        });
    });

    // TODO -> ask Hieu how to make these work

    // it('#setsSize', (done) => {
    //     expect(DUT.size).to.equal({feet: -1, inches: -1});
    //     Card.setSize(DUT._id, {feet: 4, inches: 0}, (updated) => {
    //         expect(updated.size).to.equal({feet: 4, inches: 0});
    //         done();
    //     });
    // });

    // it('#setsMap', (done) => {
    //     expect(DUT.map).to.equal([false, false, false, false, false, false, false, false]);
    //     Card.setMap(DUT._id, [true, true, true, true, false, false, false, false], (updated) => {
    //         expect(updated.map).to.equal([true, true, true, true, false, false, false, false]);
    //         done();
    //     });
    // });
});
