/* global $ */
(function(){
    'use strict';

    var SearchForm = function(el){
        this.el = el;
        this._render()
        return this;
    }

    SearchForm.prototype._render = function() {
        $(this.el).html(JST['app/scripts/templates/search_form.ejs']());
    };
})()
