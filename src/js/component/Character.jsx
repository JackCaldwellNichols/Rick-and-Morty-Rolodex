import React from 'react'

export default function Character({character}) {
  return (
   
       <div className='text-center  p-5'>
            <h2>{character.name}</h2>
            <img src={character.image} className='img-fluid rounded-pill mb-1'/>
            <p><strong>Origin: </strong>{character.origin.name}</p>
        </div>
   
  )
}
