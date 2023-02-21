const typeMenu = document.getElementById("type-menu");
const menuContainer = document.getElementById("menu-container");

typeMenu.innerHTML = "";
menuContainer.innerHTML = "";

let types = [];

foods.map((food)=>{
    if(!types.includes(food.type)) {
        types.push(food.type);
    }
})

types.map((type)=>{
    let elem = `<button class="btn type">${type}</button>`
    typeMenu.innerHTML += elem;
})

const btns = document.querySelectorAll(".btn");

foods.map((food)=>{
    let elem = 
    `<div class="menu-item">
        <img src="${food.image}" alt="">
        <div class="item-data">
            <h3 class="name">${food.name}</h3>
            <p class="desc">${food.description}</p>
            <h4 class="price">$${food.price}</h4>
            <div class="type">${food.type}</div>
        </div>
    </div>`
    menuContainer.innerHTML += elem;
})

function filterFoods(category) {
    console.log(category)
    menuContainer.innerHTML = "";
    foods.map((food)=>{
        if(food.type == category) {
            let elem = 
            `<div class="menu-item">
                <img src="${food.image}" alt="">
                <div class="item-data">
                    <h3 class="name">${food.name}</h3>
                    <p class="desc">${food.description}</p>
                    <h4 class="price">$${food.price}</h4>
                    <div class="type">${food.type}</div>
                </div>
            </div>`
            menuContainer.innerHTML += elem;
        }
    });
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        filterFoods(btn.textContent);
    });
})