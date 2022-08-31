let allMaquinas = []
console.log(allMaquinas)
const maquinasContainer = document.querySelector('#maquinasContainer')

/// variables del carrito
let products = [];
let total = 0;

//// funcion para el dom
const agregarMaquinas = () => {
    allMaquinas.forEach((maquinas) => {
        const maquinasDiv = document.createElement('div')
        maquinasDiv.classList.add('product-container')
        maquinasDiv.innerHTML = `
        <h3>${maquinas.name}</h3>
            <img src="${maquinas.img}" />
            <h1>$${maquinas.precio}</h1>
            <button class="buttonAdd" onclick="add('${maquinas.name}',${maquinas.precio})">Agregar</button>`
            maquinasContainer.append (maquinasDiv)    
           
            })
    }


//// funcion carrito

function add(product, price) {
    console.log(product, price);
    products.push(product);
    localStorage.setItem ('add', JSON.stringify (add))
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pagar() {
    window.alert(products.join(", \n"));
}

/// funcion get

const getAllMaquinas = async () => {
    const response = await fetch ('../js/datos.json')
    const data = await response.json()
    allMaquinas = data
    agregarMaquinas()
}
getAllMaquinas()

///////////////////////formulario
let btnSubmit = document.querySelector ('#btnSubmit').addEventListener ('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu registro fue correcto',
        showConfirmButton: false,
        timer: 1500
      })
})
let formulario = document.getElementById('form')

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let edad = document.getElementById('edad')
let email = document.getElementById('Email')

const arrayPersonas = [];

formulario.onsubmit = (e) => {
    e.preventDefault();

    let persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        email: email.value
    }
    arrayPersonas.push(persona);
    vaciarFormulario();

    console.log(arrayPersonas);


}

const vaciarFormulario = () => {
    nombre.value = '';
    apellido.value = '';
    edad.value = '';
    email.value = '';
}