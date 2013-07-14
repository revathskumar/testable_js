/* global assert, test, suite, setup, $ */
'use strict';

test('constructor', function(){
    var searchData = new SearchData();
    assert(searchData);
})

suite("fetch", function(){
    var xhr, requests;

    setup(function(){
        requests = [];
        xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate(function(request){
            requests.push(request);
        })
    })

    tearDown(function(){
        xhr.restore();
    })

})
