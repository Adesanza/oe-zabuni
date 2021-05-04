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

const SignupForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      validationSchema={registerScehma}
      initialValues={{
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        // console.log(values)
        dispatch(closeVerticalModalDisplay());
        alert('Back-End Loading.. Database Not ready');
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
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.firstName && errors.firstName
                  ? errors.firstName
                  : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicLastname">
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.lastName && errors.lastName ? errors.lastName : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCompany">
              <Form.Control
                type="text"
                placeholder="Company"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="email-login-input"
              />
              <Form.Text className="text-danger">
                {touched.company && errors.company ? errors.company : null}
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
