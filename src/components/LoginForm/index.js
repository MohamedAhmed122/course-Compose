import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";

import "./styleForm.css";
import { useHistory } from "react-router";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function LoginForm() {
  const history = useHistory();
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">Login To Course Compose </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form className="flexCol">
              <FromInput name="email" placeholder="Email" />
              <FromInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <CustomButton
                type="submit"
                title="Login"
                disabled={!isValid || isSubmitting}
              />
              <p>
                You don't have account{" "}
                <span
                  className="span"
                  onClick={() => history.push("/register")}
                >
                  Register
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
