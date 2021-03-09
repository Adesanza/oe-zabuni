import { Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import "./billboard-form.css";
import { createBillboardSchema } from "../../utils/form/yup-schemas";
import { useDispatch, useSelector } from "react-redux";
import { createBillboard, editBillboard } from "../../redux/billboard-data/billboardDataReducer";
import { closeVerticalModalDisplay } from "../../redux/vertical-modal/verticalModalReducer";
import { resetBillboardFormData } from "../../redux/form/billboardFormReducer";

const BillboardForm = () => {
  const formDataState = useSelector(state => state.billboardForm);
  const { isEditing, formData } = formDataState;
  const dispatch = useDispatch();
  console.log(formData);
  return (
    <Formik
      validationSchema={createBillboardSchema}
      initialValues={formData}
      onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          dispatch(closeVerticalModalDisplay());
          if(isEditing){
            dispatch(editBillboard(values))
            dispatch(resetBillboardFormData())
          }else{
            let newValues = {...values, id: Date.now().toString() }
            dispatch(createBillboard(newValues))
          }
          
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
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard name"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.name && errors.name ? errors.name : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicLocation">
              <Form.Control
                type="text"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard location"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.location && errors.location ? errors.location : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="controlSelectType">
              {/* <Form.Label>Example select</Form.Label> */}
              <Form.Control
                as="select"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select billboard type</option>
                <option value="LED">LED</option>
                <option value="Lightbox">Lightbox</option>
                <option value="Others">Others</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {touched.type && errors.type ? errors.type : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicSize">
              <Form.Control
                type="text"
                name="size"
                value={values.size}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard size"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.size && errors.size ? errors.size : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="controlSelectStatus">
              {/* <Form.Label>Example select</Form.Label> */}
              <Form.Control
                as="select"
                name="status"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select billboard status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {touched.status && errors.status ? errors.status : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicState">
              <Form.Control
                type="text"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard state"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.state && errors.state ? errors.state : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicLga">
              <Form.Control
                type="text"
                name="lga"
                value={values.lga}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard lga"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.lga && errors.lga ? errors.lga : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Control
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard city"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.city && errors.city ? errors.city : null}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicAmount">
              <Form.Control
                type="text"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Billboard amount"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.amount && errors.amount ? errors.amount : null}
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicFaces">
                <Form.Control
                  type="number"
                  min={1}
                  max={50}
                  name="faces"
                  value={values.faces}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Billboard faces"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.faces && errors.faces ? errors.faces : null}
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicSlots">
                <Form.Control
                  type="number"
                  min={1}
                  max={50}
                  name="slots"
                  value={values.slots}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Billboard slots"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.slots && errors.slots ? errors.slots : null}
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicUnits">
                <Form.Control
                  type="number"
                  min={1}
                  max={50}
                  name="units"
                  value={values.units}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Billboard units"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.units && errors.units ? errors.units : null}
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Button type="submit" block className="billboard-update-btn">
              {isEditing ? 'update' : 'submit'}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default BillboardForm;
