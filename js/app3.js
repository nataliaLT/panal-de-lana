// pedido de producto

let pedidos = []

//Class
class PedidoOvillos{
    constructor(composicion, color, grosor) {
        this.composicion = composicion;
        this.color = color;
        this.grosor=grosor;
    }
}

//funciones
//funcion para realizar pedido de ovillos
function acrilico() {
    let color = prompt('Escriba el color: \n 1-Rojo \n 2-Azul \n 3-Negro ').toLocaleLowerCase();
    let grosor = prompt('Escriba el grosor disponible:\n 1-Fino \n 2-Medio \n 3-Abultado').toLocaleLowerCase();
    const pedidoFinal = 'Su pedido es un ovillo de ' + ' color ' + color + ' y grosor ' + grosor;
    const pedidoOvillos = new PedidoOvillos('acrilico', color, grosor);
    pedidos.push(pedidoOvillos)
    console.log(pedidos)
    alert(pedidoFinal);
}

function lana() {
    let color = prompt('Escriba el color: \n 1-Rojo \n 2-Azul \n 3-Negro ').toLocaleLowerCase();
    let grosor = prompt('Escriba el grosor disponible:\n 1-Fino \n 2-Medio \n 3-Abultado').toLocaleLowerCase();
    const pedidoFinal = 'Su pedido es un ovillo de ' + ' color ' + color + ' y grosor ' + grosor;
    const pedidoOvillos = new PedidoOvillos('lana', color, grosor);
    pedidos.push(pedidoOvillos)
    console.log(pedidos)
    alert(pedidoFinal);
}

function bambu() {
    let color = prompt('Escriba el color: \n 1-Rojo \n 2-Azul \n 3-Negro ').toLocaleLowerCase();
    let grosor = prompt('Escriba el grosor disponible:\n 1-Fino \n 2-Medio \n 3-Abultado').toLocaleLowerCase();
    const pedidoFinal = 'Su pedido es un ovillo de ' + ' color ' + color + ' y grosor ' + grosor;
    const pedidoOvillos = new PedidoOvillos('bambu', color, grosor);
    pedidos.push(pedidoOvillos)
    console.log(pedidos)
    alert(pedidoFinal);
}

function algodon() {
    let color = prompt('Escriba el color: \n 1-Rojo \n 2-Azul \n 3-Negro ').toLocaleLowerCase();
    let grosor = prompt('Escriba el grosor disponible:\n 1-Fino \n 2-Medio \n 3-Abultado').toLocaleLowerCase();
    const pedidoFinal = 'Su pedido es un ovillo de ' + ' color ' + color + ' y grosor ' + grosor;
    const pedidoOvillos = new PedidoOvillos('algodon', color, grosor);
    pedidos.push(pedidoOvillos)
    console.log(pedidos)
    alert(pedidoFinal);
}

function verPedidos () {
    const ovillo = prompt('Ingresa la composición que deseas filtrar: \n acrílico \n lana \n bambú \n algodón');
    const filtroDePedidos = pedidos.filter((elemento)=> {
       return elemento.ovillo === ovillo
    });

    filtroDePedidos.forEach(pedidoOvillos => {
        console.log('hola')
        //return element.color + element.grosor 
    });
}
let producto = parseInt(prompt('Elige tus ovillos: \n 1-Acrílico \n 2-Lana \n 3-Bambú \n 4-Algodón \n 5-Ver pedido \n 6-Salir'));
while (producto !== 7  ) {
    if(producto === 1 ) {
        acrilico();

    }else if(producto === 2 ) {
        lana();

    }else if (producto === 3){
        bambu()

    }else if(producto === 4) {
        algodon()

    }else if(producto === 5) {
        verPedidos()

    }else if(producto=== 6) {
        alert('Salir')
        break;
    }

    producto = parseInt(prompt('Elige tus ovillos: \n 1-Acrílico \n 2-Lana \n 3-Bambú \n 4-Algodón \n 5-Ver pedido \n 6-Salir'));
}