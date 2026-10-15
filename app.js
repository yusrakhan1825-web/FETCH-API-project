const loader = document.querySelector(".loader")
console.log(loader)

function hideloader(){
    loader.className = "hide"
}


const finalCarts = []


async function getData(){
    let response = await fetch(`https://dummyjson.com/carts`)
    let data = await response.json()
    console.log(data.carts)
    const carts = data.carts

    for(let i = 0;i<carts.length;i++){
        console.log(carts[i].products)
        finalCarts.push(...carts[i].products)
    }
}
getData();

setTimeout(() => {
    hideloader()
    document.querySelector("#main")
    for(let i = 0;i<finalCarts.length;i++){
        console.log(finalCarts[i])
        let cart = finalCarts[i]
        main.innerHTML += `<div class="card text-center border shadow " style="width: 25rem;">
  <img src=${cart.thumbnail} class="card-img-top" alt="image">
  <div class="card-body ">
    <h5 class="card-title">${cart.title}</h5>
    <p class="card-text">${cart.price}</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>`
}
},2000);