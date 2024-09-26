import styles from './NavBar.module.scss';
import Container from '../Container/Container'
  
const NavBar = () => {
  return (
    <nav>
      <Container className={styles.navContainer}>
        <div className={styles.wrapper}>
          <a href='/'><span className='fa fa-tasks' /></a>
          <ul className={styles.navlist}>
            <li className={styles.navlink}><a href='/'>Home</a></li>
            <li className={styles.navlink}><a href='/favorite'>Favorite</a></li>
            <li className={styles.navlink}><a href='/about'>About</a></li>
          </ul>
        </div>  
      </Container>
    </nav>
  )
}

export default NavBar;
