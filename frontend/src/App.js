import './App.css';
import'./api'
import {useEffect, useState} from 'react'
import Games from './components/Games'
function App() {
const [games, setGames]=useState([])
const [search, setSearch] = useState('')
const [submit, setSubmit ] = useState('')

  let props = {}
useEffect(()=>{
  getGames();
},[]);
const getGames = async () => {
  const response = await fetch(
    `https://api.boardgameatlas.com/api/search?name=${submit}&client_id=u9c0BBk53e`
  ).then((response)=> response.json())
  .then(
  (responseData)=>{
    // console.log(responseData)
    props.games = responseData.games
    
  })
  const data = props.games
  setGames(data);
};

const handleChange= (e) => {
  setSearch(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmit(search);
  console.log(submit);
}
console.log(games)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={search} onChange={handleChange} />
        <button> Search </button>
        </form>
      {games.map((game,i)=>(
        <Games 
        title={games[i].name} 
        image={games[i].images.small}
        description={games[i].description}
        price={games[i].msrp_text}
        minplayers={games[i].min_players}
        maxplayers={games[i].max_players}
        minplaytime={games[i].min_playtime}
        maxplaytime={games[i].max_playtime}
        minage={games[i].min_age}
        publisher={games[i].primary_publisher.name}
        />
      ))}
    
      <h1> Hello World </h1>
    </div>
  );
}

export default App;
