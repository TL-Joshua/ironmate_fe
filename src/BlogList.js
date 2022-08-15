const BlogList = ({ blogs, title, handleDelete}) => {

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(x => (
        <div className="blog-preview" key={x.id} >
          <h2>{ x.title }</h2>
          <p>Written by { x.author }</p>
          <button onClick={() => {
            handleDelete(x.id)
          }}>Delete post</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;