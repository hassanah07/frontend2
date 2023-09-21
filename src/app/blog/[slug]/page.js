import AdSense from "@/app/components/Adsense";
import AdSenseBlogMiddleOne from "@/app/components/AdsenseBlogMiddleOne";
import AdSenseBlogMiddleThree from "@/app/components/AdsenseBlogMiddleThree";
import AdSenseBlogMiddleTwo from "@/app/components/AdsenseBlogMiddleTwo";
import AdSenseBlogSideFour from "@/app/components/AdsenseBlogSideFour";
import AdSenseBlogSideOne from "@/app/components/AdsenseBlogSideOne";
import AdSenseBlogSideThree from "@/app/components/AdsenseBlogSideThree";
import AdSenseBlogSideTwo from "@/app/components/AdsenseBlogSideTwo";
import Quicklink from "@/app/components/Quicklink";
import React from "react";

export async function generateMetadata({ params }, parent) {
  const id = params.id;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_SSR}/api/blogpost/slugview`,
    {
      // cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug: params.slug })
    }
  );
  const blogPost = await data.json();

  return {
    title: blogPost.title,
    description: blogPost.desc,
    metadataBase: new URL(`${process.env.FRONTEND_LINK}`),
    alternates: {
      canonical: `${process.env.FRONTEND_LINK}/blog/${blogPost.slug}`
      // languages: {
      //   "en-US": `${process.env.FRONTEND_LINK}/en-US/blog/${blogPost.slug}`,
      // },
    }
  };
}

const Page = async ({ params }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_SSR}/api/blogpost/slugview`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug: params.slug })
    }
  );
  const blogPost = await data.json();
  const nameOne = "Home";
  const linkOne = process.env.FRONTEND_LINK;
  const nameTwo = blogPost.category;
  const linkTwo = `${process.env.FRONTEND_LINK}/${blogPost.category}`;
  const nameThree = blogPost.title;
  const linkThree = `${process.env.FRONTEND_LINK}/blog/${blogPost.slug}`;

  return (
    <>
      <Quicklink
        linkOne={linkOne}
        linkTwo={linkTwo}
        linkThree={linkThree}
        nameOne={nameOne}
        nameTwo={nameTwo}
        nameThree={nameThree}
      />
      <div className="pb-14 text-gray-600 body-font bg-green-100 dark:bg-slate-800">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-0 md:w-1/4 hidden md:block">
                <div className="min-h-screen rounded-lg overflow-hidden">
                  <AdSenseBlogSideOne /> <br />
                  <AdSenseBlogSideTwo /> <br />
                </div>
              </div>
              <div className="p-0 md:w-2/4">
                <div className="min-h-screen rounded-lg overflow-hidden">
                  <div className="title dark:text-slate-50 text-black text-2xl font-semibold text-center">
                    {blogPost.heading}
                  </div>
                  {/* section One  11111111111*/}
                  <div
                    className="text-justify mx-5 text-black dark:text-slate-100 adsbygoogle`"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />
                  {/* section Two 222222222222  */}
                  <AdSenseBlogMiddleTwo />
                  {blogPost.contentTwo != null && (
                    <div
                      className="text-justify mx-5 text-black dark:text-slate-100 adsbygoogle`"
                      dangerouslySetInnerHTML={{ __html: blogPost.contentTwo }}
                    />
                  )}
                  {/* section Three 3333333333  */}
                  <AdSenseBlogMiddleOne />

                  {blogPost.contentThree != null && (
                    <div
                      className="text-justify mx-5 text-black dark:text-slate-100 adsbygoogle`"
                      dangerouslySetInnerHTML={{
                        __html: blogPost.contentThree
                      }}
                    />
                  )}

                  <div className="flex flex-row justify-center items-center">
                    <p className="font-extrabold capitalize dark:bg-slate-500 text-slate-500 dark:text-slate-100 bg-gray-200 text-center m-2 p-2 w-[100%] md:w-[50%] rounded-xl">
                      Verified By: Admin
                    </p>
                  </div>
                  <AdSenseBlogMiddleThree />
                </div>
              </div>
              <div className="p-0 md:w-1/4 hidden md:block">
                <div className="min-h-screen rounded-lg overflow-hidden">
                  <AdSenseBlogSideThree /> <br />
                  <AdSenseBlogSideFour /> <br />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="flex flex-row min-h-screen justify-center items-center pt-10">
          <div
            className="text-justify mx-5 w-[100vw] md:w-[50%] text-black dark:text-slate-100 adsbygoogle`"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="font-extrabold capitalize dark:bg-slate-500 text-slate-500 dark:text-slate-100 bg-gray-200 text-center m-2 p-2 w-[100%] md:w-[50%] rounded-xl">
            Verified By: Admin
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Page;
// export default Page({ params });
