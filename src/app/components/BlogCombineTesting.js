import React from "react";
import Pagenumber from "./Pagenumber";
import BloglistTesting from "./BlogListTesting";

const BlogCombineTesting = ({ blogs, pageNumbers, myPage }) => {
  return (
    <>
      <section className="text-gray-600 body-font pb-14 bg-green-100 dark:bg-slate-800 min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <BloglistTesting blogs={blogs} />
          <div className="py-14">
            <div className="flex justify-center items-center align-bottom">
              <Pagenumber pageNumbers={pageNumbers} myPage={myPage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCombineTesting;
