import { BlogList } from '../components/BlogList';
import useFetch from "../hooks/useFetch";
import { BlogsApiResponse } from '../types';

export const Home = () => {
  const { data: blog, isPending, error } = useFetch<BlogsApiResponse>('http://localhost:8000/blogs');
  return ( 
    <div className="home">
      { error && <div> {error} </div>}
      { isPending && <div>Loading...</div>}
      { blog && <BlogList blogs={blog} title="All Blogs" /> }
    </div>
   );
}
