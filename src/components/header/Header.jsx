import styles from './header.module.scss';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>

        <ul>
          <li>
            <a href="#"><img  src="https://niec.so/wp-content/uploads/2018/11/en.png"  /></a>
          </li>
          <li>
            <a href="#">Presidential</a>
          </li>
        </ul>
        
      </header>
    </div>
  )
}

export default Header