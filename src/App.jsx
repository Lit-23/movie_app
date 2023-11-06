import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from "./search.svg";


function App() {

  const API_URL = 'http://www.omdbapi.com?apikey=d50eed56';

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <>
      Hello world
    </>
  )
}

export default App
