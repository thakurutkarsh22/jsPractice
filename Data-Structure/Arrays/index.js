const items = [
    {name: 'bike', price: 100},
    {name: 'Tv', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

// filter

const filteredItems = items.filter((items)=>{
    return items.price<=100
})

// map : convert an array and return an new Array

const mapItems = items.map((items)=>{
    return items.name;
})

// find : find a single object in an array;

const foundItem = items.find((item)=>{
    return items.price === 5;
});

// for each : just for iteration 

items.forEach((item)=>{
    console.log(item);
})

// some : so even if one is true it will return true for the whole array 

const hasInexpensiveitems = items.some((item)=>{
    return item.price <=100; 
})

// any : so every items has to fall under a condition if true then return true


const hasInexpensiveitems1 = items.every((item)=>{
    return item.price <=10000; 
})


// reduce 

const total = items.reduce((currentTotal, item)=>{
    return item.price + currentTotal;
},0)


// includes return if the val is inside the array or not. 

const arrNo = [1,2,3,45];
arrNo.includes(2); // true
arrNo.includes(7); // false 
