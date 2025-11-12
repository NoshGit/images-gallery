import { Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="bg-light text-center p-5 rounded shadow-sm">
      <h1 className="display-4">Welcome to Images Gallery</h1>
      <p className="lead mt-3">
        This is a simple application that retrieves photos using Unsplash API.
        In order to start enter any search term in the search bar above.
      </p>
      <div className="mt-4">
        <Button
          className="btn btn-primary btn-lg"
          href="https://unsplash.com/"
          target="_blank"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
