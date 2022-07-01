import { useState } from "react";
import styles from "./ContactCard.module.css";
export const ContactCard = (props) => {
  let { id, name, last_name, phone, url, email } = props;
  const [showphone, setShowphone] = useState(false);
  return (
    <div className={styles.maindiv}>
      <div onClick={() => setShowphone(!showphone)} className={styles.subdiv}>
        <div className={styles.image}>
          {" "}
          <img style={{ width: "100%" }} src={url}></img>
        </div>
        <div style={{ marginTop: "15px" }}>
          {name} {last_name}
          <div>{email}</div>
          <div>{showphone && <p>{phone}</p>}</div>
        </div>
      </div>
    </div>
  );
};
