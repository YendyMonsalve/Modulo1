//for(var inicio = 9; inicio >= 0 ; inicio--){
//    console.log(inicio);
//}

var NotasPepito = [0, 5, 5, 4, 3, 2, 3, 5, 2];
var sumaNotas= 0;
var notaBaja = 0;
var notaAlta = -1;

for(var indice = 0; NotasPepito.length >= NotasPepito[indice]; indice++){
    sumaNotas += NotasPepito[indice];
}

var promedio = sumaNotas/NotasPepito.length;

//console.log(promedio);

for(indice = 0; NotasPepito.length >= NotasPepito[indice]; indice++){
    if(notaBaja >= NotasPepito[indice]){
        notaBaja = NotasPepito[indice] ;
    }
}
//console.log(notaBaja);

for(indice = 0; NotasPepito.length < NotasPepito[indice]; indice++){
    if(notaAlta < NotasPepito[indice]){
        notaAlta = NotasPepito[indice];
    }
}
//console.log(notaAlta);

var arregloTresDimensiones = [[1,2],[4,5]];

var indice1 = 0;
var indice2 = 1;
var suma = 0;

for(indice1; arregloTresDimensiones.length >indice1; indice1++){
    for(indice2; arregloTresDimensiones.length > indice2; indice2++){
        suma = arregloTresDimensiones[indice1]+[indice2];
    }
}
//console.log(suma);

var personaComplicada = {
    nombre: 'Pepito',
    apellido: 'Perez',
    edad: 32,
    informacionAdicional: [{
        datosDireccion: {
            ciudad: 'Bogota',
            barrio: 'Suba',
            direccion: 'Transveral 99 # 86 - 35'
        },
        escolaridad: [{
            primaria: [{
                nombreColegio: 'Liceo Buen Infante',
                ciudad: 'Bogota'
            },
            {
                nombreColegio: 'Colegio Santander',
                ciudad: 'Bucaramanga'
            }],
            secundaria: {
                nombreColegio: 'Liceo Buen Martin',
                ciudad: 'Bogota'
            }
        }]
    }]
}
var llamarInfoAdi = personaComplicada.informacionAdicional;
var llamarEscolaridad = llamarInfoAdi[1];
var llamarPrimaria = llamarEscolaridad[0];
var llamarColegio = llamarPrimaria[1];
console.log(llamarInfoAdi);