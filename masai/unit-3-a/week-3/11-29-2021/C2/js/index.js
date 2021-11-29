search()
function search() {

    async function searchFood() {
        let query = document.getElementById('Input_search').value
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        // let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        displayFood(data)
    }
    searchFood()

    function displayFood(data) {
        let meal = data.meals
        let display = document.getElementById('Display')
        display.innerHTML = null
        meal.forEach(el => {
            console.log(el.strMeal)
            console.log(el.strMealThumb)
            let name = document.createElement('h2')
            name.innerText = el.strMeal

            let image = document.createElement('img')
            image.src = el.strMealThumb
            let card = document.createElement('div')
            card.className = "card"
            card.append(name, image)
            display.append(card)
        });
    }        
    
}