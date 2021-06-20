

// DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.
// load – not only HTML is loaded, but also all the external resources: images, styles etc.
// beforeunload/unload – the user is leaving the page.


document.addEventListener("DOMContentLoaded", ready);
function ready(params) {
    console.log("hello");

    
let button = document.querySelector("button");
console.log(button); // will show button 
}

let button = document.querySelector("button");
console.log(button);// wont show button 