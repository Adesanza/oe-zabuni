import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import billboardDataReducer from "./billboard-data/billboardDataReducer";
import filterBillboardReducer from "./filter-Billboard/filterBillboardReducer";
import billboardFormReducer from "./form/billboardFormReducer";
import userReducer from "./user/userReducer";
import verticalModalReducer from "./vertical-modal/verticalModalReducer";




export const store = configureStore({
    reducer: {
        verticalModal: verticalModalReducer,
        user: userReducer,
        filterBillboard: filterBillboardReducer,
        billboardData: billboardDataReducer,
        billboardForm: billboardFormReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


// const middlewares = [...getDefaultMiddleware()];
// if(process.env.NODE_ENV !== "production") middlewares.push(logger)



// export const store = configureStore({
//     reducer: {
//         form: formSliceReducer,
//         user: userSliceReducer,
//         faceRecog: faceRecogSliceReducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
// })
