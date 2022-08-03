import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "redux/slices/counterSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userSlice from "./slices/userSlice";

/*
* If you want to configure a different storage method like session storage
* you can modify the storage key to another value
*/
const counterPersistConfig = {
  key: 'counter',
  storage: storage,
}

const userPersistConfig = {
  key: 'user',
  storage: storage
}

export const store = configureStore({
  reducer: {
    counter: persistReducer(counterPersistConfig, counterSlice),
    user: persistReducer(userPersistConfig, userSlice)
    //More persistant/non-persistant reducers key values can be added in here
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)