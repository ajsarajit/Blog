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
  //console.log(router.query);
  const { title, blogText, id } = router.query;

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => console.log("User deleted"));
    router.push("/")
  };


  
  const handleUpdate = (e:any) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: e.target.title,
    blogtext: e.target.blogtext
 }),
})
.then(response => response.json())
.then(user => console.log(user));
  }

  return (
    <div>
      <h1>Read Blogs</h1>
      <h3>{title}</h3>
      <p>{blogText}</p>
      <button>
        <Link href="/">Back</Link>
      </button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
