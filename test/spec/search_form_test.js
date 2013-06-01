/* global assert, test, suite, setup, $ */
'use strict';


suite('Search Form', function(){
    var el;

    setup(function(){
        el = $('<div id="search-form">');
    });

    test('constructor', function(){
        var sf = new SearchForm(el);
        assert(sf);
    })

    test('form render', function(){
        var sf = new SearchForm(el);

        assert.equal(el.find('form').length, 1);
    })
});
