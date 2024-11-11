import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import ReactMarkdown from "react-markdown";
import Dropdown from "../../components/ui/filterDropdown";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetchBlogs();
    fetchTags();
  }, [selectedTags]);

  const fetchBlogs = async () => {
    let query = supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (selectedTags.length > 0) {
      query = query.contains("tags", selectedTags);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching blogs:", error);
    } else {
      setBlogs(data);
    }
  };

  const fetchTags = async () => {
    let { data, error } = await supabase.from("blogs").select("tags");

    if (error) {
      console.error("Error fetching tags:", error);
    } else {
      // Extract tags from all blog entries
      let allTags = data.flatMap((blog) => blog.tags);

      // Deduplicate tags (assuming tags are stored as an array of strings)
      let uniqueTags = Array.from(new Set(allTags));

      setTags(uniqueTags);
    }
  };

  return (
    <div className="container w-11/12 lg:w-10/12 mx-auto p-4">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">
        Explore Our{" "}
        <span className="text-indigo-600">Blogs</span>
      </h1>

      <div className="flex mb-4 md:flex-row-reverse">
        <div className="md:ml-auto">
          <Dropdown
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            label="Filter by Category"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="border rounded-lg overflow-hidden flex flex-col hover:bg-slate-100"
          >
            <div className="flex-grow p-4">
              <h2 className="text-2xl font-bold mb-2 capitalize">{blog.title}</h2>
              <hr />
              <p className="text-gray-600 my-4 text-sm">
                <ReactMarkdown className="prose prose-lg max-w-none text-sm">
                  {blog.content.substring(0, 50) + " .........."}
                </ReactMarkdown>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
