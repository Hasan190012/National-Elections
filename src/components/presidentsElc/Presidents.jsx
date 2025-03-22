// import presidents from '../../assets/presidential.json'
import { useSelector } from 'react-redux';
import President from '../onePresident/President';
import styles from './presidents.module.scss' ;


const Presidents = () => {


  const { presidents } = useSelector( (store) => store.president);

 

  return (
    <div className={styles.presidents_container}>
        <div className={styles.header}>
            <span>Somali Presidential Elections</span>
            <p>
            With less than two years remaining in the four-year term of the FGS and the official expiry of many of the terms of FMS leaders,
             the Establishment Bill, its endorsement and subsequent appointment of the commissioners is a potentially
              crucial step towards the FGS-led direct electoral process.
            </p>
        </div>
            
       

        <div className={styles.presidential}>
       
            {
                    presidents.map( (president) =>(
                    <President key={president.id} president={president} />
                ))
            }
        </div>
        
    </div>
  )
}

export default Presidents;