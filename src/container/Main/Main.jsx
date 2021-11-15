import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'

const Main = (props) => {
    const {beerArray}=props;
    const [searchTerm,setSearchTerm]=useState('');
   let cleanSearchQuery= '';
   const handleInput=event=>{
    cleanSearchQuery= event.target.value.toLowerCase();
    setSearchTerm(cleanSearchQuery)
   } 
   const filteredResult= beerArray.filter(element => {
    return element.name.toLowerCase().includes(searchTerm) && element.image !==""
   });

    return (
        <div>
             <SearchBox label={"Search your fav beer"} searchTerm={searchTerm} handleInput={handleInput}></SearchBox>
             {/* <CharacterTiles showCharacters={filteredResult}></CharacterTiles> */}
             <CardList showBeers={filteredResult}></CardList>
        </div>
    )
 }

export default Main
