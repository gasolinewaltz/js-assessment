if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery'], function($) {

  return {
    async : function(value) {

        return $.Deferred(function(deferred){
            //demonstrate that this is async
            setTimeout(function(){
                deferred.resolve(value);
            },10);
        }).promise();

    },

    manipulateRemoteData : function(url) {
        return $.Deferred(function(deferred) {
            $.getJSON(url, function(data) {
                var people = [];
                for (var i=0; i<data.people.length; i++) {
                    people.push(data.people[i].name);
                }
                deferred.resolve(people.sort());
            });
        }).promise();
    }

  };
});
