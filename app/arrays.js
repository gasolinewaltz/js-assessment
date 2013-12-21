if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(a,b){
           return a+b;
        });

    },

    remove : function(arr, item) {
        //apparently this is supposed to return a copy
        // so I'll go against my best judgement
        var _arr = [];
        for(var i = 0, j; j = arr[i]; i++){
            if(j!==item){
                _arr.push(j);
            }
        }
        return _arr;
    },
    removeWithoutCopy : function(arr, item) {
        for(var i = 0, j; j = arr[i]; i++){
            if(j === item){
                arr.splice(i, 1);
                i--;
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return Array.prototype.concat(arr1, arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0, j; j = arr[i]; i++){
            if(j === item){
                count++;
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var _arr = [];

        for(var i = 0, j; j = arr[i]; i++){
            if(arr.indexOf(j, i+1) !== -1 && _arr.indexOf(j) === -1){
                _arr.push(j);
            }
        }

        return _arr;
    },

    square : function(arr) {
        for(var i = 0, j; j = arr[i]; i++){
            arr[i] = j*j;
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var _arr = [];

        for(var i = 0, j; j = arr[i]; i++){
            if(j === target) _arr.push(i);
        }
        return _arr;
    }
  };
});
