//Relação dos elementos com o DOm parte 1
// const caixa1 = document.querySelector('#caixa1')
// const btn_c = [...document.querySelectorAll('.curso')]

// console.log(caixa1.firstChild)
// console.log(caixa1.children[0]);
// console.log(caixa1.lastChild)
// console.log(document.getRootNode())
// console.log(btn_c[0].getRootNode())

//Relação dos elementos com o DOm parte 2

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
console.log(caixa1)
console.log('------------------')
console.log(caixa1.hasChildNodes());
console.log(btn_c[0].hasChildNodes());
console.log(btn_c[0].hasChildNodes());
console.log(caixa1.children.length > 0 ?'Possui filhos': 'Não possui filhos')
console.log(caixa1.firstElementChild)
caixa1.firstElementChild.innerHTML = 'HTML5'

// if(btn_c[0].children.length > 0){
// 	console.log('Possui filhos')
// }else{
// 	console.log('Não possui filhos')
// }

if (btn_c.some((el) => {el.children.length >0})) {
	console.log('Possui filhos')
}else{
	console.log('Possui filhos')
}

// if (btn_c.some((el) => el.children.length > 0)) {
//     console.log('possui filho');
// } else {
//     console.log('não possui filho');
// }
