import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    
  };

  return (
    <div className={s.container}>
      {" "}
      <div className={s.contentWrapper}>
        {" "}
        <div className={s.textSection}>
          {" "}
          <h1 className={s.title}>Please, login now.</h1> 
        </div>
        <div className={s.formCard}>
          {" "}
          <div className={s.cardBody}>
            {" "}
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className={s.fieldset}>
                  {" "}
                  <label className={s.label}>Email</label> 
                  <Field
                    name="email"
                    type="email"
                    className={s.inputField}
                    placeholder="Email"
                  />{" "}
                  <label className={s.label}>Password</label> 
                  <Field
                    name="password"
                    type="password"
                    className={s.inputField}
                    placeholder="Password"
                  />{" "}
                  <div className={s.signUpLinkContainer}>
                    {" "}
                    <Link to="/register" className={s.signUpLink}>
                      {" "}
                      You don't have account? Sign Up!
                    </Link>
                  </div>
                  <button type="submit" className={s.submitButton}>
                    {" "}
                    Login
                  </button>
                </fieldset>
              </Form>
            </Formik>
            <div className={s.divider}></div> 
            <Link className={s.backHomeLink} to="/">
              {" "}
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
