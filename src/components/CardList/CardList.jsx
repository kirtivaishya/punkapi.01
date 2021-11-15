import React, { useState } from 'react'
import "./CardList.scss"

const CardList = (props) => {
    const { showBeers } = props;
    const [info, setInfo] = useState(false);
    const handleClick = () => {
        setInfo(!info);
    }

    const showBeersJSX = showBeers.map((character, index) => (

        <div className="beer-tile" onClick={handleClick}>

            <img className="beer-tile__img" src={character.image} key={index}></img>

            {/* <label className="character-tile__heading">{character.name}</label> */}

            <p className="beer-tile--text">
                {character.name}
                <br />Gender :{character.gender}   <br />
                House : {character.house} <br />
                Patronus : {character.patronus}<br />
                Actor : {character.actor}</p>
            {/* onlick not working on button rather on div
            <button className="character-tile--button" onClick={handleClick}>more info.</button> */}
        </div>

    ));

    const showBeersInfoJSX = showBeers.map((character, index) => (
        <div>
            <p className="beer-tile--text">
                {character.name}
                <br />Gender :{character.gender}   <br />
                House : {character.house} <br />
                Patronus : {character.patronus}<br />
                Actor : {character.actor}</p>
            <button className="beer-tile--button" onClick={handleClick}>close</button>
        </div>
    ));

    return (
        <>
            {info ? showBeersInfoJSX : showBeersJSX}
            {/* {showCharactersJSX} */}
        </>
    )
}

export default CharacterTiles
