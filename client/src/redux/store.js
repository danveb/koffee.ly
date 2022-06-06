import { configureStore, combineReducers } from "@reduxjs/toolkit"; 
import cartReducer from "./cartSlice"; 
import userReducer from "./userSlice"; 

// Redux-Persist 
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"; 
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

// combineReducers
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer }); 
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer: {
    //     cart: cartReducer, 
    //     user: persistedReducer, 
    // }, 
    // combineReducers
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}); 

export let persistor = persistStore(store);