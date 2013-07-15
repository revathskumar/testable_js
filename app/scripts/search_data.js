/* global $ */
var SearchData = function(){

}

SearchData.prototype.fetch = function(query){
    var dfd;

    if(!query){
        dfd = $.Deferred();
        dfd.resolve([]);
        return dfd.promise()
    }

    return $.ajax('/data/search.json',{
        data: { q: query },
        dataType: 'json'
    }).pipe(function( resp ){
        return resp.results;
    })
}
