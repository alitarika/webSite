import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { H2 } from "../ui/H2";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service_68ladm9", "template_lqi0q9o", form.current, {
        publicKey: "7ITTHPu9_CjXPm1Cv",
      })
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          alert(
            `Message Sent! \n ${formData.name}  sent message as: \n \n "${formData.message}"`
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(`Could not send your message. ${error.text}`);
        }
      )
      .finally(() => {
        console.log("finalized");
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact">
      <H2>Contact</H2>
      <div>
        <section className="form-card">
          <h3 className="form-title">
            Feel Free to Send Me a{" "}
            <span className="text-secondary">Message</span>
          </h3>
          <form ref={form} onSubmit={handleMessageSubmit}>
            <div className="relative">
              <input
                className="form-input peer"
                type="text"
                autoFocus
                autoComplete="name"
                placeholder=" "
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                className="form-input peer"
                type="email"
                placeholder=" "
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                className="form-input peer"
                rows="7"
                placeholder=" "
                name="message"
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
            </div>

            <button className="form-btn" disabled={isSubmitting}>
              Send
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};
