import React from 'react';

const Searchfield=({placeholder,handlechange})=>{
    return(
        <input type='search' 
        placeholder={placeholder} 
        onChange={handlechange}
        />
    )
    }
export default Searchfield
    