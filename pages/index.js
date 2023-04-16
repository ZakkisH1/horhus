import { useRouter } from 'next/router';
let namn = "Hejdåå"

function Shafka(){
  const router = useRouter();
  function handle(){
    router.push('\shafka')
  }
  
  return(
    <button onClick={handle}>
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
    <button onClick={handle}>
      Waabka
    </button>
  )
}

const butts = [
  <Shafka />,
  <Waabka />
]

const options = butts.map(butt =>
  <li>
    {butt}
  </li>
 );


function Home(){
  return(

    <div>
      {namn}


      <br /> {/*makes new line*/}

      <ul>{options}</ul>
    </div>
    


  )
}

export default Home