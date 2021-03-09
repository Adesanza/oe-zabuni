import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').trim().required('Email field is required'),
    password: Yup.string().required("Password field is required").matches(/^[a-zA-Z0-9]{5,30}$/,"Password must contain only alphabets or numbers and must be longer than 5 characters")
})

export const createBillboardSchema = Yup.object().shape({
    name: Yup.string().max(15,"Must be 15 characters or less").required("Billboard name is required"),
    location: Yup.string().max(30,"Must be 30 characters or less").required("Billboard location is required"),
    type: Yup.string().oneOf(['LED','Lightbox','Others'],'Invalid type').required("Must select an option"),
    size: Yup.string().max(15,"Must be 15 characters or less").required("Billboard size is required"),
    status: Yup.string().oneOf(['active','inactive'],'Invalid status').required("Must select an option"),
    state: Yup.string().max(15,"Must be 15 characters or less").required("Billboard state is required"),
    lga: Yup.string().max(20,"Must be 20 characters or less").required("Billboard lga is required"),
    city: Yup.string().max(15,"Must be 15 characters or less").required("Billboard city is required"),
    amount: Yup.string().max(15,"Must be 15 characters or less").required("Billboard price is required"),
    faces: Yup.number().min(1).max(50).required("Billboard unit is required"),
    slots: Yup.number().min(1).max(50).required("Billboard unit is required"),
    units: Yup.number().min(1).max(50).required("Billboard unit is required")
})