import styles from './president.module.scss';
import { FaVoteYea } from "react-icons/fa";
import React, { use } from 'react'
import { useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { setCurrentPresident } from '../../features/president/presidentSlice';

const President = ({president}) => {


    const backgroundStyle = {
        width: "100%",
        background: `linear-gradient(0deg,rgba(18, 91, 139, 0.7), rgba(0,0,0,0) 60%, rgba(0,0,0,0)), url(${president.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }


 const dispatch = useDispatch();
 
 const voteNow = () => {

  dispatch(setCurrentPresident(president));
  dispatch(handleModal())
 }

  return (
    <div className={styles.president} style={backgroundStyle}>
        <div className={styles.info}>
            <span className={styles.name}>{president.fName + " " + president.lName}</span>
            <span className={styles.state}>{president.state}</span>
            <span className={styles.votes_count}>Votes: {president.numberOfVotes}</span>
        </div>

        <div className={styles.vote} onClick={voteNow}>
        <FaVoteYea className={styles.vote_icon} />

        </div>
    </div>
  )
}

export default President;