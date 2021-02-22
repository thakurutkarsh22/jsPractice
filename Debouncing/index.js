
let counter  =0;
const getData = (args) => {
    // calls an API and gets data 
    console.log(args);
    console.log("Fetching Data ...",counter++);
}

const doSomeMagic = function (fn, delay) {
    let timer;
    
    return function() {
        console.log(this);
        let context = this; // outside also works   
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout( () => {
            fn.apply(context,args);
        } ,delay);
    }
}

function debounce (func, wait, immediate) {
    let timeout
    return function () {
      const context = this
      const args = arguments
      clearTimeout(timeout)
      
      if (immediate && !timeout) func.apply(context, args)
      timeout = setTimeout(function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }, wait)
    }
  }

const betterFunction = debounce(getData, 300, false);