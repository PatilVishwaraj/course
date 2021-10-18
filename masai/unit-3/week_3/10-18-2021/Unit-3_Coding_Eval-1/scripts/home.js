
 async function getNews() {
    try {
        let newsDisplay = document.getElementById("mid")
        let search = document.getElementById("search_box").value
        let res = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-09-18&sortBy=publishedAt&apiKey=2c731ae69c974625842c83244e133b45`)
        let data = res.json()
        let newdata = data.PromiseResult
        // console.log(Object.keys(data))
        console.log(data)
        console.log(articles[0])
        
    }
    catch {
        alert("error", 2000)
    }
}
