/* global $, _, views */
'use strict';

var SearchResults = function(el){
    this.el = $(el);
    return this;
};

SearchResults.prototype.setResults = function(results) {
    _.bind(this._populate, this, results);
};

SearchResults.prototype._populate = function(results) {
    this.el.html( views.template('search_results.ejs', results));
};
