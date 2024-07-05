import styles from './Interest.module.css';

const Interest = () => {
    return (
        <div className={styles.interestContainer}>
            <h2 className={styles.title}>Intereses</h2>
            <div className={styles.interestContent}>
                <p className={styles.interestItem}>
                    Explorar nuevas tecnologías y frameworks web
                </p>
                <p className={styles.interestItem}>
                    Desarrollo de aplicaciones web y móviles
                </p>
                <p className={styles.interestItem}>
                    Integración y automatización de procesos
                </p>
                <p className={styles.interestItem}>
                    Colaboración en proyectos y metodologías ágiles
                </p>
            </div>
        </div>
    );
};

export default Interest;
