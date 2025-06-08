interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
}

interface Post {
  id: string;
  author: User;
  title: string;
  body: string;
  hashtags: string[];
  point: number;
}

interface AppState {
  auth: {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
  };
  posts: {
    list: Post[];
    loading: boolean;
    error: string | null;
  };
  postDetail: {
    post: Post | null;
    loading: boolean;
    error: string | null;
  };
  profile: {
    user: User | null;
    post: Post[];
    loading: boolean;
    error: string | null;
  };
  theme: "light" | "dark";
}
