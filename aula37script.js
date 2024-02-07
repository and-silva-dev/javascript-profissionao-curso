//Parando progação de evento

const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')

caixa1.addEventListener('click',(evt)=>{

	// console.log('clicou')
	// console.log(evt)

})

btn_c1.addEventListener('click',(evt)=>{
	console.log(evt)
	evt.stopPropagation()
})