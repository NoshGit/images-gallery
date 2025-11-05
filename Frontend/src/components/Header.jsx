import PropTypes from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ title }) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
