import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const env = import.meta.env;

function App() {
  const UNSPLASH_KEY = env.VITE_UNSPLASH_ACCESS_KEY;
  const [search, setSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted for:', search);

    fetch(
      `https://api.unsplash.com/search/random?query=${search}&client_id=${UNSPLASH_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Unsplash API response:', data);
        setSearch(''); // Clear search input after submission
      })
      .catch((error) => {
        console.error('Error fetching from Unsplash API:', error);
      });
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search
        value={search}
        setValue={setSearch}
        handleSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default App;
