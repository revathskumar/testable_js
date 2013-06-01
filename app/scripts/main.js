/* global $, Likes */
'use strict';

var likes = new Likes('#likes');
var searchForm = new SearchForm('#search-form');
var searchResults = new SearchResults('#search-results');
searchResults.setResults({users:[{name: "Addy"}, {name: "Paul"}]});

$(document).on('like', function(e,name){
    likes.add(name);
});
