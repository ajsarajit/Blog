import { Blog } from ".."

async function getData<T>():Promise<T> {
  const res = await fetch("http://localhost:8000/blogs")
  
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}

const Homedata =async () => {
  const  data = await getData<Blog[]>();
  console.log(data)
  
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
     
    </div>
  )
}

export default Homedata













// async function getData<T>():Promise<T> {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// const blogs = await getData<Blog[]>();





// export interface Root {
//   blogs: Blog[]
// }

// export interface Blog {
//   title: string
//   blogtext: string
// }
