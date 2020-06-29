import React from 'react';
import './cardlist.css';
import Card from '../card/cardcomponent'
const Cardlist=(props)=>{
return(
<div className='card-list'>
    {
        props.monster.map(monster=>(
        <Card key ={monster.id} monster={monster}/>
        ))
    }
</div>
)
}
export default Cardlist