"use client"
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface obj{
  title:"string",
  blogtext:"string",
  id:"string"
}

const Post = () => {
  const router = useRouter();
 
  const { title, blogText, id } = router.query;

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => console.log("User deleted"));
    router.push("/")
  };
  

  return (
    <div>
      <h1>Read Blogs</h1>
      <h3>{title}</h3>
      <p>{blogText}</p>
      <button>
        <Link href="/">Back</Link>
      </button>
      <button><Link href={{
        pathname:"/edit",
        query:{title,blogText,id}
      }}
      as={`/edit/${id}`}
      >Update</Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
