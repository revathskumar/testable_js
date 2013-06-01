/* global setup, test, $, SearchResults, assert */
'use strict';

suite('Search Results', function(){
   var ul;
    var data = {users:[{name: "Addy"}, {name: "Paul"}]};

    setup(function(){
        ul = $('<ul><li class="no-results">No results</li></ul>');
    });

    test('constructor', function(){
        var s = new SearchResults(ul);
        assert(s);
    });

    test('display results', function(){
        var s = new SearchResults(ul);
        s.setResults(data);

        assert.equal(ul.find('li').length, data.users.length);
        assert.equal(ul.find('li').first().html(), data.users[0].name);
        assert.equal(ul.find('li.no-results').length, 0);
    });
})

