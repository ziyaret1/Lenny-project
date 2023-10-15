import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import authReducer from '../reducer/Auth/authReducer';
import productsReducer from '../reducer/Products/productsReducer';
import categoryReducer from '../reducer/Categories/categoryReducer';

//! PERSISTED AUTH
const persistConfig = {
  key: "root",
  storage, 
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer)


//! USE IN STORE
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    categories: categoryReducer,
    products: productsReducer,
  },
})

export const persistor = persistStore(store)
