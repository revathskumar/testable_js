/* global setup, test, $, SearchResults, assert */
'use strict';

var ul;

setup(function(){
    ul = $('<ul><li class="no-results">No results</li></ul>');
});

test('constructor', function(){
    var s = new SearchResults(ul);
    assert(s);
});

