// ---------------------- a generator is a type of iterator has a .next() method returning { value, done } ------------------

someIterator.next() // { value: 'something', done: false }
someIterator.next() // { value: 'anotherThing', done: false }
someIterator.next() // { value: undefined, done: true }

function* genFunction() {
    yield "hello world";
}

let genObject = genFunction();
genObject.next(); // { value: "hello world!", done: false }
genObject.next(); // { value: undefined, done: true }



function* loggerator() {
    console.log('running...');
    yield 'paused';
    console.log('running again...');
    return 'stopped';
}

let logger = loggerator();
logger.next(); // running...
// { value: 'paused', done: false }
logger.next(); // running again...
// { value: 'stopped', done: true }




//------------------- generators are also iterable -------------

function* abcs() {
  yield 'a';
  yield 'b';
  yield 'c';
}

for (let letter of abcs()) {
  console.log(letter.toUpperCase());
}
// A
// B
// C

[...abcs()] // [ "a", "b", "c" ]



//  ----------------- custom iterables with @@iterator ------------------------

cardDeck = ({
    suits: ["♣️", "♦️", "♥️", "♠️"],
    court: ["J", "Q", "K", "A"],
    [Symbol.iterator]: function* () {
      for (let suit of this.suits) {
        for (let i = 2; i <= 10; i++) yield suit + i;
        for (let c of this.court) yield suit + c;
      }
    }
});

[...cardDeck] // array of 52 cards 


// ------------------------ lazy evaluation & infinite sequences -------------------------

function* take(n, iterable) {
    for (let item of iterable) {
      if (n <= 0) return;
      n--;
      yield item;
    }
}

function* infinityAndBeyond() {
    let i = 1;
    while (true) {
      yield i++;
    }
}

taken = [...take(5, infinityAndBeyond())] // [1,2,3,4,5]


function* map(iterable, mapFn) {
    for (let item of iterable) {
      yield mapFn(item);
    }
}

squares = [
    ...take(
      9,
      map(infinityAndBeyond(), (x) => x * x) 
    )
] // [1, 4, 9, 16, 25, 36, 49, 64, 81]
 



// ---------------------------- recursive iteration with yield* -----------------------

function binaryTreeNode(value) {
    let node = { value };
    node[Symbol.iterator] = function* depthFirst() {
      yield node.value;
      if (node.leftChild) yield* node.leftChild;
      if (node.rightChild) yield* node.rightChild;
    };
    return node;
}

// tree = {
const root = binaryTreeNode("root");
root.leftChild = binaryTreeNode("branch left");
root.rightChild = binaryTreeNode("branch right");
root.leftChild.leftChild = binaryTreeNode("leaf L1");
root.leftChild.rightChild = binaryTreeNode("leaf L2");
root.rightChild.leftChild = binaryTreeNode("leaf R1");
return root;
//   }

[...tree] //   ["root", "branch left", "leaf L1", "leaf L2", "branch right", "leaf R1"]



// ------------------------ async iteration with @@asyncIterator ---------------------


getSwapiPagerator = (endpoint) =>
  async function* () {
    let nextUrl = `https://swapi.dev/api/${endpoint}`;
    while (nextUrl) {
      const response = await fetch(nextUrl);
      const data = await response.json();
      nextUrl = data.next;
      yield* data.results;
    }
}

starWars = ({
    characters: {
      [Symbol.asyncIterator]: getSwapiPagerator("people")
    },
    planets: {
      [Symbol.asyncIterator]: getSwapiPagerator("planets")
    },
    ships: {
      [Symbol.asyncIterator]: getSwapiPagerator("starships")
    }
})

const results = [];  // [
    // 0: "CR90 corvette"
    // 1: "Star Destroyer"
    // 2: "Sentinel-class landing craft"
    // 3: "Death Star"
    // 4: "Millennium Falcon"
    // 5: "Y-wing"
    // 6: "X-wing"
    // 7: "TIE Advanced x1"
    // 8: "Executor"
    // 9: "Rebel transport"
    // 10: "Slave 1"
    // 11: "Imperial shuttle"
    // 12: "EF76 Nebulon-B escort frigate"
    // 13: "Calamari Cruiser"
    // 14: "A-wing"
    // 15: "B-wing"
    // 16: "Republic Cruiser"
    // 17: "Droid control ship"
    // 18: "Naboo fighter"
    // 19: "Naboo Royal Starship"
    // 20: "Scimitar"
    // 21: "J-type diplomatic barge"
    // 22: "AA-9 Coruscant freighter"
    // 23: "Jedi starfighter"
    // 24: "H-type Nubian yacht"
    // 25: "Republic Assault ship"
    // 26: "Solar Sailer"
    // 27: "Trade Federation cruiser"
    // 28: "Theta-class T-2c shuttle"
    // 29: "Republic attack cruiser"
    // 30: "Naboo star skiff"
    // 31: "Jedi Interceptor"
    // 32: "arc-170"
    // 33: "Banking clan frigte"
    // 34: "Belbullab-22 starfighter"
    // 35: "V-wing"]
