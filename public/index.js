'use strict'

console.log("loading script.js file")

window.onload = function() {
    console.log("window loaded")
    getInfo()
}

let getInfo = function() {
    console.log("Inside the post method, about to make a fetch request")
    let fetchPromise = fetch('https://my-json-server.typicode.com/jubs16/Products/Products')

    let dataPromise = fetchPromise.then(function(response) {
        console.log(response)
        return response.json()
    })

    dataPromise.then(function(data) {
        console.log(data)
        processInfo(data)
    })
    console.log("Request sent off...")
}

function processInfo(getInfo) {

    let postsUl = document.getElementById("posts")

    postsUl.innerText = getInfo.value
}
