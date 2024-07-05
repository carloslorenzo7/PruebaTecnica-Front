
import styles from "./page.module.css";
import Header from "@/app/Header/Header"
import About from "@/app/About/About";
import Interest from "@/app/Interest/Interest";
import ContactForm from "./ContactForm/ContactForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Interest />
      <ContactForm />
    </main>
  );
}

