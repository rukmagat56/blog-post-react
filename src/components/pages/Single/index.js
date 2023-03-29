// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import WpComments from "react-wordpress-comments";

// const Single = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const loggedInUser = sessionStorage.getItem("authenticated");
//     if (!loggedInUser) {
//       navigate("/login");
//     }
//   }, []);
//   const { id } = useParams(); //
//   const [post, setPost] = useState({});
//   const [cmt, setCmt] = useState([]);
//   useEffect(() => {
//     let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
//     let cmtUrl = `${process.env.REACT_APP_API_ROOT}/comments?post=${id}`;
//     axios
//       .all([axios.get(url), axios.get(cmtUrl)])
//       .then(
//         axios.spread((res, cmtRes) => {
//           console.log("post Rest", res);
//           console.log("cmt Rest", cmtRes);
//           setPost(res.data);
//           setCmt(cmtRes.data);
//         })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <>
//       {Object.keys(post).length ? (
//         <div className=" py-20 px-28 flex flex-col  m-auto max-w-4xl  ">
//           <div>
//             <h1 className="text-2xl font-bold mb-2 capitalize">
//               {post.title.rendered}
//             </h1>
//           </div>
//           <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

//           <div className="mt-20 ">
//             <h2 className="text-4xl capitalize font-bold">comment section</h2>
//             {Object.keys(cmt).length
//               ? cmt.map((cmts) => {
//                  return( <div key={cmts.id} className="card  mt-2 p-8 text-2xl">
//                     <h2 className="mb-3 font-bold">   {cmts.author_name}</h2>
//                     {/* <h2 className="mb-3 text-xl">{cmts.date}</h2> */}
//                     <p
//                         dangerouslySetInnerHTML={{
//                           __html: cmts.content.rendered,
//                         }}
//                       />
//                       </div>
                
//                ) })
//               : "No comments"}
//           </div>
//         </div>
//       ) : (
//         "No post here.."
//       )}
//     </>
//   );
// };

// export default Single;
