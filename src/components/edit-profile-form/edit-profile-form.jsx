// import './edit-profile-form.css';
// import { Form, Button, Col } from 'react-bootstrap';
// import { Formik } from 'formik';
// import { editProfileSchema } from '../../utils/form/yup-schemas';
// import { useDispatch, useSelector } from 'react-redux';
// import { closeVerticalModalDisplay } from '../../redux/vertical-modal/verticalModalReducer';
// import {
//   resetBillboardFormData,
//   showLgaData,
// } from '../../redux/form/billboardFormReducer';
// import { overheadModalContainer } from '../../redux/overhead-modal/overheadModalReducer';
// import { setAlertContent } from '../../redux/alert/alertPopupReducer';
// import { mutate } from 'swr';
// import billboardDataApi, {
//   billboardRoute,
// } from '../../utils/billboard-table/billboard-api';

// const EditProfileForm = () => {
//   const userState = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   return (
//     <Formik
//       validationSchema={editProfileSchema}
//       initialValues={{
//         firstName: userState.first_name,
//         lastName: userState.last_name,
//         email: userState.email,
//       }}
//       onSubmit={async (values, { setSubmitting }) => {
//         console.log(values);
//         setSubmitting(true);
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//         isSubmitting,
//       }) => (
//         <>
//           <Form noValidate onSubmit={handleSubmit}>
//             <Form.Row>
//               <Form.Group as={Col} controlId="formBasicFirstName">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="firstName"
//                   value={values.firstName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="First Name"
//                   className="formfont"
//                 />
//                 <Form.Text className="text-danger">
//                   {touched.firstName && errors.firstName
//                     ? errors.firstName
//                     : null}
//                 </Form.Text>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} controlId="formBasicLastName">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="lastName"
//                   value={values.lastName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="Last Name"
//                   className="formfont"
//                 />
//                 <Form.Text className="text-danger">
//                   {touched.lastName && errors.lastName ? errors.lastName : null}
//                 </Form.Text>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} controlId="formBasicEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="Email"
//                   className="formfont"
//                 />
//                 <Form.Text className="text-danger">
//                   {touched.email && errors.email ? errors.email : null}
//                 </Form.Text>
//               </Form.Group>
//             </Form.Row>

//             <Button
//               type="submit"
//               block
//               className="billboard-update-btn"
//               disabled={
//                 isSubmitting ||
//                 !touched.firstName ||
//                 !touched.lastName ||
//                 !touched.email
//               }
//             >
//               update
//             </Button>
//           </Form>
//         </>
//       )}
//     </Formik>
//   );
// };

// export default EditProfileForm;
