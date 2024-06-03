import Addpost from "@/component/addpost/addpost"
import Link from "next/link"

const index = () => {
  return (
    <div>
      <h1>Add a Wonderful Blog</h1>
      <Addpost />
      <button><Link href="/">Cancel</Link></button>
    </div>
  )
}

export default index
