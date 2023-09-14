import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BlogApiResponse } from "../types";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch<BlogApiResponse>('api/blogs1');

  return ( 
    <div className="blog-details">
      { id }
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { data && (
        <article>
          <h2>{ data.title }</h2>
          <p>Written by { data.author }</p>
          <div>{ data.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;