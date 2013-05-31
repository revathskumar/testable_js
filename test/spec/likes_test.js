/*global setup, test, $, Likes, assert */
'use strict';

var ul;

setup(function(){
    ul = $('<ul><li class="no-results"></li></ul>');
});

test('constructor', function(){
    var l = new Likes(ul);
    assert(l);
});

test('adding name', function(){
  var l = new Likes(ul);
  l.add('Addy');

  assert.equal(ul.find('li').length, 1);
  assert.equal(ul.find('li').first().html(), 'Addy');

  assert.equal(ul.find('li.no-results').length, 0);

})

