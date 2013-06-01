/* global $, _, views */
'use strict';

var SearchResults = function(el){
    this.el = $(el);
    return this;
};

SearchResults.prototype.setResults = function(results) {
    this._populate(results);
};

SearchResults.prototype._populate = function(results) {
    this.el.html( JST['app/scripts/templates/search_results.ejs'](results));
};
