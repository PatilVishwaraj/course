async function getData(url){
    let res =await fetch(url);
    let data = await res.json();
    return data
}


function append(data, place){
    data.forEach(({strMeal,strMealThumb,strCategory}) => {
        let div = document.createElement('div');
        div.id = "product"
        let pname = document.createElement('p');
        let pprice = document.createElement('p');
        let img = document.createElement('img');

        img.src = strMealThumb;
        pname.innerText = strMeal;
        pprice.innerText = strCategory;

        div.append(img,pname,pprice);
        place.append(div);
    });
}

export {getData,append}