import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import ProfilePost from "../ProfilePost/ProfilePost";

const ProfileCard = () => {
    const [like, setLike] = useState(true);
    const {user} = useContext(AuthContext);
    const [profilePost, setProfilePost] = useState([])

    const url = `https://facebook-demo-server.vercel.app/posts?email=${user?.email}`
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setProfilePost(data);
      })
    },[url])

   
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://facebook-demo-server.vercel.app/posts/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your post has been deleted.", "success");
              }
              const remaining = profilePost.filter(post => post._id !== id)
              setProfilePost(remaining)
            });
        }
      });
    };

    
    return (
        <div className="pt-3 ">
     
      {
        profilePost.map(post => <ProfilePost key={post._id} post={post} handleDelete={handleDelete} />)
      }
    </div>
    );
};

export default ProfileCard;