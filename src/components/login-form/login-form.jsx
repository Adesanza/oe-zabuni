import { Form, Button } from 'react-bootstrap';
import './login-form.css';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/form/yup-schemas';
import { useDispatch } from 'react-redux';
import {
  closeVerticalModalDisplay,
  verticalModalContent,
} from '../../redux/vertical-modal/verticalModalReducer';
import { fetchUserOnLogin } from '../../redux/user/userReducer';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        // console.log({ values, actions });
        dispatch(fetchUserOnLogin(values))
          .then(unwrapResult)
          .then((data) => {
            dispatch(closeVerticalModalDisplay());
            history.push('/management');
          })
          .catch((error) => {
            actions.setSubmitting(false);
            actions.setFieldError('password', error.message);
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
        isSubmitting,
      }) => (
        <>
          <Form noValidate onSubmit={handleSubmit}>
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
            <Button
              type="submit"
              block
              className="login-submit-btn"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
          <p className="dont">
            Don't have an account?{' '}
            <span
              className="sign-up-text"
              onClick={() => dispatch(verticalModalContent('signup'))}
            >
              Sign up
            </span>
          </p>
        </>
      )}
    </Formik>
  );
};
export default LoginForm;
