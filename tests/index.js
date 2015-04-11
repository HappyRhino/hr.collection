var Collection = require("../");

describe('Collection', function() {

    describe('add', function() {

        it('should handle unicity of models', function() {
            var c = new Collection();

            var m = {
                'id': 'test_unique_id'
            };

            c.add(m);
            c.add(m);

            expect(c.size()).to.equal(1);
        });

        it('should merge models', function() {
            var c = new Collection();
            var uid = "test_unique_id";

            c.add({
                'id': uid,
                'test': 1
            });
            c.add({
                'id': uid,
                'test': 2
            }, {
                merge: true
            });

            expect(c.get(uid).get("test")).to.equal(2);
        });

        it('should handle id changes', function() {
            var c = new Collection();

            c.add({
                'id': 'id1'
            });
            c.add({
                'id': 'id2'
            });

            var m = c.get("id1");
            m.set("id", "id2");

            expect(c.size()).to.equal(1);
        });

        it('should correctly use "comparator"', function() {
            var C = Collection.extend({
                'comparator': "i"
            });
            var c = new C();

            c.add({
                'i': 3
            });
            c.add({
                'i': 2
            });
            c.add({
                'i': 5
            });

            expect(c.at(0).get("i")).to.equal(2);
            expect(c.at(1).get("i")).to.equal(3);
            expect(c.at(2).get("i")).to.equal(5);
        });
    });

});

