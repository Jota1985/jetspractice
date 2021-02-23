// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

const fromDollarToEuro = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    return valueInEuro
}

const fromEuroToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * 127.9;
    //return the doller value
    return valueInYen;
}

const fromDollarToYen = function(valueInDollar){

    let euro = fromDollarToEuro(valueInDollar);
    let yen = fromEuroToYen(euro);
    return yen;
}

const fromYenToPound = function(valueInYen){
    return valueInYen / 127.9 * 0.8;
}

console.log (fromYenToPound(10));
//console.log (fromDollarToYen(3.5));


//console.log (fromEuroToDollar(3.5));
//console.log (fromDollarToEuro(4.2));
//console.log (fromEuroToYen(2));

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b;
}
// solo un registro en consola para nosotros.
//console.log (sum(7,3));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen };