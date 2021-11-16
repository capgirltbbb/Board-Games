import React from 'react'

function Games({title, image, description, price, minplaytime, maxplaytime, minplayers, maxplayers, minage, publisher}) {
    console.log(title)
    return (
    <div>
        <h2>{title}</h2>
        <img src={image}/>
        <div>
            <h4>price: {price}</h4>
            <h4>players: {minplayers}-{maxplayers}</h4>
            <h4>playtime: {minplaytime}-{maxplaytime}</h4>
            <h4>age: {minage}+</h4>
            <h4>publisher: {publisher}</h4>
        </div>
        <p>{description}</p>
    </div>
    )
}
export default Games;