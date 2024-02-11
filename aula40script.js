          const caixa1 = document.querySelector("#caixa1");
          const btn_c = [...document.querySelectorAll(".curso")];
          // const c1_2= document.querySelector('#c1_2')
          const novoElemento = document.createElement("div");
          const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"];
          cursos[6] = "React Native";
          cursos.map((el, chave) => {
            // Cria um elemento div
            const novoElemento = document.createElement("div");
           // cria id na div
            novoElemento.setAttribute("id", "c" + (chave + 1));
            //cria classe na div
            novoElemento.setAttribute("class", "curso c1");
            //insere o elemento html a partir do parametro el que foi passado pela iteração dos cursos
            novoElemento.innerHTML = el;
            //cria um elemento img
            const btn_lixeira = document.createElement("img");
            //atribui caminho ao elemento img
            btn_lixeira.setAttribute("src", "./icone-lixeira.svg");
           //insere o botão na div
            novoElemento.append(btn_lixeira);
           //adiciona classe btn-lixeira a div
            btn_lixeira.classList.add("btn-lixeira");
            // evento de remoção da div da caixa 1
            btn_lixeira.addEventListener("click", (evt) => {
              console.log(evt.target , chave);
              novoElemento.remove(evt.target);
            });
            caixa1.appendChild(novoElemento);
            //insere todos os elementos a caixa 1
          });
