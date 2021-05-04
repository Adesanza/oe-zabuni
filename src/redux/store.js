import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import billboardDataReducer from './billboard-data/billboardDataReducer';
import dashboardReducer from './dashboard/dashboardReducer';
import filterBillboardReducer from './filter-Billboard/filterBillboardReducer';
import billboardFormReducer from './form/billboardFormReducer';
import userReducer from './user/userReducer';
import verticalModalReducer from './vertical-modal/verticalModalReducer';
import overheadModalReducer from './overhead-modal/overheadModalReducer';
import confirmationPopupReducer from './confirmation/confirmationPopupReducer';
import alertPopupReducer from './alert/alertPopupReducer';

export const store = configureStore({
  reducer: {
    verticalModal: verticalModalReducer,
    user: userReducer,
    filterBillboard: filterBillboardReducer,
    billboardData: billboardDataReducer,
    billboardForm: billboardFormReducer,
    dashboard: dashboardReducer,
    overheadModal: overheadModalReducer,
    confirmationPopup: confirmationPopupReducer,
    alertContent: alertPopupReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
