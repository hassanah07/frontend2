"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const Page = ({ params }) => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [contentTwo, setContentTwo] = useState("");
  const [contentThree, setContentThree] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [blogId, setBlogId] = useState();
  const [image, setImage] = useState("");
  const [content, setContent] = useState();
  const getBlog = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/specificdata`,
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ blogId: params.id })
      }
    );
    const data = await res.json();
    setHeading(data.heading);
    setContent(data.content);
    setContentTwo(data.contentTwo);
    setContentThree(data.contentThree);
    setBlogId(data.blogId);
    setTitle(data.title);
    setSlug(data.slug);
    setShortDesc(data.desc);
    setImage(data.image);
  };
  const editor = useRef(null);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
  ];
  const config = {
    readonly: false,
    height: "100px",
    width: "100%",
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
    imageDefaultWidth: 250,
    style: {
      background: "#27272E",
      color: "rgba(255,255,255,0.5)"
    }
  };
  const toastOption = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  };

  const router = useRouter();
  const logResult = async () => {
    let logResponse = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/getuserdata`,
      {
        cache: "no-cache",
        method: "POST", // or 'PUT'
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify()
      }
    );
    const userdata = await logResponse.json();
  };

  const handleChange = (e) => {
    if (e.target.name == "slug") {
      setSlug(e.target.value);
    } else if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "desc") {
      setShortDesc(e.target.value);
    } else if (e.target.name == "image") {
      setImage(e.target.value);
    } else if (e.target.name == "heading") {
      setHeading(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    const updateId = Math.round(Math.random() * 1000011119);
    const payload = {
      heading,
      blogId: params.id,
      content,
      contentTwo,
      contentThree,
      updateId,
      title,
      slug,
      desc: shortDesc,
      image
    };
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/blogpost/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
      }
    );
    res = await res.json();
    if (res.status == true) {
      toast.success(res.msg, toastOption);
      router.push("/admin/list");
    } else {
      toast.error(res.msg, toastOption);
    }
  };
  useEffect(() => {
    getBlog();
    logResult();
  }, []);
  return (
    <div className="pb-16">
      <ToastContainer />
      <div className="w-full py-2 px-2">
        <input
          value={heading}
          type="text"
          name="heading"
          id="heading"
          onChange={handleChange}
          placeholder="Blog heading"
          className="py-2 w-full text-slate-500"
          required
        />
      </div>
      <small className="text-center text-red-500">Section One</small>

      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />
      <small className="text-center text-red-500">Section Two</small>

      <JoditEditor
        ref={editor}
        value={contentTwo}
        tabIndex={1}
        config={config}
        onBlur={(newContent) => setContentTwo(newContent)}
        onChange={(newContent) => {}}
      />
      <small className="text-center text-red-500">Section Three</small>
      <JoditEditor
        ref={editor}
        value={contentThree}
        tabIndex={1}
        config={config}
        onBlur={(newContent) => setContentThree(newContent)}
        onChange={(newContent) => {}}
      />
      <div className="py-2"></div>

      <div className="w-full flex flex-wrap p-2">
        <div className="w-1/2 py-2 px-2">
          <input
            value={title.replace(/[^a-zA-Z0-9 ]/g, "")}
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            placeholder="Type Your Article's Title"
            className="py-2 w-full text-slate-500"
            required
          />
        </div>
        <div className="w-1/2 py-2 px-2">
          <input
            value={slug}
            type="text"
            name="slug"
            id="slug"
            onChange={handleChange}
            placeholder="Short Title"
            className="py-2 w-full text-slate-500"
            required
          />
        </div>
        <div className="w-full py-2 px-2">
          <input
            value={image}
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            placeholder="Paste your Image Link Here"
            className="py-2 w-full text-slate-500"
            required
          />
        </div>
        <div className="w-full py-2 px-2">
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            onChange={handleChange}
            value={shortDesc}
            placeholder="Write a short description for google SEO. You can copy Description from above written Article"
            className="py-2 w-full text-slate-500"
            required
          ></textarea>
        </div>
      </div>
      <div className="mx-4 flex items-center justify-center">
        <button
          onClick={handleSubmit}
          className="flex ml-0 text-slate-100 bg-yellow-500 border-0 py-2 px-14 focus:outline-none hover:bg-red-600 hover:text-slate-100 text-lg font-semibold text-center"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Page;
