import { useState } from "react"
import styles from "./addpost.module.css"
import { useRouter } from "next/router";

const url = "http://localhost:8000/blogs"

const Addpost = () => {

    const router = useRouter();

    const handelSubmit = (e:any) => {
      e.preventDefault();
      fetch(url, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           title: e.target.title.value,
           blogtext: e.target.blogtext.value
        })
    })
      router.replace("/");
    };

  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input className={styles.input} type="text" id="title" placeholder="Write the title"/> <br /> <br />
            <textarea  className={styles.textarea} name="area" id="blogtext" placeholder="Write your Blog here" ></textarea><br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Addpost
