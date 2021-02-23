// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// comienza tu primera prueba
test('convertir 10 dolares a yenes siendo el resultado 1065.83', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromDollarToYen(10);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(1065.8333333333335);
});