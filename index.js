const typeMenu = document.getElementById("type-menu");
const menuContainer = document.getElementById("menu-container");

// JS list functions - map, filter
typeMenu.innerHTML = "";

let types = ["all"];

foods.map(function(food) {
    if(!types.includes(food.type)) {
        types.push(food.type);
    }
})

console.log(types)

types.map(function(type) {
    let elem = `<button class="btn type">${type}</button>`;
    typeMenu.innerHTML += elem;
})

showAllFoods();

function showAllFoods() {
    menuContainer.innerHTML = "";

    foods.map(function(food) {
        let elem = `
        <div class="menu-item">
            <img src="${food.image}" alt="">
            <div class="item-data">
                <h3 class="name">${food.name}</h3>
                <p class="desc">${food.description}</p>    
                <h4 class="price">$${food.price}</h4>
                <div class="type">${food.type}</div>
            </div>
        </div>`;
        menuContainer.innerHTML += elem;
    })
}

function filterFoods(category) {
    menuContainer.innerHTML = "";
    foods.filter(function(food){
        if(food.type == category) {
            let elem = `
            <div class="menu-item">
                <img src="${food.image}" alt="">
                <div class="item-data">
                    <h3 class="name">${food.name}</h3>
                    <p class="desc">${food.description}</p>    
                    <h4 class="price">$${food.price}</h4>
                    <div class="type">${food.type}</div>
                </div>
            </div>`;
            menuContainer.innerHTML += elem;
        }
    })
} 

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(btn.textContent != "all") {
            filterFoods(btn.textContent);
        } else{
            showAllFoods();
        }
    })
})


// UI/UX, DB, FE, BE