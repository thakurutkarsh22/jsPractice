let x = {};
// js engine will translate to let x = new Object();


// const circle = {
//     radius: 1, // field 
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();




// ---------------- Factory function ---------------------

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();


// ------------------- constructor function  --------------------

// function Circle(radius) {
//     console.log(this)
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw'+this.radius);
//     }
// } 

// const a = Circle(1);
// // a.draw();

// const another = new Circle(1); // new = {} and this point to this obj
// another.draw();


// this is the construction function that makes an object 


// const Circle1 = new Function('radius',`
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw'+this.radius);
//     }
// `);

// const circle = new Circle1(1);
// console.log(circle);