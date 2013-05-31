/* global $, Likes */
'use strict';

var likes = new Likes('#likes');

$(document).on('like', function(e,name){
    likes.add(name);
});
