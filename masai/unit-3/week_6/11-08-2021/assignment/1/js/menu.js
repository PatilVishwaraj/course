// 
console.log('hi')
let menu_list = fetch("https:www.themealdb.com/api/json/v1/1/search.php?f=a")

menu_list.then(res=>res.json())
console.log(res.json)
