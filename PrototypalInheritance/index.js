let arr = ["utkarsh", "thakur" ]; 

let object = {
    name: "utarsh",
    city: "delhi",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}


let object2 = {
    name: "utkarsh"
}

//Never do this in real life otherwise you are dead 

object2.__proto__ = object;