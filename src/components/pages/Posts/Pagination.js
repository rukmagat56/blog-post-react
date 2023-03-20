import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";
const Pagination = () => {
  //pagination variable
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const posts = postData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(postData.length / postsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // getting post data
  //[] means empty array
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res) => {
      setPostData(res.data);
      // console runs faster than axios so we use .then to console which only execute after data fetch complete
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Posts</h1>
      <div className=" w-4/5 py-10 m-auto flex  justify-center align-middle flex-wrap gap-10 ">
        {
          // posts && used to check if posts has value
          Object.keys(posts).length
            ? posts.map((post) => {
                return (
                  <div
                    key={post.id}
                    className="card w-[330px] p-3 shadow-lg rounded-lg flex gap-5 flex-col"
                  >
                    <Link to={`/posts/${post.id}`}>
                      {post.featured_src ? (
                        <img
                          src={post.featured_src}
                          alt={post.title.rendered}
                        />
                      ) : (
                        ""
                      )}
                      <h2 className="text-lg font-bold">
                        {post.title.rendered}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </Link>
                  </div>
                );
              })
            : "Loading..."
        }
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center pb-5">
          <li className="page-item">
            <a className="page-link" href="#" onClick={prePage}>
              Previous
            </a>
          </li>
          {numbers.map((n, i) => {
            return (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            );
          })}

          <li className="page-item">
            <a className="page-link" onClick={nextPage} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};
export default Pagination;
