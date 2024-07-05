"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Image 
                    src="/images/3.png"
                    alt="Carlos"
                    width={100}
                    height={140}
                    className={styles.img} 
                />
                <h1 className={styles.name}>Carlos</h1>
            </div>
            <nav className={styles.nav}>
                <a href="#About">Sobre mi</a>
                <a href="#Interest">Intereses</a>
                <a href="#ContactForm">Contacto</a>
            </nav>
             <div className={styles.menuIcon} onClick={toggleMenu}>
                {menuOpen ? '✕' : '☰'}
            </div>
            {menuOpen && (
                <div className={styles.mobileNav}>
                    <a href="#About" onClick={toggleMenu}>Sobre mi</a>
                    <a href="#Interest" onClick={toggleMenu}>Intereses</a>
                    <a href="#ContactForm" onClick={toggleMenu}>Contacto</a>
                </div>
            )}
        </header>
    );
}
