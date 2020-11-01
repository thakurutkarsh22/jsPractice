function a(parm = 8) {
    var b = 10;
    c();
    function c(){
        console.log(b + "param: " + parm);
    }
}
var ak = 0;
a(5);


// block vs closures 


//While a block is just a piece of code that can be composed by statements and declarations but nothing else, a closure is a real first-class object,
//  a real variable that has a block as its value.

// The main difference is that a block simply groups instructions together (for example the body of a while statement),
//  while a closure is a variable that contains some code that can be executed.

// If you have a closure usually you can pass it as a parameter to functions, currify and decurrify it, and mainly call it!