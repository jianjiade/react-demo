/**
 * Created by iu2fish on 15/8/29.
 */
var a = function () {
    var n = 1;

    return function(){
        console.log(n);
    }
}

var b = function () {
    var n = 1;

    return function(){
        console.log(n);
    }
}

var c = function () {
    var n = 1;
    Add = function(){
        n+=1;
        console.log(n)
    };
    return function(){
        console.log(n);
    }
}

var a1 = a();
var b1 = b();
var c1 = c();
a1();
b1();
c1();
Add();
a1();
b1();
c1();
