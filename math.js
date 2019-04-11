const Math = {};
function add(x1, x2){
    return x1+x2;
}
function substract(x1, x2){
    return x1-x2;
}
function multiply(x1, x2){
    return x1*x2;
}
function divide(x1, x2){
    if(x2==0){
        console.log("no se puede dividir");
    }
    else{
        return x1/x2;
    }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
module.exports = Math;
/*function hello(name){
    console.log("hola", name);
}
module.exports = hello;

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/