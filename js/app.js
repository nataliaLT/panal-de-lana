// pedido de producto
let producto = parseInt(prompt('Escriba su producto: \n 1-Ovillos \n 2-Patrones \n 3-Salir'));


while (producto !== 4  ) {
    if(producto === 1 ) {
        ovillos();
    }else if(producto === 2 ) {
        patrones();

    }else if (producto === 3){
        alert('salir')
        break
    }

    producto = parseInt(prompt("Escriba un producto :\n 1-Ovillos \n 2-Patrones  \n 3-Salir"));
}
//Class
class PedidoOvillos{
    constructor(composicion, color, grosor) {
        this.composicion = composicion;
        this.color = color;
        this.grosor=grosor;
    }
}

class PedidoPatrones {
    constructor(tipoDeModelo, tipoDePatrones) {
        this.tipoDeModelo = tipoDeModelo;
        this.tipoDePatrones = tipoDePatrones;
    }
}
//funciones
//funcion para realizar pedido de ovillos
function ovillos() {
    const composicion = prompt('Escriba la composición de su ovillo: \n 1- Lana \n 2-Acrílico \n 3-Bambú \n 4-Algodón ').toLocaleLowerCase();
    let color = prompt('Escriba el color: \n 1-Rojo \n 2-Azul \n 3-Negro ').toLocaleLowerCase();
    let grosor = prompt('Escriba el grosor disponible:\n 1-Fino \n 2-Medio \n 3-Abultado').toLocaleLowerCase();
    const pedidoFinal = 'Su pedido es un ovillo de ' + composicion + ' color ' + color + ' y grosor ' + grosor;
    const pedidoOvillos = new PedidoOvillos(composicion, color, grosor);
    console.log(pedidoOvillos)
    alert(pedidoFinal);
}


//funcion para realizar pedido de patrones
function patrones() {
    let tipoDePatrones = prompt('Escriba el patron que desea:\n 1- Adulto \n 2-Niño \n 3-Bebe').toLocaleLowerCase();
    let tipoDeModelo = prompt('Escriba el tipo de modelo:\n 1-Sweater \n 2-Cardigan \n 3-Gorro').toLocaleLowerCase();
    const pedidoFinal2 ='El patron que escogiste es un '+ tipoDeModelo + ' de ' + tipoDePatrones;
    alert(pedidoFinal2)
}

//Funcion para mostrar los pedidos finales
function pedido() {

}