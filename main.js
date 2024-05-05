// const cartItems = document.querySelector("#cart-items"); 
// const btn = document.querySelector("#btn"); 

// btn.addEventListener(('click'),  () => {

//     async function fetchCartItem()
//     {
//         let response = await fetch("https://fakestoreapi.com/products/1", {
//           headers: { Accept: "application/json" },
//         });
//         let data = await response.json();
//         cartItems.textContent = data.description;
//     }
//     fetchCartItem();
// });


// image preview
let imgContainer = document.querySelector('img');
let file = document.querySelector('input[type="file"]');
file.addEventListener('change', (e) => {
    
    let url = URL.createObjectURL(file.files[0]);
    imgContainer.setAttribute('src', url);
    console.log(file.files);
});