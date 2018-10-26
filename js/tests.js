//test de la función reservarHorario(horario)

let expect = chai.expect;

describe('Horario reservado', function () {
    it('Se elimina del array', function () {
        //elijo primer restaurante para testear
        const testHorarios = listado.restaurantes[0];
        //se reserva y elimina del array un horario
        testHorarios.reservarHorario('13:00');

        expect(testHorarios.horarios[0]).to.equal('15:30');
        expect(testHorarios.horarios[1]).to.equal('18:00');
        expect(testHorarios.horarios.length).to.equal(2);
    })
})

//test de la función obtenerPuntuacion()

describe('Puntuaciones', function () {
    it('Se ejecuta el promedio correctamente', function () {
        let calificacionesPorDefault = listado.restaurantes[1].calificaciones;

        let promedio = calificacionesPorDefault.reduce(function (a, b) {
            return a + b
        }) / calificacionesPorDefault.length;

        expect(calificacionesPorDefault.obtenerPuntuacion()).to.equal(promedio); //me tira que no es función el obtenerpuntuacion()
    })

    it('Deben dar 0 si no hay calificación', function () {
        let listadoDeCalificaciones = listado.restaurantes[1].calificaciones;
        //tengo que recorrer el listado e ir sacando calificaciones para que de 0
        for (let i = listadoDeCalificaciones.length; i > 0; i--) {
            listadoDeCalificaciones.pop();
        }

        expect(listadoDeCalificaciones.obtenerPuntuacion()).to.equal(0);
    })
})

//test función calificar()

describe('La calificación', function () {
    it('Debe ser en números', function () {
        let calificacionEsperada = 5;
        expect(calificacionEsperada).to.be.a('number');
    })

    it('Debe ser mayor a 0 y menor o igual a 10', function () {
        //cómo meto el >0 && <=10 ???
        let testCalificaciones = listado.restaurantes[3].calificaciones
        let validacionCalificaciones = function(){
            if (testCalificaciones > 0 && testCalificaciones <= 10) {
             return true   
            }
        }
       // expect(testCalificaciones.calificar())to.equal(validacionCalificaciones);
    })

    it('Debe aumentar el largo del array', function () {
        let calificacionesDadas = listado.restaurantes[2].calificaciones;
        let arrayDeCalificaciones = calificacionesDadas.length;
        let calificar = Restaurant.prototype.calificar(); //intenté escribir el código así porque me tiraba que calificar no existía
        //agrego una calificacion al arrayDeCalificaciones
        calificacionesDadas.calificar(8);
        //creo una variable con el nuevo array
        let nuevoArrayDeCalificaciones = calificacionesDadas;

        //comparo el array nuevo con el array anterior+1
        expect(nuevoArrayDeCalificaciones).to.equal(arrayDeCalificaciones + 1);
    })
})

//test función buscarRestaurante(id)

describe('Búsqueda de un restaurante', function () {
    it('Debe corresponder el id con el nombre del restaurante', function () {
        const idDelRestaurante = listado.restaurantes[4].id;
    
        //comparo el resultado con el número del id
        expect(idDelRestaurante).to.equal(5);
    })
})

//test función obtenerRestaurantes()

describe('La función obtenerRestaurantes()', function(){
    it('Debe retornar un restaurante según los filtros predeterminados', function(){
        let restauranteFiltrado = listado.obtenerRestaurantes('Asiática', 'Berlín', '12:00');
        
        //comparo el resultado con el nombre del restaurante
        expect(restauranteFiltrado[0].nombre).to.eql("Jolly");
    })
})