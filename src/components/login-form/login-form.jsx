import { Form, Button } from 'react-bootstrap';
import './login-form.css';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/form/yup-schemas';
import { useDispatch } from 'react-redux';
import { closeVerticalModalDisplay, verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import { fetchUserOnLogin } from '../../redux/user/userReducer';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import { useUserData } from '../../hooks/user-hooks/user-hook';
// zabuni@optimumexposures.com
const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { setUser } = useUserData();
    return (
        <Formik validationSchema={loginSchema} initialValues={{email: '', password: ''}} onSubmit={(values, actions) => {
            // dispatch(closeVerticalModalDisplay());
            // alert("Back-End Under Construction.. winks");
            actions.setSubmitting(true);
                        console.log({ values, actions });
                        dispatch(fetchUserOnLogin(values))
                            .then(unwrapResult)
                            .then((data) => {
                                console.log("datta",data)
                                setUser(data.data);
                                dispatch(closeVerticalModalDisplay());
                                // alert("Back End Under Construction but only zabuni@optimumexposures can see this as this is the only valid user stored")
                                history.push("/management")
                            })
                            .catch(error => {
                                actions.setSubmitting(false);
                                actions.setFieldError("password",error.message)
                            })
        }}>
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                isSubmitting
            }) => (
                <>
                     <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="email-login-input"/>
                    <Form.Text className="text-danger">{touched.email && errors.email ? errors.email : null}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    <Form.Text className="text-danger">{touched.password && errors.password ? errors.password : null}</Form.Text>
                </Form.Group>
                <Button type="submit" block className="login-submit-btn" disabled={isSubmitting}>
                    Login
                </Button>
                </Form>
                <p className="dont">Don't have an account? <span className="sign-up-text" onClick={() => dispatch(verticalModalContent('signup'))} >Sign up</span></p>
                </>
            )}
        </Formik>
    )
}
export default LoginForm;