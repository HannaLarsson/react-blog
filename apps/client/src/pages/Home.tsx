import { BlogList } from '../components/BlogList/BlogList';
import useFetch from "../hooks/useFetch";
import { BlogsApiResponse } from '../types';

export const Home = () => {
  const { data: blog, isPending, error } = useFetch<BlogsApiResponse>('api/blogs');
  return ( 
    <div className="home">
      { error && <div> {error} </div>}
      { isPending && <div>Loading...</div>}
      { blog && <BlogList blogs={blog} title="All Blogs" /> }
    </div>
   );
}
