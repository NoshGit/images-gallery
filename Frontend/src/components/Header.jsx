import PropTypes from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';
import Logo from './../assets/images/logo.png';

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' ' + title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
