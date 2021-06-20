function printThis(params) {
    console.log(this);
}

let obj = {

    a: 10,
    b: 20,
    c: printThis,
    d: function (params) {
        console.log(this)
        // printThis(); // gives window obj]
        let x = this.c;
        x();
        // this.c(); // gives obj 
        // console.log(this.c == printThis);
    }
}

obj.d()
