"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmit(true);
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Contacto</h1>

      {isSubmit ? (
        <p className={styles.submitMessage}>Mensaje enviado con éxito!</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Nombre:</label>
            <input
              type="text"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "El campo nombre es obligatorio",
                },
              })}
              className={styles.input}
            />
            {errors.nombre && <span className={styles.errorMessage}>{errors.nombre.message}</span>}
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Email:</label>
            <input
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "El campo email es obligatorio",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "No tiene formato válido de correo electrónico",
                },
              })}
              className={styles.input}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Mensaje:</label>
            <textarea
              {...register("mensaje", {
                required: {
                  value: true,
                  message: "El campo mensaje es obligatorio",
                },
              })}
              className={styles.textarea}
            />
            {errors.mensaje && <span className={styles.errorMessage}>{errors.mensaje.message}</span>}
          </div>
          <input type="submit" value="Enviar" className={styles.submitButton} />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
