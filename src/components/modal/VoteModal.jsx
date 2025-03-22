import { useState } from 'react';
import Modal from 'react-modal';
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from './modal.module.scss';
import { useSelector,useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { addNumberOfVotes, dicreaseVote, increaseVote, resetState, setCurrentPresident } from '../../features/president/presidentSlice';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  



const VoteModal = () => {

  const dispatch = useDispatch();

  let subtitle;
  
  const {isOpen} = useSelector((store) => store.modal);
  const {currentPresident,voteCount} = useSelector((store) => store.president);

  console.log(currentPresident);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    dispatch(handleModal());
  }

  if(!currentPresident) return


  const backgroundStyle = {
    width: "100%",
    margin: "5px",
    height: "350px",
    background: `linear-gradient(0deg,rgba(18, 91, 139, 0.7), rgba(0,0,0,0) 60%, rgba(0,0,0,0)), url(${currentPresident.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px"
}

const handleSubmit = (event) => {
  event.preventDefault();

  dispatch(addNumberOfVotes(currentPresident.id));
  dispatch(resetState());
  closeModal();
}

  return (
    <div>

      {/* <button onClick={() => dispatch(handleModal())}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}>
          <div className={styles.modal_container}>
            <div className={styles.competitor_info}>
              <div style={backgroundStyle}></div>
              <div className={styles.bio}>

                <div className={styles.devider}>
                  <label htmlFor="">Name</label>
                  <span>{currentPresident.fName + " " + currentPresident.lName}</span>
                </div>
                <div className={styles.devider}>
                  <label htmlFor="">Party</label>
                  <span>{currentPresident.party}</span>
                </div>
                <div className={styles.devider}>
                  <label htmlFor="">Backround Study</label>
                  <span>{currentPresident.backgoundStudy}</span>
                </div>
                <div className={styles.devider}>
                  <label htmlFor="">Employment</label>
                  <span>I work… In finance. On your goals. Until the work is done.</span>
                </div>


              </div>
            </div>

            <div className={styles.vote_container}>
              <div className={styles.vote_count}>
                <span>Parchase</span>
                <div className={styles.vote_controls}>
                <button type='button' onClick={() => dispatch(dicreaseVote())} className={styles.icon}><FiMinus /></button>
                <span>{voteCount}</span>
                <button type='button' onClick={() => dispatch(increaseVote())} className={styles.icon}><FiPlus /></button>
                </div>
              </div>

              <form>
                <span>Pay with Evc,Zaad and Sahal</span>
                <input type="number" placeholder='Enter the phone number' className={styles.form_control} />
                <button type='submit' onClick={handleSubmit}>Vote Now</button>
              </form>

            </div>
          </div>
          
        
      </Modal>

    </div>
  )
}

export default VoteModal