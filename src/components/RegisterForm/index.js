import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";
import { useHistory } from "react-router";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(4).label("Name"),
  password: Yup.string().required().label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function RegisterForm() {
  const history = useHistory();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">Register To Course Compose </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: "",
            password: "",
            name: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form className="flexCol">
              <FromInput name="email" placeholder="Email" />
              <FromInput name="name" placeholder="Name" />
              <FromInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <FromInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <CustomButton
                type="submit"
                title="Register"
                disabled={!isValid || isSubmitting}
              />
              <p>
                You already have account{" "}
                <span
                  className="span"
                  onClick={() => history.push("/")}
                >
                  Login
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
