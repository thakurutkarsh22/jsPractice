
// // async
// setTimeout(()=> {
//     console.log("Hi");
// },2000);

// setTimeout(()=> {
//     console.log("I");
// },2000);

// setTimeout(()=> {
//     console.log("am");
// },2000);

// setTimeout(()=> {
//     console.log("utkarsh");
// },2000);


// syncronous exapmle
// [1,2,3,4].forEach(()=>{
//     console.log(i);
// })

// async

const asyncForEach = function(array,cb) {
    array.forEach(()=>{
        setTimeout(cb,0);
    })
}

asyncForEach([1,2,3,4,5], (i)=>{
    console.log(i);
})