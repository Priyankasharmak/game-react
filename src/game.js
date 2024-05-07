import { useEffect, useState } from 'react';
import styles from './game.module.css';
import Modal from 'react-modal'
const Game = () => {
    const [input, setinput] = useState("");
    const [modalvisable, setmodalvisable] = useState(false);

    const [TimeRanges, settime] = useState(0);

    const [timerRunning, setTimerRunning] = useState(false);

    const [processing , setprocessing] = useState("processing");


 
    useEffect(() => {
        let timer = null;
    
        if (timerRunning) {
          timer = setInterval(() => {
            if (TimeRanges > -1) {
                settime(prevTimeRanges => prevTimeRanges + 5);
                if (TimeRanges >= 100){
                    setprocessing("Your number is " + input)
                }
            }
          }, 500);
        }
    
        return () => clearInterval(timer);

      }, [TimeRanges, timerRunning]);



    return (


        <div className={styles.outer}>



            <div className={styles.box}> <div className={styles.text}>Think of number between 1 and 10</div>
                <input className={styles.input} type="text" pattern="\d*" maxLength={1} value={input} onChange={(e) => {
                    var inputvalue = e.target.value;
                    setinput(inputvalue);

                }}></input>
                <button onClick={() => {
                    setmodalvisable(true)
                    console.log(input)

                    setTimerRunning(true)

                   
                    console.log(input)
                }} className={styles.btn}>read my mind</button></div>

            <Modal isOpen={modalvisable} className={styles.box}>
                <div className={styles.text}>Calculating probabilities...
                </div>
                <div>{processing}</div>

                <progress value={TimeRanges} max="100"></progress>
            </Modal>

        </div>
    );

}

export default Game;