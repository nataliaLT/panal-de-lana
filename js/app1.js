const btnCarrito = document.querySelector('.btn-carrito');
const carroCompra = document.querySelector('.carro-compra');
const btnAgregarAlCarrito = document.querySelector('.carrito');
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

console.log(btnVaciar);

