let pokemonName =  document.querySelector('.pokemon-name')
let PokemonId = document.querySelector('.pokemon--number')
let PokemonImage = document.querySelector('.pokemon--image')
let form = document.querySelector('.form')
let input = document.querySelector('.input--search')
let prev = document.querySelector('.btn-prev')
let next = document.querySelector('.btn-next')
let id = 1


//2
async function RenderPokemon(pokemon){

    pokemonName.innerHTML = 'Loading'
    let data = await Fetchpokemon(pokemon)

    if(data){
    pokemonName.innerHTML = data.name
    PokemonId.innerHTML = data.id
    id = data.id

    PokemonImage.style.display = 'block'
    PokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    input.value = ''
    }else{
        PokemonImage.style.display = 'none'
        pokemonName.innerHTML = 'Not found :('
        PokemonId.innerHTML = ''
    }

}
//1
async function Fetchpokemon (pokemon){

    let ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(ApiResponse.status == 200){
        let data = await ApiResponse.json()

        return data
    }else{

    }


}

// 3
form.addEventListener('submit', (event)=>{
    event.preventDefault()

    RenderPokemon(input.value.toLowerCase())
})


prev.addEventListener('click', ()=>{
    
    if(id < 1){
        id = 1010
        RenderPokemon(id)
    }else{
        id --
        RenderPokemon(id)
    }
    
})

next.addEventListener('click', ()=>{
    
    if(id > 1010){
        id = 1
    }else{
    id++
    RenderPokemon(id)
    }
    
})



RenderPokemon(id)