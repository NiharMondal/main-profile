import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Typical from "react-typical";
import Fade from "react-reveal";
import styles from "../styles/Contact.module.css";

const connent = ["", 3000, "Feel free to contact me", 5000];
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9q0fufn",
        "protfolio_template",
        form.current,
        "user_tkQUuztf2oy2UkdmUc2zj"
      )
      .then(
        (result) => {
          window.alert("Email has been sent successfully");
          e.target.reset();
        },
        (error) => {
          window.alert(error.text);
        }
      );
  };

  return (
    <div id="contact" style={{ paddingBottom: "2rem" }}>
      <div className="container">
        <div className="section_header">
          <h2>Get in touch</h2>
          <Typical
            className={styles.typical_text}
            steps={connent}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <Fade bottom>
          <div className={styles.form_wrapper}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.form_control}>
                <div className={styles.form_control}>
                  <label>Name</label>
                  <input
                    className="message_input"
                    type="text"
                    name="user_name"
                  />
                </div>
                <label>Email</label>
                <input
                  className="message_input"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className={styles.form_control}>
                <label>Message</label>
                <textarea name="message" rows="5" />
              </div>

              <input
                type="submit"
                clasname={styles.submit_btn}
                value="Send Message"
              />
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Contact;
