import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "react-toastify";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import dynamic from "next/dynamic";
import Button from "../../components/ui/Button/index";
import HeadingText from "../../components/ui/HeadingText";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleEditorChange = ({ html, text }) => {
    setContent(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!title || !content || !tags) {
      toast.error("Please fill in all fields");
      return;
    }

    // Convert tags to lowercase and split by commas
    const lowercaseTags = tags
      .toLowerCase()
      .split(",")
      .map((tag) => tag.trim());

    const { data, error } = await supabase
      .from("blogs")
      .insert([{ title, content, tags: lowercaseTags }]);

    if (error) {
      console.error("Error:", error);
      toast.error("Error posting blog");
    } else {
      setTitle("");
      setContent("");
      setTags("");
      toast.success("Blog posted successfully");
    }
  };

  return (
    <div className="container mx-auto  px-5 lg:px-40">
      <HeadingText text="Write a New Blog" className='mb-6' />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <MdEditor
          value={content}
          placeholder="Insert Blog Content Here..."
          className="w-full border border-gray-300 rounded"
          style={{ height: "500px" }}
          renderHTML={(text) => (
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
          )}
          onChange={handleEditorChange}
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <Button
          type="submit"
          className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
        >
          Post Blog
        </Button>
      </form>
    </div>
  );
}
