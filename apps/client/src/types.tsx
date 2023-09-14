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