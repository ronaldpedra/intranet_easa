import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>
        Este é um componente com uma frase! Este texto é oriundo do componente
        Frase que foi importado dentro de App. A repetição destas frases mostra
        o conceito de reutilização do componente.
      </p>
    </div>
  );
}

export default Frase;
