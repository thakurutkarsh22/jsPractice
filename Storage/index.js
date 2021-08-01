//// ----------------------------- local storage ------------------ 


// window.localStorage.setItem("hello", "world")


// console.log(window.localStorage.getItem("hello"));


// // when you store some object in local storage via JSON.stringify() you will loose its prototype chain.
// // and when you do JSON.parse() that prototype chain is not restored any how. you have to make a new object using those values
// // to get the prototype chain.


// // local storage is synchronous code. 


// // same origin(domain/port/protocol)



// /// -- ------------------- storage event 

// window.onstorage = event => {
//     console.log(event+ " this is event");
// }


// let textBox = document.querySelector("input");
// window.onload = function (params) {
//     console.log("onload");
//     textBox.value = window.localStorage.getItem("initialVal");
// }

// textBox.addEventListener('keydown', (event)=> {
//     window.localStorage.setItem("initialVal", textBox.value);
// })


//// -------------------------- cookie 

// document.cookie provides access to cookies

// write operations modify only cookies mentioned in it.
// name/value must be encoded.
// one cookie must not exceed 4KB, 20+ cookies per site (depends on the browser).
// Cookie options:

// path=/, by default current path, makes the cookie visible only under that path.
// domain=site.com, by default a cookie is visible on the current domain only. If the domain is set explicitly, the cookie becomes visible on subdomains.
// expires or max-age sets the cookie expiration time. Without them the cookie dies when the browser is closed.
// secure makes the cookie HTTPS-only. (by default it is both http and https) and no port isolation (it is shady as per now)
// samesite forbids the browser to send the cookie with requests coming from outside the site. This helps to prevent XSRF attacks.
// Additionally:

// Third-party cookies may be forbidden by the browser, e.g. Safari does that by default.
// When setting a tracking cookie for EU citizens, GDPR requires to ask for permission.



// Cookies do not provide isolation by port. If a cookie is readable by a service running on one port,
//  the cookie is also readable by a service running on another port of the same server. 
//  If a cookie is writable by a service on one port, the cookie is also writable by a service running on another port of the same server. 
//  For this reason, servers SHOULD NOT both run mutually distrusting services on different ports of the same host and use cookies to store 
//  security sensitive information.

// get a cookie
// console.log(document.cookie);

// // set a cookie

// document.cookie = "abcd=john"; // update only cookie named abcd or add aabcd it dosent touch other cookie



/// ------------------------------- indexed DB =-----------------------------

// can also use async/await with help of promise based wrapper. 
// exists within current origin(domain/protocol/port)

let openReq = window.indexedDB.open("utkarsh", 1 );

openReq.upg









/////// ----------------------------- In cognito mode (what happens exactly) 

// It essentially sets the cache path to a temporary folder. Cookies are still used, but everything starts "fresh" when the incognito window is launched. 
// This applies all storage, including Cookies, Local Storage, Web SQL, IndexedDB, cache, etc.

// Of course Chrome also leaves pages out of the browser's history.
