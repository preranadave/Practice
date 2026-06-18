import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewFullBlog = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  let Description = useRef();
  const Background = {
    backgroundColor: "#ede9e4",
    backgroundRepeat: "repeat",

    backgroundImage: `url("https://www.transparenttextures.com/patterns/rice-paper.png")`,

    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  };

  const [Blog, setBlog] = useState({});
  let parser = new DOMParser();
  const [doc, setdoc] = useState("");
  const [desc, setdesc] = useState("");
  // let doc = "";
  // let desc = "aa";

  useEffect(() => {
    axios.get(`http://localhost:8001/blogs/${id}`).then((response) => {
      setBlog(response.data);
      //    console.log(document.getElementById("Description"));
      document.getElementById("Description").innerHTML = Blog.description;

      // setdoc(parser.parseFromString(Blog.description, "text/html"))
      //setdesc(doc.body.textContent || doc.body.innerText); // Get the plain text
    });
  }, [Blog]);

  return (
    <div style={Background} className="p-3 pb-14">
      <div className=" border-b-[5px] border-double  border-black p-1  md:col-span-9 ">
        <h1 className="md:text-4xl text-3xl tracking-wider  font-AncientMedium text-center">
          Daily Mental Health Blogs
        </h1>
      </div>

      <div className=" border-[#2F2F2E] border-[5px] translate-y-5 w-full"></div>
      <div className=" border-[#2F2F2E] border-[2px] translate-y-1 w-full"></div>

      <div className="h-fit  overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }} // Start off-screen (below the container)
          animate={{ y: "10%" }} // Animate to the original position (0)
          transition={{
            ease: [0.87, 0, 0.13, 1],
            stiffness: 120,
            damping: 25,
            duration: 1.5, // Control the duration of the animation
          }}
          className="text-[6vw] mt-5  md:my-0  md:text-[4vw] flex items-center justify-center text-[#282828] font-DarlothesGrunge text-center"
        >
          {Blog.title}
        </motion.h2>
      </div>
      <div className=" border-[#2F2F2E] border-[5px] translate-y-1 w-full"></div>

      <div className=" border-[#2F2F2E] border-[2px] translate-y-2 w-full"></div>
      <img
        //style={{ backgroundImage: `url(${Blog.image})` }}
        src={Blog.image}
        // alt="Placeholder"
        className={`w-full h-[28vw]  mb-2 rounded-lg object-cover  bg-no-repeat my-5 `}
      ></img>
      <div className="h-fit overflow-hidden bg-[#282828] text-white md:pb-2  pb-10 px-4">
        <motion.h2
          initial={{ y: "100%" }} // Start off-screen (below the container)
          animate={{ y: "10%" }} // Animate to the original position (0)
          transition={{
            ease: [0.87, 0, 0.13, 1],
            stiffness: 120,
            damping: 25,
            duration: 1.5, // Control the duration of the animation
          }}
          className="text-[6vw]  md:my-0  md:text-[1.2vw] flex font-Leander text-justify"
        >
          {Blog.abstract}
        </motion.h2>
      </div>
      <div
        id="Description"
        className="md:columns-3  pt-3 pb-10 px-5 indent-5 first-letter:uppercase font-Leander first-letter:text-3xl first-letter:font-bold first-letter:text-black
   "
      ></div>
      <div className="group h-[40px] overflow-hidden">
        <div className="bg-black w-[110px] h-0  -z-2 ori  rounded absolute right-8  transition-all ease-in-out duration-700  group-hover:h-[41px]"></div>
        <button onClick={()=>{
            navigate("/")
        }} className="absolute  right-8 p-2  border-[1px] rounded border-black outline-none font-Leander text-white font-semibold">
          Other Blogs
        </button>
      </div>
    </div>
  );
};

export default ViewFullBlog;
