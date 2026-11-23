// funcion que muestra el detalle de cada queque
function verDetalle(nombre) {
    if (nombre == "volcan") {
        alert(`🌋 Volcán: sírvelo tibio para que el chocolate se derrita.`);
    }
    else if (nombre == "chocolate") {
        alert(`🍫 Chocolate: ideal para cumpleaños y reuniones.`);
    }
    else if (nombre == "marmoleado") {
        alert(`🤎 Marmoleado: perfecto para acompañar un café o un té.`);
    }
    else if (nombre == "vainilla") {
        alert(`🤍 Vainilla: suave y rico para toda la familia.`);
    }
    else if (nombre == "naranja") {
        alert(`🍊 Naranja: fresco y con un aroma delicioso.`);
    }
    else if (nombre == "coco") {
        alert(`🥥 Coco: dulce y con coco rallado por encima.`);
    }
}

// funcion que muestra un mensaje dinamico al pedir
function pedir(nombre) {
    alert(`¡Gracias por elegir ${nombre}! Haz tu pedido al 74507983 🍫`);
}