for await (const page of starWars.ships) {
    console.log(page.name);
    results.push(page.name);
    yield results;
}






//// ------------------ generators are a great way to produce data but generators can also consume data -----------------
// yield is a two-way street
// pass in a value with .next(input)


function* listener() {
    console.log("listening...");
    while (true) {
      let msg = yield;
      console.log('heard:', msg);
    }
  }
  
  let l = listener();
  l.next('are you there?'); // listening...
  l.next('how about now?'); // heard: how about now?
  l.next('blah blah'); // heard: blah blah


//   ------------ generators remembers state, (state machines) ----------------------

function* bankAccount() {
    let balance = 0;
    while(balance >=0) {
        balance +=yield balance;
    }

    return 'bankrupt!';
}

let acct = bankAccount();
acct.next(); // {value: 0, done: false}
acct.next(50); // {value: 50, done: false}
acct.next(-10); // {value: 40, done: false}
acct.next(-60); // {value: "bankrupt!", done: true}


// ==> generators can yield control and get it back later 


// ---------- generators can function as "coroutines" passing control back and forth to "cooperate" ------------

let players = {};
let queue = [];

function send(name, msg) {
    console.log(msg);
    queue.push([name, msg]);
}

function run() {
    while (queue.length) {
      let [name, msg] = queue.shift();
      players[name].next(msg);
    }
}


function* knocker() {
    send('asker', 'knock knock');
    let question = yield;
    if (question !== "who's there?") return;
    send('asker', 'gene');
    question = yield;
    if (question !== "gene who?") return;
    send('asker', 'generator!');
}

function* asker() {
    let knock = yield;
    if (knock !== 'knock knock') return;
    send('knocker', "who's there?");
    let answer = yield;
    send('knocker', `${answer} who?`);
}

players.knocker = knocker();
players.asker = asker();
send('asker', 'asker get ready...'); // call first .next()
send('knocker', 'knocker go!'); // start the conversation
run();

// asker get ready... 
// knocker go!
// knock knock
// who's there? 
// gene
// gene who?
// generator!



//  ------------------- generators can outsmart javascript ----------------------

// => problem

function ping(n) {
    console.log('ping', n);
    return pong(n+1);
}
  
  function pong(n) {
    console.log('pong', n);
    return ping(n+1);
}

// ping(0); // InternalError: too much recursion // memory out of bound

//  => answer

function* ping() {
    let n;
    while (true) {
      n = yield;
      console.log('ping', n);
      send('pong', ++n);
    }
  }
  
function* pong() {
    let n;
    while (true) {
        n = yield;
        console.log('pong', n);
        send('ping', ++n);
    }
}
  
players.ping = ping();
send('ping', 'get ready');
players.pong = pong();
send('pong', 'get ready');
send('ping', 0);
// run();  .. no stack overflow error!!



// -------------- sum up ---------------
// -> custom iterables
//  -> lazy/infinite sequences
//  -> state machines
//  -> data processing
//  -> data streams

// -------------- generators can help you learn CS -----------

// -> control flow and anync
// -> coroutines and multitasking
// -> actor models
// -> system programming
// -> functional programming 




// [The Miracle of Generators](https://vimeo.com/232221648) by Bodil Stokke

// [Curious Course on Coroutines and Concurrency](http://www.dabeaz.com/coroutines/) ([video](https://youtu.be/Z_OAlIhXziw)) and [Generators: The Final Frontier](http://www.dabeaz.com/finalgenerator/) ([video](https://youtu.be/5-qadlG7tWo)) by David Beazley

// [Introduction to Generators in Observable](https://observablehq.com/@observablehq/introduction-to-generators) by Mike Bostock

// [Exploring ES6: Generators](https://exploringjs.com/es6/ch_generators.html#ch_generators_ref_3) by Axel Rauschmayer

// [You Don't Know JS: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) by Kyle Simpson

// [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) on MDN