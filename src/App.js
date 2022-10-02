import axios from 'axios';
import { useState } from 'react';
import './App.css';
import WeatherWidget from './Components/WeatherWidget';


function App() {
const api_key = '5dbfe70ca7194ddab81195717220110';
const api_url = 'http://api.weatherapi.com/v1';
const api_method = '/current.json'
  const api = `${api_url}${api_method}?key=${api_key}&q=`
  

  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [bg, setbg] = useState(true);


  const active = () => {
    setbg(!bg)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    console.log(e.target[0].value);

    axios.get(`${api}${e.target[0].value}`)
          .then(response => setData(response.data))
          .catch(error => console.log(error))
          e.target.value = ''

  //   switch (e.keyCode) {
  //     case 13:
  //       axios.get(`${api}${search}`)
  //         .then(response => setData(response.data))
  //         .catch(error => console.log(error))
  //         e.target.value = ''
  //       break;
  //     default:
  //   }
  }
  

  return (
    <div className="body" style={{ backgroundColor: bg ? '' : '#212121', color: bg ? '#212121' : 'white' }}>
      <header className='header container flex'>
        <div className='logo'>
          <a className='logoName' href='/' style={{ color: bg ? '#212121' : 'white' }}><h1>Weather</h1></a>
          <img className='logoImg' src="./images/cloud.png" alt='logo' />
        </div>
        <nav className='navbar'>
          <div onClick={active}>{(bg)
            ? <img className='modeImg' src="./images/day.png" alt='day-mode' />
            : <img className='modeImg' src="./images/night.png" alt='night-mode' />}
          </div>
        </nav>
      </header>

      <main className='main container'>
        <div>
          
          <form  onSubmit={handleSearch}>
          <input className='search' type="search" placeholder="Search Country/City" />

          </form>
          {data && <WeatherWidget data={data} />}
        </div>
      </main>


    </div>
  );
}

export default App;
