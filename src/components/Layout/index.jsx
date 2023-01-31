import { NavLink } from 'react-router-dom';
import styles from '../../styles/_Layout.module.scss';
import logo from '../../assets/images/logo.png';
import logoFooter from '../../assets/images/logo_footer.png';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__padding}>
        <header className={styles.header}>
          <img src={logo} alt="Logo de Kasa rouge" />
          <nav>
            <ul className={styles.header__nav}>
              <li>
                <NavLink
                  className={(link) => (link.isActive ? styles.active : '')}
                  to="/"
                >
                  A<span>ccueil</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(link) => (link.isActive ? styles.active : '')}
                  to="/about"
                >
                  À <span>propos</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
      <footer className={styles.footer}>
        <img src={logoFooter} alt="Logo de Kasa blanc" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
