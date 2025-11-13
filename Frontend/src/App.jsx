import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome.jsx';

const env = import.meta.env;

function App() {
  const UNSPLASH_KEY = env.VITE_UNSPLASH_ACCESS_KEY;

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/photos/random?query=${search}&client_id=${UNSPLASH_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setImages([{ title: search, ...data }, ...images]);
        setSearch(''); // Clear search input after submission
      })
      .catch((error) => {
        console.error('Error fetching from API:', error);
      });
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => id !== image.id));
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search
        value={search}
        setValue={setSearch}
        handleSubmit={handleSearchSubmit}
      />

      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {images.map((image, i) => (
              <Col key={i}>
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
