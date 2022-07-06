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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" style={{paddingBottom: '2rem'}}>
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
        <div className={styles.form_wrapper}>
          <Fade bottom>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.form_control}>
                <label>Email</label>
                <input className="message_input" type="email" name="email" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="">Subject</label>
                <input className="message_input" type="text" name="subject" />
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
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Contact;
// const Contact = () => {
//   const form = useRef();
//    console.log(form.current);
//   const sendEmail = (e) => {
//     e.preventDefault();

//     var templateParams = {
//       email: "James",
//       subject: "Check this out!",
//       message: "helllo world",
//     };
//     emailjs
//       .send(
//         "service_9q0fufn",
//         "protfolio_template",
//         templateParams,
//         "user_tkQUuztf2oy2UkdmUc2zj"
//       )
//       .then(
//         function (response) {
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//   };
//   return (
//     <div id="contact">
//       <div className="container">
//         <div className="section_header">
//           <h2>Get in touch</h2>
//           <Typical
//             className={styles.typical_text}
//             steps={connent}
//             loop={Infinity}
//             wrapper="p"
//           />
//         </div>
//         <div className={styles.form_wrapper}>
//           <Fade bottom>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className={styles.form_control}>
//                 <label htmlFor="email">Your Email</label>
//                 <input type="email" id="email" name="email" required />
//               </div>
//               <div className={styles.form_control}>
//                 <label htmlFor="subject">Subject</label>
//                 <input type="text" id="subject" name="subject" required />
//               </div>
//               <div className={styles.form_control}>
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   type="text"
//                   id="message"
//                   rows="5"
//                   name="message"
//                   required
//                 />
//               </div>
//               <button type="submit" className={styles.submit_btn}>
//                 Send Message
//               </button>
//             </form>
//           </Fade>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
