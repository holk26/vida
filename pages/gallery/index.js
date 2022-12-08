import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../public/img1.jpg'
import photo2 from '../../public/img2.jpg'
import photo3 from '../../public/img3.jpg'
import { useState } from 'react';
import styles from '../../styles/Home.module.css'

const ImagesGalleryX = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return(
  <div className={styles.container}>
     
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image        
        src={photo1}
        alt="Picture of the author"
        className="d-flex w-100"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
        src={photo2}
        className="d-block w-100"
        alt="Picture of the author"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
        src={photo3}
        className="d-block w-100"
        alt="Picture of the author"
        width={800} //automatically provided
        height={600} //automatically provided
        // blurDataURL="data:..." automatically provided
        //placeholder="blur" // Optional blur-up while loading
      />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

  </div>
  );
}
  

export default ImagesGalleryX;