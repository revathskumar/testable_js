/*global $ */
'use strict';

var Likes = function(el){
    this.el = $(el);
    return this;
};

Likes.prototype.add = function(name) {
    this.el.find('.no-results').remove();
    $('<li>',{text: name}).appendTo(this.el);
};
