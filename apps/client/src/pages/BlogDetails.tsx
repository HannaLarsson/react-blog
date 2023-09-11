import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BlogApiResponse } from "../types";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch<BlogApiResponse>('http://localhost:3000/blogs/' + id);

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { data && (
        <article>
          <h2>{ data.title as string }</h2>
          <p>Written by { data.author }</p>
          <div>{ data.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;