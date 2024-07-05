import styles from "./About.module.css"
import Image from 'next/image';



const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.img}>
            <div className={styles.title}>Sobre mí</div>
                <Image
                className={styles.foto}
                    src="/images/2.png"
                    alt="Carlos"
                    width={400}
                    height={500}
                />
            </div>
            <div className={styles.description}>
                <p>
                    Soy un apasionado desarrollador web en constante búsqueda de crecimiento y aprendizaje. Me encanta enfrentar desafíos y explorar nuevas tecnologías para crear soluciones innovadoras y eficientes.
                </p>
            </div>
        </div>
    );
};

export default About;

