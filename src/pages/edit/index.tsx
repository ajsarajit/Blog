import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

const Index = () => {
    const router = useRouter();
    const { title, blogText, id } = router.query
    const [newTitle, setNewTitle] = useState(title)
    const [newblogText, setNewBlogText] = useState(blogText)

    const handleSubmit = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: newTitle,
                blogtext: newblogText
            }),
        })
            .then(response => response.json())
            .then(user => console.log(user));
            router.replace("/")
    }
    return (
        <div>
            <form>
                <input type="text" id="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} /> <br /> <br />
                <textarea name="textarea" id="blogtext" value={newblogText} onChange={(e) => setNewBlogText(e.target.value)}></textarea>
                <br /> <br />
                <button onClick={handleSubmit}>Submit</button>
                <button>
                    <Link href={{
                        pathname: '/post',
                        query: { title, blogText, id },
                    }}
                        as={`/post/${title}`}
                    >Cancel</Link>
                </button>
            </form>
        </div>
    )
}

export default Index
