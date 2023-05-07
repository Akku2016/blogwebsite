import './post.css';

export default function Post() {
  return (
     <div className="post">
        <img className='postImg'
        src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/11/How-to-post-a-Live-Photo-on-Instagram1.jpg?fit=900%2C600&ssl=1" alt="gh"/>
          <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet  
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
          </div>
          <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid velit molestiae similique commodi cum, eligendi nesciunt ad nam corrupti exercitationem aperiam nihil ea quo quam? Iste incidunt quas facere!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid velit molestiae similique commodi cum, eligendi nesciunt ad nam corrupti exercitationem aperiam nihil ea quo quam? Iste incidunt quas facere!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid velit molestiae similique commodi cum, eligendi nesciunt ad nam corrupti exercitationem aperiam nihil ea quo quam? Iste incidunt quas facere!
          </p>
    </div>
  )
}
