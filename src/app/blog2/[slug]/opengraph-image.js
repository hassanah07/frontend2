import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "guidewale blogs";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/jpg";

// Image generation
export default async function Image({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_SSR}/api/blogpost/slugview`,
    {
      //   cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug: params.slug })
    }
  );
  let blogPost = await data.json();
  //   blogPost = blogPost.image;
  //   console.log(blogPost);

  return new ImageResponse(
    (
      <div tw="relative w-full h-full flex items-center justify-center">
        <div tw="absolute flex inset-0">
          <img src={blogPost?.image} alt="blog_image" />
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-xl font-bold">GuideWale.com</div>
        </div>
      </div>
    ),
    size
  );
}
