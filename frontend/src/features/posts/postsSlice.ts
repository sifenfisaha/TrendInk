import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Post, User } from "../../types/types";

interface PostState {
  list: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  list: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.list.unshift(action.payload);
      },
      prepare: (post: {
        author: User;
        title: string;
        body: string;
        hashtags: string[];
      }) => {
        return {
          payload: {
            id: nanoid(),
            author: post.author,
            title: post.title,
            body: post.body,
            hashtags: post.hashtags,
            point: 0,
          },
        };
      },
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.list.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    incrementPoints: (state, action: PayloadAction<string>) => {
      const post = state.list.find((post) => post.id === action.payload);
      if (post) {
        post.point += 1;
      }
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
  deletePost,
  updatePost,
  incrementPoints,
} = postSlice.actions;

export default postSlice.reducer;
