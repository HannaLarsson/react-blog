export interface Blog {
  title: string,
  body: string,
  author: string,
  id: number,
}

export interface BlogListProps {
  blogs: Blog[],
  title: string,
};

export interface BlogApiResponse {
  data?: Blog,
  error: string,
  isPending: boolean,
};

export interface BlogsApiResponse {
  data?: Blog[],
  error: string,
  isPending: boolean,
};