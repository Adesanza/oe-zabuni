import { Form, Button } from 'react-bootstrap';
import './sign-up-form.css';
import { Formik } from 'formik';
// import { BsEyeSlash } from 'react-icons/bs';
import { registerScehma } from '../../utils/form/yup-schemas';
import { useDispatch } from 'react-redux';
import {
  closeVerticalModalDisplay,
  verticalModalContent,
} from '../../redux/vertical-modal/verticalModalReducer';
import { fetchUserOnRegister } from '../../redux/user/userReducer';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Formik
      validationSchema={registerScehma}
      initialValues={{
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        // console.log(values)
        setSubmitting(true);
        // console.log({ values, actions });
        dispatch(fetchUserOnRegister(values))
          .then(unwrapResult)
          .then((data) => {
            dispatch(closeVerticalModalDisplay());
            history.push('/management');
          })
          .catch((error) => {
            setSubmitting(false);
            setFieldError('password', error.message);
          });
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirstname">
              <Form.Control
                type="text"
                placeholder="First name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.first_name && errors.first_name
                  ? errors.first_name
                  : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicLastname">
              <Form.Control
                type="text"
                placeholder="Last name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.last_name && errors.last_name
                  ? errors.last_name
                  : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCompany">
              <Form.Control
                type="text"
                placeholder="Company"
                name="company_name"
                value={values.company_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.company_name && errors.company_name
                  ? errors.company_name
                  : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.email && errors.email ? errors.email : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              {/* <BsEyeSlash className="" /> */}
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text className="text-danger">
                {touched.password && errors.password ? errors.password : null}
              </Form.Text>
            </Form.Group>
            <Button type="submit" block className="signup-submit-btn">
              Sign up
            </Button>
          </Form>
          <p>
            Already have an account?{' '}
            <span
              className="sign-up-text"
              onClick={() => dispatch(verticalModalContent('login'))}
            >
              Login
            </span>
          </p>
        </>
      )}
    </Formik>
  );
};
export default SignupForm;
