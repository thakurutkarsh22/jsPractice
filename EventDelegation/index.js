// let category = document.querySelector("#category");

// category.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log("category parent clicked! via ");
//     if(e.target.tagName=="LI")
//         window.location.href = "/" + e.target.id;
// })
// 1st eample end 


// 2nd eample imput 


document.querySelector("#form").addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})