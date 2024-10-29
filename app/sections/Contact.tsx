"use client";
import {
  ContactValuesType,
  contactMeSchema,
  initialValues,
} from "@/validators/contact";
import { Form, Formik, FormikHelpers } from "formik";
import styles from "@/styles/contact.module.scss";
import { useInView } from "react-intersection-observer";
import { showAnimation } from "@/utils/showAnimation";
import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
});

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (
    params: ContactValuesType,
    formikHelpers: FormikHelpers<ContactValuesType>
  ) => {
    emailjs.send("default_service", "template_82za21q", params).then(
      (response) => {
        if (response.status === 200) {
          formikHelpers.resetForm();
          setIsSent(true);
        }
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div ref={ref} className={`${styles.container} ${showAnimation(inView)}`}>
      <h2>Let&apos;s work together</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={contactMeSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, errors }) => (
          <Form className={styles.form}>
            <div>
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
                className={`${styles.name} ${
                  errors.name ? styles.inputError : ""
                }`}
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                className={`${styles.email} ${
                  errors.email ? styles.inputError : ""
                }`}
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell me more about your project"
              onChange={handleChange}
              className={errors.message ? styles.inputError : ""}
              value={values.message}
            />
            <button className={isSent ? styles.sent : ""}>
              <span className={styles.send}>Send</span>
              <span className={styles.thankYou}>Thank you!</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
