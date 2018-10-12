//test de la función reservarHorario(horario)

let expect = chai.expect;

describe ('Horario reservado', function(){
    it('Se elimina del array', function(){
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

