const body = document.body;
const padre = body.children[1];
//Su primer hijo
console.log(padre.firstElementChild);
// Su tercer hijo
console.log(padre.children[2]);
// El siguiente hermano del tercer hijo
const tercerHijo = padre.children[2];
console.log(tercerHijo.nextElementSibling);
// Su último hijo
const ultimoHijo = padre.lastElementChild;
// Su padre
console.log(padre.parentNode);
// El padre del padre
const abuelo = padre.parentNode;
console.log(abuelo.parentNode);
// Su hermano anterior
console.log(padre.previousElementSibling);
//Las clases del último hijo
console.log(padre.lastElementChild.classList);
