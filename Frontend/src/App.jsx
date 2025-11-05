import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted for:', search);
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
