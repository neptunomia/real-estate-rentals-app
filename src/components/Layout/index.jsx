import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </header>
      {children}
      <footer>Logo et copyrigth</footer>
    </div>
  );
}

export default Layout;
