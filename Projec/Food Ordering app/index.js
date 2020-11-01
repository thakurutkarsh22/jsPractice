
const mainList = document.getElementById("mainList");
const input = document.getElementById("input");
const favourite = document.getElementById("favourite");

let allHotelsDataCopy = [];
const apiKey = "6c3ddb0666a05b0b0613302060828cbe";

let header = {
    method: 'GET',
    headers: {
        'user-key' : apiKey,
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
}

const fetchData = function () {
    let url = 'https://developers.zomato.com/api/v2.1/search';
    if(input.value && input.value.trim()){
        url+="?q=" +input.value;
    }
    console.log(url);
    fetch(url,header)
    .then(resp => resp.json())
    .then(data => {
        allHotelsDataCopy = JSON.parse(JSON.stringify(data)); // ... not working properly
        getCard(data.restaurants);
    });
}

const debouncer = function (fn, delay) {
    let time = null;
    return function() {
        let context = this;
        clearTimeout(time);
        time = setTimeout(() => {
            fn.apply(context);
        },delay);
    }
}

const search = debouncer(fetchData, 500);


const getCard = function(data) {
    let cardArr = new Array();

    data.forEach(element => {
        cardArr.push({
            id: element.restaurant.id,
            name: element.restaurant.name
        })
    });

    generateView(cardArr);

}

const generateView = function(data) {
    let favIconClass = 'fa-heart'
    mainList.innerHTML =  data.map(hotel => {
        return `
            <div class="col-md-3">
            <div class="card-body">
                ${hotel.name}
                <br>
                ${hotel.id}<br><p> hello </p>
                <a onclick="markFavourite(this, ${hotel.id})" class="${favIconClass}"><i class="fa fa-heart" ></i><a>
            </div>
            </div>
        `;
    } )
}

let favItem = [];

const markFavourite = function(context,id) {
    console.log("mark Fav!" + id)
    console.dir(context)
    context.classList.toggle("fa-fav");
    
    if(!context.classList.contains("fa-fav")){
        favItem.pop(id);
    }else
        favItem.push(id);

    window.localStorage.setItem("fav" ,JSON.stringify(favItem));
    

}

const getFavourite = function() {
    let fav = JSON.parse(window.localStorage.getItem("fav"));
    mainList.innerHTML = getCard(fav);
    console.log(fav);
}

// function seeAllFavouriteRestro() {
//     let allFavourite = JSON.parse(localStorage.getItem("fav"));
//     mainRow.innerHTML = generateView(allFavourite).join('');
//     errorMessageElement.innerText = (allFavourite.length == 0)? "No Favourite Selected Yet!!" : '';
// }

favourite.addEventListener('click',getFavourite);

fetchData();