'use strict'

import {getFilmes, getFilme, postFilme} from "./filmes.js"

function criarCard (filme){
    const card = document.createElement('div')
    card.classList.add(
        'mt-5',
        'w-80',
        'h-96',
        'col-start-3',
        'text-ce',
        'bg-white',
        'px-5',
        'rounded-xl'
        
    )



    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    
    const texto = document.createElement('textarea')
    texto.textContent = filme.sinopse

    

    const fotoCapa = document.createElement('img')
    fotoCapa.src = filme.foto_capa
    fotoCapa.classList.add('w-80', 'h-72')

    card.append(fotoCapa)
    card.append(titulo)
    card.append(texto)

    return card
}

async function preencherContainer (){
    const container = document.getElementById('container_filmes')
   
    const filmes = await getFilmes()
    console.log(filmes)

    
    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })

}

preencherContainer()

const filme = {
    
    "nome": "Velozes e Furiosos",
    "sinopse": "Brian O Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
    "duracao": "1:46:00",
    "data_lancamento": "2001-09-28",
    "data_relancamento": null,
    "foto_capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/2_Fast_2_Furious_2003.jpg/230px-2_Fast_2_Furious_2003.jpg",
    "valor_unitario": 30.00
}

