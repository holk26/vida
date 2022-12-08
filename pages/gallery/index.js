import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../public/img1.jpg'
import photo2 from '../../public/img2.jpg'
import photo3 from '../../public/img3.jpg'
import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

const ImagesGalleryX = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return(
  <div className={styles.container}>
     <Head>
        <title>Ale y holk</title>
        <meta name="description" content="Agendas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>
          Te amo con todo mi corazón 
       </h1>
       <h2>Ale y holk</h2>
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
    </Carousel>
    

  </div>
  );
}
  

export default ImagesGalleryX;