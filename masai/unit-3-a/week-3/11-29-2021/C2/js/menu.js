search()
function search() {

    searchFood()
    async function searchFood() {
        let query = document.getElementById('Input_search').value
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
        if (query=="") {
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
        } else {
            let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        }
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        displayFood(data)
    }

    function displayFood(data) {
        let meal = data.meals
        let display = document.getElementById('List_display')
        display.innerHTML = null
        meal.forEach(el => {
            let info = document.createElement('div')
            info.className = "info"
            let name = document.createElement('h2')
            name.innerText = el.strMeal
            let addbtn = document.createElement('button')
            addbtn.className = "addbtn"
            addbtn.innerText = "Add to Cart"
            let image = document.createElement('img')
            image.src = el.strMealThumb
            let list_card = document.createElement('div')
            list_card.className = "list_card"
            info.append(name, addbtn)
            list_card.append(info, image)
            display.append(list_card)
        });
    }        
    
}
function addToCart() {
    
}