// taken from 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
}


module.exports = {
    randomInt
}