import Article from "./artikel";
import posts from "../artikel.json"
function HomeArtikel(){
    return(
        <>
            <h1>Simple Blog</h1>
            {posts.map((blog)=>(
                <Article title={blog.tags} name={blog.title}  />
            ))}
        </>
    )
}

export default HomeArtikel;