import React, { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import { IoMdArrowForward } from "react-icons/io";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogsHome = () => {
  const Background = {
    backgroundColor: "#ede9e4",
    backgroundImage: `url("https://www.transparenttextures.com/patterns/rice-paper.png")`,

    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  };

  const [blogData, setblogData] = useState([]);
  const navigate=useNavigate();
  // const sections = [
  //   { title: "Section 1", content: "Content for Section 1" },
  //   { title: "Section 2", content: "Content for Section 2" },
  //   { title: "Section 3", content: "Content for Section 3" },
  //   { title: "Section 4", content: "Content for Section 4 (Wide)" },
  //   { title: "Section 5", content: "Content for Section 5" },
  //   { title: "Section 5", content: "Content for Section 6" },
  //   { title: "Section 5", content: "Content for Section 7" },
  //   { title: "Section 5", content: "Content for Section 8" },
  // ];
  useEffect(() => {
    axios.get("http://localhost:8001/blogs").then((response) => {
      setblogData(response.data);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    else{
      navigate("/")
    }
  };

  return (
    <>
      <div style={Background} className="p-3 h-auto  md:h-screen md:overflow-y-hidden">
        <div className=" border-b-[5px] border-double  border-black p-1  md:col-span-9 ">
          <h1 className="md:text-4xl text-3xl tracking-wider  font-AncientMedium text-center">
            Daily Mental Health Blogs
          </h1>
        </div>
        <div className="bg-[#D04A2E]   mt-1 h-16  overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }} // Start off-screen (below the container)
            animate={{ y: 0 }} // Animate to the original position (0)
            transition={{
              ease: [0.87, 0, 0.13, 1],
              stiffness: 120,
              damping: 25,
              duration: 1.5, // Control the duration of the animation
            }}
            className="	text-[6vw] my-4 md:my-0 md:text-[3vw] flex items-center justify-center text-[#eaeae6] font-DarlothesGrunge text-center"
          >
            It's Okay To Not to Be Okay
          </motion.h2>
        </div>

        <div className=" border-[#2F2F2E] border-[5px] translate-y-1 w-full"></div>

        <div className=" border-[#2F2F2E] border-[2px] translate-y-2 w-full"></div>
        <div className="grid md:grid-cols-7 md:grid-rows-7 h-[90%] md:overflow-y-hidden gap-2 mt-5">
          {currentPosts.map((section, index) => (
            <motion.div
              initial={{ scale: 0 }} // Start off-screen (below the container)
              animate={{ scale: "100%" }} // Animate to the original position (0)
              // whileHover={{ scale: "101%" }} // Scale up when hovered
              transition={{
                stiffness: 120,
                damping: 25,
                ease: [0.16, 1, 0.3, 1],
                duration: 1.5, // Control the duration of the animation
              }}
              onClick={() => {
               navigate(`/full-blog/${section.id}`)
              }}
              key={index}
              className={`border rounded cursor-pointer relative border-[#2F2F2E] p-4 md:overflow-hidden ${
                index === 0
                  ? "row-start-3 md:row-span-4  md:col-span-2"
                  : index === 1
                  ? "md:row-span-2 md:col-span-2"
                  : index === 2
                  ? "md:col-span-3 md:row-span-2"
                  : index === 3
                  ? "md:col-span-3 md:row-span-2"
                  : index === 4
                  ? "md:col-span-2 md:row-span-3"
                  : index === 5
                  ? "md:row-span-2 md:col-span-1"
                  : index === 6
                  ? "md:row-span-2 md:col-span-4"
                  : index === 7
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <BlogCard key={index} data={section} index={index}></BlogCard>
            </motion.div>
          ))}

          <motion.div
           onClick={()=>{nextPage()}}
            initial={{ x: "100%" }} // Start off-screen (below the container)
            animate={{ x: 0 }} // Animate to the original position (0)
            transition={{
              ease: [0.87, 0, 0.13, 1],
              stiffness: 120,
              damping: 25,
              duration: 1, // Control the duration of the animation
            }}
            className="border rounded cursor-pointer relative font-PortraitBold group border-[#2F2F2E] p-2 text-center overflow-hidden md:w-[27.7vw] bg-[#2F2F2E] text-white text-6xl flex justify-between"
          >
            <h3 className="font-AncientMedium">{currentPage < totalPages ? "More Blogs" : "Home"}</h3>
            <motion.div
           
              className="h-1 bg-blue-500"
              initial={{ width: 0 }} // Line starts with 0 width (invisible)
              whileHover={{ width: "100%" }} // Expands to 100% on hover
              transition={{ type: "spring", stiffness: 300, damping: 25 }} // Smooth spring animation
            />
            <span className=" top-0 left-0 bg-black rounded-full h-16  w-16 transition-all ease-in-out duration-500">
              <IoMdArrowForward
                color="white"
                size={60}
                className=" group-hover:-rotate-[45deg]  rotate-0 transition-all  ease-in-out duration-500"
              />
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogsHome;
