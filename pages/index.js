import { useRouter } from 'next/router';
import styles from '../styles/Button.module.css'
let namn = <h1>Shalom</h1>

function Shafka(){
  const router = useRouter();
  function handle(){
    router.push('\shafka')
  }
  
  return(
    <button className={styles.button} onClick={handle}>
      Shafka
    </button>

  )
}

function Waabka(){
  const router = useRouter();
  function handle(){
    router.push('\waabka')
  }

  return (
    <button className={styles.button} onClick={handle}>
      Waabka
    </button>
  )
}


function Home(){
  return(
    <div>

      <div className={styles.head}>
        {namn}
      </div>

      <div className={styles.container}>
        <br /> {/*makes new line*/}

        <Shafka />
        <Waabka />
      </div>


    </div>
  )
}

export default Home