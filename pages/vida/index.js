import styles from '../../styles/Home.module.css'
import Form from 'react-bootstrap/Form';

const Vida = () => {
    
    return(
        <div>
            <main className={styles.main}>
        <h1 className={styles.title}>
          Alejandra Pachon
        </h1>
        <h1>Yo soy tú apoyo y estoy para ti en las buenas y las malas</h1>
        <h2>No lo olvides</h2>
        <h2>Tú y yo somos un equipo y lo vamos a superar todo y</h2>
        <h2>vamos aprender de nuestro error y cada dia ser mejores</h2>
        <Form.Select size="lg">
            <option>Select</option>
            <option>Equipo</option>
            <option>Novios</option>
            <option>Esposos</option>
            <option>Todas la respuestas</option>
        </Form.Select>
        


      </main>

        </div>
    );
}

export default Vida;