import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { supabase } from "../../lib/supabaseClient";

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();
    if (error) console.error("Error:", error);
    else setBlog(data);
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="mx-auto w-11/12 lg:w-10/12 px-4 py-8">
      <h1 className="text-3xl lg:text-6xl font-bold mb-4 capitalize">{blog.title}</h1>
      <p className="text-sm">
        Published on : {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>
      
      <div className=" mt-10 bg-slate-100 rounded-lg p-8 w-full mx-auto block">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          className="prose prose-lg max-w-none w-full text-justify"
        >
          {blog.content}
        </ReactMarkdown>
      </div>
      <div className="mt-2 flex items-center text-gray-600">
        <p className="flex-1">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
