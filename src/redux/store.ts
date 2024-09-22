import { configureStore } from '@reduxjs/toolkit'
import { configApi } from './config.service';
import { rsvpApi } from './rsvp.service';

export const store = configureStore({
  reducer: {
    [configApi.reducerPath]: configApi.reducer,
    [rsvpApi.reducerPath]: rsvpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(configApi.middleware)
      .concat(rsvpApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch