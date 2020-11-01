// Throtling : is generally used for performance optimisation 
// on click button call api and if user clicks again n again it will be disaster so ewe have to limit it using throtling 

const expensive = () => {
    console.log("Expensive");
}

// window.addEventListener("resize",expensive);

const throttle = (fn, limit) => {
    let flag = true;
    console.log(flag);
    return function() {
        let context = this;
        args = arguments;
        if(flag) { 
            fn.apply(context,args);
            flag = false;
        }
           
        setTimeout(()=>{
            flag = true;
        },limit);
    }
}

const betterExpensiveFunction = throttle(expensive,10000);

window.addEventListener("resize",betterExpensiveFunction);