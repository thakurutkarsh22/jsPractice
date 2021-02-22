// ----- call apply bind polyfill

// call

if (!Function.prototype.call) {
    Function.prototype.call = function (context, ...args) {
      context.fnName = this;
      context.fnName(...args);
    };
  }
  
  // apply
  
  if (!Function.prototype.apply) {
    Function.prototype.apply = function (context, args) {
      context.fnName = this;
      context.fnName(...args);
    };
  }
  
  // bind
  if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (...args) {
      let obj = this;
      let params = args.slice(1);
      return function () {
        obj.apply(args[0], params);
      };
    };
  }
  
  let name = {
    first: "utkarsh",
    last: "thakur"
  };
  
  let printName = function (first, last) {
    console.log(this.first + " " + first + " " + this.last + " " + last);
  };
  
  let myCall = printName.myBind(name, "ravi", "kumar");
  myCall(); // utkarsh ravi thakur kumar
  
  // currying getSUm
  
  // getSum(1,2)(4,3)(4)(5)
  
  function getSum(...args) {
    let total = 0;
  
    function sum(...args) {
      for (const item of args) {
        total += item;
      }
      return sum;
    }
    sum.valueOf = function () {
      return total;
    };
    return sum(...args);
  }
  
  let totalSum = getSum(1, 2)(3, 4)(4)(5);
  console.log(totalSum.valueOf());
  
  // Arrays Pollyfills
  
  // Array.map
  
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      // if (!callback || typeof callback !== "function") throw TypeError();
      let newArray = [];
      let thisArr = this;
      for (let item of thisArr) {
        let ans = callback.call(null, item);
        newArray.push(ans);
      }
      return newArray;
    };
  }
  
  const mapArr = [10, 20, 30, 40];
  const ansMapArray = mapArr.myMap((item) => item * item);
  console.log(ansMapArray);
  
  // Array.filter
  if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
      if (!callback || typeof callback !== "function") throw TypeError();
      let newArr = [];
      let thisArr = this;
      for (let item of thisArr) {
        if (callback(item)) {
          newArr.push(item);
        }
      }
  
      return newArr;
    };
  }
  
  const filterArr = [10, 20, 30, 40];
  const ansFilterArr = filterArr.myFilter((item) => item > 10);
  console.log(ansFilterArr);
  
  // Array.reduce
  
  Array.prototype.myReduce = function (callback, initialValue) {
    if (!callback) throw TypeError();
  
    var i = 0;
    if (typeof initialValue === "undefined") {
      initialValue = this[0];
      ++i;
    }
  
    for (; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
  };
  
  const reduceArr = [10, 11];
  const ansReduceArr = reduceArr.reduce((pv, currValue, index, arr) => {
    return pv + currValue;
  }, 5);
  const ansMyReduceArr = reduceArr.myReduce((pv, currValue, index, arr) => {
    return pv + currValue;
  }, 5);
  console.log(ansReduceArr, ansMyReduceArr);
  
  // Array.flatten
  
  Array.prototype.myFlatten = function (depth) {
    let output = [];
  
    function flat(arr, depth) {
      for (let i = 0; i < arr.length; i++) {
        if (depth < 0) {
          return;
        }
  
        if (Array.isArray(arr[i])) {
          flat(arr[i], depth - 1);
        } else {
          output.push(arr[i]);
        }
      }
    }
  
    flat(this, depth);
    return output;
  };
  
  let input = [
    1,
    2,
    3,
    [4],
    [5, 6, [7], [8, [9, [10]]]],
    11,
    12,
    13,
    [14, [[[[[15, [16]]]]]]],
    17,
    18,
    [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
  ];
  const myFlatArr = [10, [20, 40, [50]]];
  const ansMyFlat = myFlatArr.myFlatten(1);
  console.log(myFlatArr.flat(1));
  console.log(ansMyFlat);
  
  // debouncing
  
  let counter = 0;
  const getDataForDebounce = (args) => {
    console.log(args);
    console.log("Fetching data ...", counter++);
  };
  
  function myDebounce(func, delay, risingEdge) {
    let timer;
  
    return function () {
      const args = arguments;
      clearTimeout(timer);
  
      if (risingEdge && !timer) func.apply(this, args);
  
      timer = setTimeout(() => {
        timer = null;
        if (!risingEdge) func.apply(this, args);
      }, delay);
    };
  }
  
  const debouncingAns = myDebounce(getDataForDebounce, 300);
  
  // throttle
  
  const getthrottledata = () => {
    console.log("hello throttel");
  };
  
  function throttle(fun, delay) {
    let flag = true;
    return function () {
      let args = arguments;
      if (flag) {
        fun.apply(this, args);
        flag = false;
      } else {
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  }
  
  const betterGetThrottel = throttle(getthrottledata, 10000);
  
  // Object Polyfills
  
  // Object.assign
  
  if (!Object.prototype.myAssign) {
    Object.prototype.myAssign = function (...args) {
      var target = args[0];
      for (var i = 1; i < args.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key))
            // this is imp
            target[key] = source[key];
        }
      }
      return target;
    };
  }
  
  // Object.create
  
  if (!Object.prototype.myCreate) {
    Object.prototype.myCreate = function (obj) {
      function f() {}
      f.prototype = obj;
      return new f();
    };
  }
  
  // SetInterval
  
  function setIntervalPollyfill() {
    var intervalId = 0;
    var intervalMap = {};
  
    function setIntervalPollyfill(callback, delay = 0, ...args) {
      if (!callback || typeof callback !== "function") {
        throw TypeError("callback should be a function");
      }
  
      var id = intervalId + 1;
      function repeat() {
        intervalMap[id] = setTimeout(() => {
          callback(args);
          if (intervalMap[id]) {
            repeat();
          }
        }, delay);
      }
  
      repeat();
      return id;
    }
  
    function clearIntervalPollyfill(intervalId) {
      clearTimeout(intervalMap[intervalId]);
      delete intervalMap[intervalId];
    }
  
    return {
      setIntervalPollyfill,
      clearIntervalPollyfill
    };
  }
  
  // another setInterval
  
  let timerId = setTimeout(function tick() {
    console.log("tick");
    timerId = setTimeout(tick, 2000);
  }, 2000);
  
  // Promise Polyfills
  
  // Promise.all
  
  const firstPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("data payload from the first Promise");
      }, 1000);
    });
  };
  
  const secondPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("data payload from the second Promise");
      }, 1000);
    });
  };
  
  function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      const promiseCount = promises.length;
      const resolvedData = [];
      let resolvedCount = 0;
      function checkStatus(data, index) {
        resolvedData[index] = data;
        resolvedCount++;
  
        if (resolvedCount === promiseCount) {
          resolve(resolvedData);
        }
      }
  
      promises.forEach((promise, i) => {
        promise
          .then((data) => {
            checkStatus(data, i);
          })
          .catch((e) => {
            reject(e);
          });
      });
    });
  }
  
  promiseAll([firstPromise(), secondPromise()])
    .then((response) => {
      console.log(response);
    })
  
    .catch((error) => {
      console.log(error);
    });
  
  // Promise.allSettle
  const resolveHandler = (value) => ({ status: "fulfilled", value });
  const rejectHandler = (reason) => ({ status: "rejected", reason });
  
  function allSetteled(promises) {
    const convertedPromises = promises.map((promise) =>
      Promise.resolve(promise).then(resolveHandler, rejectHandler)
    );
    return Promise.all(convertedPromises);
  }
  
  // Promise.race
  
  function promiseRace(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise, i) => {
        promise
          .then((data) => {
            resolve(data);
          })
          .catch((e) => {
            reject(e);
          });
      });
    });
  }
  
  // Promise.any
  
  function promiseAny(promisesArray) {
    var errorOutput = new Array(promisesArray.length);
    var counter = 0;
  
    return new Promise((resolve, reject) => {
      promisesArray.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(resolve) // resolve outer promise, as and when any of the input promises resolves
          .catch((error) => {
            errorOutput[index] = error;
            counter = counter + 1;
            if (counter === promisesArray.length) {
              // all promises rejected, reject outer promise
              reject(errorOutput);
            }
          });
      });
    });
  }
  
  // https://iamabhilash.medium.com/javascript-promise-method-polyfills-a4a41623df1a
  