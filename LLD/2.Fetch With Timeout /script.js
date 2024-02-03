// create a fetch method with Timeout in JavaScript that will terminate the API call, if it is fulfilled in the given duration.

const fetchWithTimeoutResponse = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerid = null;

    fetch(url, { signal })
      .then((resp) => {
        resp
          .json()
          .then((e) => {
            clearTimeout(timerid);
            resolve(e);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });

    timerid = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
    }, duration);
  });
};

fetchWithTimeoutResponse("https://jsonplaceholder.typicode.com/todos/1", 100)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });

// Aborted
// error

// change the timer to 2000 ms response will change

// The above solution looks nice but it isnt

function myFetchWithTimeout(url, duration) {
  const abortController = new AbortController();
  const signal = abortController.signal;
  let timerID;

  const promise = new Promise((res, rej) => {
    timerID = setTimeout(() => {
      // in here we have to abort....
      console.log("Abortedddd!!! timeouted");
      abortController.abort();
    }, duration);

    fetch(url, { signal })
      .catch((error) => {
        rej(error);
      })
      .then((response) => {
        // if I am here it means set TImeout has not worked. and I have to de-register it
        clearTimeout(timerID);
        res(response);
      });
  });

  return promise;
}

myFetchWithTimeout("someUrl", 5000).then((response) => {
  console.log(response);
});
