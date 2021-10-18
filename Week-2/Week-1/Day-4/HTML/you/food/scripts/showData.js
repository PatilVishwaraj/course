async function getData(url) {
    try {

        let res = await fetch(url)
        let data = await res.json()
        return data.meals

    }
    catch (e) {

        console.log('e:', e)

    }
}


async function getData2(url){
    let res = await fetch(url)
    let data = await res.json()
    return data
}


function append(products, parent) {

    products.forEach(({ strMealThumb, strMeal, strCategory }) => {


        let div = document.createElement("div");
        div.id = "mainCont";

        let div2 = document.createElement("div");
        div2.id = "mainCont2";

        let img = document.createElement("img");
        img.src = strMealThumb

        let p = document.createElement("p");
        p.innerHTML = `<span>Receipe Name: </span>${strMeal}`

        let p2 = document.createElement("p");
        p2.innerHTML = `<span>Receipe Category: </span>${strCategory}`


        div2.append(p, p2);
        div.append(img, div2);
        parent.append(div);

    });

}


export {getData, append}


function displayData(data,parent){
    let meals = data.meals;
    let div = document.createElement("div");
    div.style.margin="20px 10px 0px 10px"


    meals.forEach(({strMeal,strMealThumb,strInstructions,strYoutube}) => {
        let title = document.createElement('h1')
    title.innerText = strMeal;
    title.style.marginBottom="20px"
    title.style.textAlign="center"

    let img = document.createElement('img')
    img.src = strMealThumb;
    img.id = "strMealThumb"
    img.style.float='left';
    img.style.width='300px';
    img.style.margin="0px 30px 20px 20px"

    let ins = document.createElement('h2')
    ins.innerText = "INSTRUCTIONS"
    
    let des = document.createElement('p')
    des.innerText = strInstructions;
    des.style.padding="10px 0px 20px 0px"
    des.style.margin="0px 0px 0px 30px"
    des.style.lineHeight="20px"
    let insDiv = document.createElement('div')
    insDiv.append(ins,des)
    

    let youtube = document.createElement('p')
    youtube.innerText = "for video of recipe: "
    let link = document.createElement('a')
    link.href = strYoutube;
    link.innerText = "ClickHere"
    youtube.style.margin="0px 0px 0px 30px"
    youtube.append(link)


    div.append(title,img,insDiv,youtube)
    parent.append(div);
    })

    
}

export {getData2,displayData}