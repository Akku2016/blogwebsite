import  "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost"> 
    <div className="singlePostWrapper">
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
     <h1 className="singlePostTitle">
      Lorem ipsum dolor  
      <div className="singlePostEdit">
      <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
      <i class=" singlePostIcon fa-solid fa-trash-can"></i>
      </div>
     </h1>

     <div className="singlePostInfo">
      <span>
        Author:
         <b className="singlePostAuthor">sgs</b>
      </span>
      <span>
        1 day ago
      </span>
     </div>
    <p className="singlePostDesc"> 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam doloremque, eum eius quas explicabo, autem nam accusamus dolorum quasi sunt reiciendis nostrum ipsum eos optio debitis voluptatum excepturi ullam? Ipsa.

    </p>
    </div>
    
    </div>
  )
}
