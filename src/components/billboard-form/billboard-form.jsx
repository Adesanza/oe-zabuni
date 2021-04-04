import { Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import "./billboard-form.css";
import { createBillboardSchema } from "../../utils/form/yup-schemas";
import { useDispatch, useSelector } from "react-redux";
import { createBillboard, editBillboard } from "../../redux/billboard-data/billboardDataReducer";
import { closeVerticalModalDisplay } from "../../redux/vertical-modal/verticalModalReducer";
import { resetBillboardFormData } from "../../redux/form/billboardFormReducer";
import { overheadModalContainer } from "../../redux/overhead-modal/overheadModalReducer";

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
          dispatch(overheadModalContainer('confirmation'))
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
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                  id="formfont"
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
                  placeholder="Location"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.location && errors.location ? errors.location : null}
                </Form.Text>
              </Form.Group>
            </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="controlSelectType">
                  {/* <Form.Label>Example select</Form.Label> */}
                  <Form.Control
                    as="select"
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="formf"
                  >
                    <option value="">Type</option>
                    <option value="led">LED</option>
                    <option value="lightbox">Lightbox</option>
                    <option value="bridge-panel">Bridge Panel</option>
                    <option value="eye-catcher">Eye Catcher</option>
                    <option value="mega-board">Mega board</option>
                    <option value="portrait">Portrait</option>
                    <option value="rooftop">Rooftop</option>
                    <option value="super48-sheet">Super 48 sheet</option>
                    <option value="ultrawave">Ultra wave</option>
                    <option value="video-wall">Video wall</option>
                    <option value="wall-drape">Wall drape</option>
                    <option value="unipole">Unipole</option>
                  </Form.Control>
                  <Form.Text className="text-danger">
                    {touched.type && errors.type ? errors.type : null}
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="controlSelectStatus">
              {/* <Form.Label>Example select</Form.Label> */}
              <Form.Control
                as="select"
                name="status"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                id="formf"
              >
                <option value="">Status</option>
                <option value="active" className="active-status">Active</option>
                <option value="inactive" className="inactive-status">Inactive</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {touched.status && errors.status ? errors.status : null}
              </Form.Text>
            </Form.Group>
                
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="formBasicHeight">
                  <Form.Control
                    name="height"
                    value={values.height}
                    type="number"
                    min={3}
                    max={300}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Height"
                    id="formfont"
                  />
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Text className="text-danger">
                    {touched.height && errors.height ? errors.height : null}
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicWidth">
              <Form.Control
                name="width"
                value={values.width}
                type="number"
                min={3}
                max={300}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Width"
                id="formfont"
              />
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Text className="text-danger">
                {touched.width && errors.width ? errors.width : null}
              </Form.Text>
            </Form.Group>
              </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="controlSelectCategory">
                {/* <Form.Label>Example select</Form.Label> */}
                <Form.Control
                  as="select"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="formf"
                >
                  <option value="">Category</option>
                  <option value="billboard">Billboard</option>
                </Form.Control>
                <Form.Text className="text-danger">
                  {touched.category && errors.category ? errors.category : null}
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="controlSelectClass">
              {/* <Form.Label>Example select</Form.Label> */}
              <Form.Control
                as="select"
                name="class"
                value={values.class}
                onChange={handleChange}
                onBlur={handleBlur}
                id="formf"
              >
                <option value="">Class</option>
                <option value="digital">Digital</option>
                <option value="static">Static</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {touched.class && errors.class ? errors.class : null}
              </Form.Text>
            </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="controlSelectRegion">
                {/* <Form.Label>Example select</Form.Label> */}
                <Form.Control
                  as="select"
                  name="region"
                  value={values.region}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="formf"
                >
                  <option value="">Region</option>
                  <option value="southwest">Southwest</option>
                  <option value="southeast">Southeast</option>
                  <option value="northcentral">Northcentral</option>
                  <option value="northeast">Northeast</option>
                  <option value="northwest">Northwest</option>
                  <option value="southsouth">Southsouth</option>
                </Form.Control>
                <Form.Text className="text-danger">
                  {touched.class && errors.region ? errors.region : null}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicState">
                <Form.Control
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="State"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.state && errors.state ? errors.state : null}
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicLga">
                <Form.Control
                  type="text"
                  name="lga"
                  value={values.lga}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="LGA"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.lga && errors.lga ? errors.lga : null}
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicCity">
                <Form.Control
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="City"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.city && errors.city ? errors.city : null}
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicCoordinate">
                <Form.Control
                  type="text"
                  name="coordinate"
                  value={values.coordinate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Coordinate"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.coordinate && errors.coordinate ? errors.coordinate : null}
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicAmount">
                <Form.Control
                  type="text"
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Amount"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.amount && errors.amount ? errors.amount : null}
                </Form.Text>
              </Form.Group>
            </Form.Row>
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
                  placeholder="Faces"
                  id="formfont"
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
                  placeholder="Slots"
                  id="formfont"
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
                  placeholder="Units"
                  id="formfont"
                />
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Text className="text-danger">
                  {touched.units && errors.units ? errors.units : null}
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Button type="submit" block className="billboard-update-btn">
              {isEditing ? 'update' : 'create'}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default BillboardForm;
