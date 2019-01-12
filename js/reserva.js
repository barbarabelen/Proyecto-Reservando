//constructor objeto reserva
const Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento){
    this.horario = horario,
    this.cantidadDePersonas = cantidadDePersonas,
    this.precioPorPersona = precioPorPersona,
    this.codigoDeDescuento = codigoDeDescuento
}

//lista de reservas
const listaDeReservas = [
    new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
    new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200"),
];

//función que calcula el precio base de la reserva
Reserva.prototype.precioBase = function(){
    this.cantidadDePersonas * this.precioPorPersona;
}

//función que calcula el precio final de la reserva
Reserva.prototype.precioFinal = function(){
    const precioBase = this.precioBase();
    const adicional = this.adicionales(precioBase);
    const descuento = this.descuentos(precioBase);
    return precioBase + adicional - descuento;
}

//función que calcula el adicional
Reserva.prototype.adicionales = function(precioBase){
    return this.adicionalesPorFinDeSemana(precioBase) + this.adicionalesPorHorario(precioBase);
}

Reserva.prototype.adicionalesPorFinDeSemana = function(precioBase){
    let diaDeSemana = this.horario.getDay();
    //adionional del 10% si es viernes, sábado o domingo
    if(diaDeSemana === 0 || diaDeSemana === 5 || diaDeSemana === 6){
        return precioBase * .10;
    };
    return 0;
}

Reserva.prototype.adicionalesPorHorario = function(precioBase){
    //adicional del 5% si es de 13 a 14hs o 20 a 21hs
    let horarioEspecialDia = this.horario.getHours() === 13 || this.horario.getHours() === 14;
    let horarioEspecialNoche = this.horario.getHours() === 20 || this.horario.getHours() === 21;
    if(horarioEspecialDia || horarioEspecialNoche){
        return precioBase * .05;
    };
    return 0;
}

//función que calcula el descuento
Reserva.prototype.descuentos = function(precioBase){
    return this.descuentosGrupales(precioBase) + this.descuentosPorCodigo(precioBase);
}

Reserva.prototype.descuentosGrupales = function(precioBase){
    let descuento = 0;
    //entre 4 y 6 personas hay un descuento del 5%, entre 7 y 8 un 10% y más de 8 personas un 15%
    if(this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6){
        descuento = .05;
    } else if(this.cantidadDePersonas >= 7 && this.cantidadDePersonas <=8){
        descuento = .10;
    } else if(this.cantidadDePersonas > 8){
        descuento = .15;
    }
    return precioBase * descuento;
}

Reserva.prototype.descuentosPorCodigo = function(precioBase){
    let descuento = 0;
    //códigos de descuento: DES15 15%, DES200 $200 y DES1 equivalente al precio de una persona
    if(this.codigoDeDescuento === 'DES15'){
        descuento = precioBase * .15;
    } else if(this.codigoDeDescuento === 'DES200'){
        descuento = 200;
    } else if(this.codigoDeDescuento === 'DES1'){
        descuento = this.precioPorPersona;
    }
    return descuento;
}

