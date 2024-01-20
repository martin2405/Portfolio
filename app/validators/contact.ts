import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Required",
  },
  string: {
    email: "Not valid email",
  },
});

export type ContactValuesType = Yup.InferType<typeof contactMeSchema>;

export const initialValues: ContactValuesType = {
  name: "",
  email: "",
  message: "",
};

export const contactMeSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
});
