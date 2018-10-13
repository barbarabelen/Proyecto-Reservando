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
        let sumarCalificaciones = 0;
        //tengo que guardar el for en la variable promedio
        function promedio() {
            for (let i = 0; i < calificacionesPorDefault.length; i++) {
                let totalDeCalificaciones = sumarCalificaciones += calificacionesPorDefault[i];
                totalDeCalificaciones / calificacionesPorDefault.length;
            }
        }

        expect(calificacionesPorDefault.obtenerPuntuacion()).to.equal(promedio()); //no sé si apliqué bien el promedio() para la comparación
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