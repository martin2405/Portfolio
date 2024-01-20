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

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (
    { name, email, message }: ContactValuesType,
    formikHelpers: FormikHelpers<ContactValuesType>
  ) => {
    fetch("https://formsubmit.co/44926ca8d42813366b3f3e3b821bed55", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    formikHelpers.resetForm();
    setIsSent(true);
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
