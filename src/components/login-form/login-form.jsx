import { Form, Button } from 'react-bootstrap';
import './login-form.css';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/form/yup-schemas';
import { useDispatch } from 'react-redux';
import { closeVerticalModalDisplay } from '../../redux/vertical-modal/verticalModalReducer';

const LoginForm = () => {
    const dispatch = useDispatch();
    return (
        <Formik validationSchema={loginSchema} initialValues={{email: '', password: ''}} onSubmit={(values, { setSubmitting }) => {
            dispatch(closeVerticalModalDisplay());
            alert("Uncle shina, chill na. Backend is not up yet");
        }}>
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors
            }) => (
                <>
                     <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    <Form.Text className="text-danger">{touched.email && errors.email ? errors.email : null}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    <Form.Text className="text-danger">{touched.password && errors.password ? errors.password : null}</Form.Text>
                </Form.Group>
                <Button type="submit" block className="login-submit-btn">
                    Submit
                </Button>
                </Form>
                <p>Don't have an account? <span className="sign-up-text" >Sign up</span></p>
                </>
            )}
        </Formik>
    )
}
export default LoginForm;