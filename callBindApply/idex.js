let name = {
    firstName: 'utkarsh',
    lastName: 'thakur'
}

let name1 = {
    firstName: 'uu',
    lastName: 'sad',
    jhatpakoda: '5th'
}


let printNameArrow = (country, state) => {
    console.log(this);
    console.log(this.firstName + " " + this.lastName + " " + this.jhatpakoda + " " + country +" " + state);
}

let printName = function(country, state) {
    console.log(this);
    console.log(this.firstName + " " + this.lastName + " " + this.jhatpakoda + " " + country +" " + state);
}

// function reusing
// printName("aabc", "asd");
// printNameArrow("abcd", "acdef");



// printName.call(null,"indi","bharti")
// printName.call(name, "india", "delhi");
// printNameArrow.call(name, "india", "delhi");

// printName.call(name1, "india", "punjab");

// printName.apply(name,["inda", "bangloe"]);

// printName.apply(name1, ["honolulu", "crazyLand"])

// let printMyName = printName.bind(name, "america", "phil");
// printMyName();

// let printMyName1 = printNameArrow.bind(name, "america", "phil");
// printMyName1();




/// polyfils 

// if browser dosent support bind method we have to make our bind method 


Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function() {
        // console.log('inside function', this);
        obj.apply(args[0], params);
    }
}

// let printMyName2 = printName.mybind(name, "india", "delhi"); 
// printMyName2();



// problem code below is answer code

Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function() {
        obj.apply(args[0], params);
    }
}

// let printMyName2 = printName.mybind(name, "india"); 
// printMyName2("delhi"); // thsi shows undefined 



Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params,...args2]);
    }
}

let printMyName2 = printName.mybind(name, "india"); 
printMyName2("delhi");