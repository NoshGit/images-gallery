import PropTypes from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';
import LogoText from './../assets/images/logo.svg?react';

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <LogoText
            alt={title}
            style={{
              maxWidth: '12rem',
              maxHeight: '3rem',
            }}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
