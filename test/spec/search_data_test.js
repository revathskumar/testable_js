/* global assert, test, suite, setup, $ */
'use strict';

suite('SearchData', function(){

    test('constructor', function(){
        var searchData = new SearchData();
        assert(searchData);
    })

    suite("fetch", function(){
        var xhr, requests;

        setup(function(){
            requests = [];
            xhr = sinon.useFakeXMLHttpRequest();
            xhr.onCreate = function(req){
                requests.push(req);
            }
        })

        teardown(function(){
            xhr.restore();
        })

        test("fetches from correct url", function() {
            var searchData = new SearchData();
            searchData.fetch('cat');
            console.log(requests);
            assert.equal(requests, '/data/search.json?q=cat')
        })
    })
})
