import React, {useEffect, useState} from 'react'
import Character from './Character.jsx'
import Spinner from './Spinner.jsx'

function Pagination(props) {
    return (
        <div className='d-flex justify-content-between'>
            <button 
                className='btn btn-primary btn-sm align-items-center'
                onClick={() => props.setPage(props.page - 1)}
                disabled = {props.page === 1 ? true : false }
            >
                Prev page 
            </button>
            <p className='text-center'>Page: {props.page}</p>
            <button 
                className='btn btn-primary btn-sm align-items-center'
                onClick={() => props.setPage(props.page + 1)}
            >
                Next page 
            </button>
        </div>
    )
  }
  

export default function CharacterList() {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {

        async function fetchData() { 
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await res.json()
            setCharacters(data.results)
          //  console.log(data.results)
            setLoading(false)
        }
        fetchData()
    }, [page])

  return (
    <div className='container'>
         <div className="searchbar p-4">
				<input type="search" placeholder="search..."  onChange={event => setSearch(event.target.value)}/>
		</div>

        <Pagination page={page} setPage={setPage}/>
       
        {
            loading ?  (
        <div>
            <Spinner />
        </div>
             ) : (
        <div className="row">
        {
        characters.filter(character => {
            if(search === ''){
                return characters
            }else if
                (character.name.toLowerCase().includes(search.toLowerCase())){
                    return character
                }
            
        })
        .map((character) => {
            return (
                    <div className = 'col-md-4' key={character.id}>
                        <Character character={character}/>
                    </div>
            )})}
        </div>
       )}
        <Pagination page={page} setPage={setPage}/>
    </div>
  )
}


  