const btnCarrito = document.querySelector('.btn-carrito');
const carroCompra = document.querySelector('.carro-compra');

const carroCompraWrapper = document.querySelector('.carro-compra .wrapper');
const btnVaciar = document.querySelector('.btn-vaciar');
const btnRealizarPedido = document.querySelector('.btn-realizar-pedido');

btnCarrito.addEventListener('click', function() {
    if(carroCompra.classList.contains('activo')) {
        carroCompra.classList.remove('activo');
    }else {
        carroCompra.classList.add('activo');
    }
});

/*console.log(btnVaciar);*/

/*********************PAGINA DE TIENDA***********************/
const contenedor = document.querySelector('.tienda-ver-mas .container');
const tarjeta = document.querySelectorAll('.tarjeta');
tarjeta.forEach((element) => {
    console.log(element)
});


/*
const btnAgregarAlCarrito = document.querySelectorAll('.carrito');
btnAgregarAlCarrito.forEach((element)=> {
    element.addEventListener('click',()=> {
        const card = document.createElement('div');
  
        card.innerHTML = `
        <figure class="imagen"><img src="../imagenes/mandalas.jpg" alt="" srcset=""></figure>
        <div class="data">
        <div class="producto">Posavasos</div>
        <div class="precio">$10.000</div>
        <div class="btn-precio">
            <button>-</button>
            <div class="cantidad">1</div>
            <button>+</button>
        </div>
        </div>
        `;

        carroCompraWrapper.appendChild(card);
        document.getElementsByName('card').appendChild(card);
        console.log(element)
    });
});

/*btnAgregarAlCarrito.addEventListener('click', function() {
    console.log('entre');
   /* const card = document.createElement('div');
    card.innerHTML = `
    <figure class="imagen"><img src="../imagenes/mandalas.jpg" alt="" srcset=""></figure>
    <div class="data">
      <div class="producto">Posavasos</div>
      <div class="precio">$10.000</div>
      <div class="btn-precio">
        <button>-</button>
        <div class="cantidad">1</div>
        <button>+</button>
      </div>
    </div>
    `;
    carroCompraWrapper.appendChild(card);
});*/