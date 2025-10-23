import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

    const [name ,setName ] = useState("");
  return (
    <div>
        
        <input type="text" value={name} onChange= {(e) =>{
            setName (e.target.value);
        }} />

        <Link to={`/room?name=${name}`} onClick={() =>{

        }}> join </Link>
    </div>
  )
}

export default Landing