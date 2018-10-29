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
        let restauranteSeleccionado = listado.restaurantes[0];

        let promedio = restauranteSeleccionado.calificaciones.reduce(function (a, b) {
            return a + b
        }) / restauranteSeleccionado.calificaciones.length;

        expect(restauranteSeleccionado.obtenerPuntuacion()).to.equal(promedio); //funciona!!
    })

    it('Deben dar 0 si no hay calificación', function () {
        let restauranteSeleccionado = listado.restaurantes[0];
        //tengo que recorrer el listado e ir sacando calificaciones para que de 0
        for (let i = restauranteSeleccionado.calificaciones.length; i > 0; i--) {
            restauranteSeleccionado.calificaciones.pop();
        }

        expect(restauranteSeleccionado.obtenerPuntuacion()).to.equal(0);
    })
})

//test función calificar()

describe('La calificación', function () {
    it('Debe ser en números', function () {
        let calificacionEsperada = 5;
        expect(calificacionEsperada).to.be.a('number');
    })

    it('Debe ser mayor a 0 y menor o igual a 10', function () {
        //guardo el listado de calificaciones y compruebo que sean > a 0 y <= 10
        let testCalificaciones = listado.restaurantes[3].calificaciones
        let validacionCalificaciones = function () {
            if (testCalificaciones > 0 && testCalificaciones <= 10) {
                return testCalificaciones > 0 && testCalificaciones <= 10
            }
        }
        expect(testCalificaciones.calificar()).to.equal(validacionCalificaciones);
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

describe('La función obtenerRestaurantes()', function () {
    it('Debe retornar un restaurante según los filtros predeterminados', function () {
        let restauranteFiltrado = listado.obtenerRestaurantes('Asiática', 'Berlín', '12:00');

        //comparo el resultado con el nombre del restaurante
        expect(restauranteFiltrado[0].nombre).to.eql("Jolly");
    })
})