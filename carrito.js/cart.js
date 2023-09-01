//Variable
let allConteinerCart = document.querySelector('.Productos')

//funcion
loadEventListeners();
function loadEventListeners(){
    allConteinerCart.addEventListener('click', addProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')){
            console.log(e.target)
    }

}

document.log(querySelector)