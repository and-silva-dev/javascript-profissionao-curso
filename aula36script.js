// 'use strict'

// let n1 = [10,20,30]
// let n2 = [11,22,33,44,55]
// let n3 = [...n1, 66 , 77,88,99]
// const jogador1={nome:"Bruno",energia:100,vidas:3,magia:150}
// const jogador2={nome:"Davi",energia:100,vidas:3,velocidade:80}
// const jogador3={...jogador1,...jogador2}
// jogador3.velocidade = 100;
// jogador3.recuperacao = 70;

// console.log(jogador3);

// const obj1= document.getElementsByTagName('div');
// const obj2= [...document.getElementsByTagName('div')];
// const obj3= document.querySelectorAll('div');
// obj2.

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

//Funções parametrizadas

// function soma(p1, p2) {
//   const resultado = p1 + p2;
//   console.log(resultado);
// }
// soma(50, 55);

// console.log("----------------------------");

// function soma2(...valores) {
//   let sum = 0;
//   valores.forEach((i) => {
//     sum *= i;

//   });
//   return sum;
// }
// console.log(soma2(10, 30));

// const soma = (v1,v2)=>{
//   return v1 + v2;
// }

// const nome = n=>{return n};

// const cursos = ['HTML ','CSS' , 'JAVASCRIPT', 'PHP' , 'REACT'];
// let c = cursos.map((elemento) =>{

// return elemento;
// });
// console.log(c[0])

// let el = [...document.getElementsByTagName('div')];
// el.map((elemento)=>{
//   if(elemento.innerHTML === 'HTML'){
//     elemento.innerHTML = 'HTML5'
//   }
// console.log(elemento.innerHTML)
// })

// console.log(el)

// function aluno(nome , nota){
// this.nome = nome;
// this.nota = nota;

// this.dados_anonimo = function(){
//   setTimeout(()=>{
//     console.log(this.nome);
//     console.log(this.nota);
//   },2000)
// }
// }

// const aluno1 = new aluno('anderson' , 10)
// aluno1.dados_anonimo();

// const dc1 = document.getElementById('c1')
// // console.log(dc1)
// const dc2 = document.getElementById('c2')
// // console.log(dc2)
// const dc3 = document.getElementById('c3')
// // console.log(dc3)
// const dc4 = document.getElementById('c4')
// // console.log(dc4)
// const dc5 = document.getElementById('c5')
// // console.log(dc5)
// const dc6 = document.getElementById('c6')
// // console.log(dc6)

// const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

// const colecaoHTML = [...document.getElementsByTagName('div')];

// colecaoHTML.map((elemento)=>{
//   console.log(elemento)
// })

// console.log(arrayElementos)
// console.log(colecaoHTML)

// const mouse = (elemento,index) => {
//   elemento.classList.toggle('cor');
//   console.log(index)
// };

// arrayElementos.map((elemento , index) => {
//   elemento.addEventListener('click', () => mouse(elemento,index));

// });

// const cursosTodos = [...document.getElementsByClassName("curso")];
// const cursosC1 = [...document.getElementsByClassName("c1")];
// const cursosC2 = [...document.getElementsByClassName("c2")];
// const cursoEspecial = document.getElementsByClassName("curso")[2];
// console.log(cursosTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial)

// cursosTodos.map((el) => {
//   el.classList.add("destaque");
// });
// const clicar = (evento , index) => {

//   evento.classList.toggle("destaque");
//   console.log(evento,index);
// };

// cursosTodos.map((el , index) => {
//   el.addEventListener("click", ()=> clicar(el , index));
// });

// const cursosTodos = [...document.getElementsByTagName("div")];
// const cursosC1 = [...document.getElementsByClassName("c1")];
// const cursosC2 = [...document.getElementsByClassName("c2")];
// const cursoEspecial = document.getElementById("c1");

// const query_divTodas = [...document.querySelectorAll("div , p")];
// const query_cursosTodos = [...document.querySelectorAll(".curso  p")];
// const query_cursosC1 = [...document.querySelectorAll(".c1")];
// const query_cursosC2 = [...document.querySelectorAll(".c2")];
// const query_cursoEspecial = document.querySelectorAll("#c1");

// console.log(query_divTodas);
// console.log(query_cursosTodos);
// console.log(query_cursosC1);
// console.log(query_cursosC2);
// console.log(query_cursoEspecial);
// console.log(cursosTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial)

// cursosTodos.map((el) => {
//   el.classList.add("destaque");
// });
// const c1 = document.querySelector("#c1");
// const curso = [...document.querySelectorAll(".curso")];

// curso.map((el)=>{
//   el.addEventListener("click",(evt)=>{
//     const el = evt.target;
//     el.classList.toggle('destaque')
//     console.log(el.innerHTML + " foi clicado")
//   })
// })

// const caixa1 = document.querySelector("#caixa1");
// const caixa2 = document.querySelector("#caixa2");
// const btn = document.querySelector("#btn_transferir ");
// const todosCursos = [...document.querySelectorAll(".curso")];
// const btnDesfazer = document.getElementById("btn_desfazer");

// todosCursos.map((el) => {
//   el.addEventListener("click", (evt) => {
//     const curso = evt.target;
//     // console.log(curso)
//     curso.classList.toggle("selecionado");
//   });
// });
// /////////////////////////////////////////////
// btn.addEventListener("click", () => {
//   const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
//   const cursosNaoSelecionados = [
//     ...document.querySelectorAll(".curso:not(.selecionado)"),
//   ];
//   const ativar = document.querySelector('.botao-desfazer ')
//   ativar.classList.remove('botao-desfazer')
//   ativar.classList.add('ativou')
//   console.log('ativou')
//   console.log(cursosNaoSelecionados);
//   cursosSelecionados.map((el) => {
//     caixa2.appendChild(el);
//   });
//   // cursosNaoSelecionados.map((el) => {
//   //   caixa1.appendChild(el);
//   // });
// });
// ///////////////////////////////////////////
// btn_desfazer.addEventListener("click", () => {
//   const cursosNaoSelecionados = [
//     ...document.querySelectorAll(".curso:not(.selecionado)"),
//   ];
//   const ativar = document.querySelector('.botao-desfazer ')
//   if(ativar !== null){
//   ativar.classList.remove('botao-desfazer')
//   ativar.classList.add('.ativou')
//   } 
//   cursosNaoSelecionados.map((el) => {
//     caixa1.appendChild(el);
//   });
// });

const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_transferir ");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el)=>{
  el.addEventListener('click', (evt)=>{
    const curso = evt.target;
    curso.classList.toggle('selecionado');
  })
})


btn.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];
cursosSelecionados.map((el)=>{
  caixa2.appendChild(el)
})
cursosNaoSelecionados.map((el)=>{
  caixa1.appendChild(el)
})

});

