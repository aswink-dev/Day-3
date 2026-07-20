import { title } from "process";
import styles from "./Card.module.css";

export default function Card({title, desc}) {
  return (
    <div className="{styles.card}">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
