import { combineReducers, configureStore } from "@reduxjs/toolkit"
import NavBarSlice from "./Slices/navBarSlice"
import { stockApi } from "../Api/stockApi"

const store = configureStore({
  reducer: combineReducers({
    navBar: NavBarSlice,
    [stockApi.reducerPath]: stockApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(stockApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store