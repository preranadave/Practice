// import React from "react";
// import BlogCard from "./BlogCard";

// const BlogsHome = () => {
//   const Background = {
//     backgroundColor: "#ede9e4",
//     backgroundImage: `url("https://www.transparenttextures.com/patterns/exclusive-paper.png")`,

//     /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
//   };

//   const sections = [
//     { title: "Section 1", content: "Content for Section 1" },
//     { title: "Section 2", content: "Content for Section 2" },
//     { title: "Section 3", content: "Content for Section 3" },
//     { title: "Section 4", content: "Content for Section 4 (Wide)" },
//     { title: "Section 5", content: "Content for Section 5" },
//     { title: "Section 5", content: "Content for Section 6" },
//     { title: "Section 5", content: "Content for Section 7" },
//     { title: "Section 5", content: "Content for Section 8" },
//   ];
//   return (
//     <>
//       <div style={Background} className="p-3  h-screen overflow-y-hidden">
//         <div className=" border-b-[5px] border-double  border-black p-1  md:col-span-9 ">
//           <h1 className="text-4xl tracking-wider  font-AncientMedium text-center">
//             Daily Mental Health Blogs
//           </h1>
//         </div>
//         <div className="bg-[#2F2F2E] md:col-span-9 my-2">
//           <h2 className="text-2xl  pt-4 flex items-center justify-center text-[#FAF8E9] font-tempting text-center">
//             It's Okay To Not to Be Okay
//           </h2>
//           <div className=" border-[#2F2F2E] border-[5px] translate-y-4 w-full"></div>

//           <div className=" border-[#2F2F2E] border-[2px] translate-y-5 w-full"></div>
//         </div>
//         <div className="grid md:grid-cols-7 md:grid-auto-rows-min overflow-y-hidden gap-2 mt-9">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className={`border relative border-[#2F2F2E] p-4 overflow-hidden ${
//                 index === 0
//                   ? "row-start-3 md:row-span-4  md:col-span-2 bg-[#0e3307]"
//                   : index === 1
//                   ? "md:row-span-2 md:col-span-2"
//                   : index === 2
//                   ? "md:col-span-3 md:row-span-2"
//                   : index === 3
//                   ? "md:col-span-3 md:row-span-2"
//                   : index === 4
//                   ? "md:col-span-2 md:row-span-3"
//                   : index === 5
//                   ? "md:row-span-2 md:col-span-1"
//                   : index === 6
//                   ? "md:row-span-2 md:col-span-4"
//                   : index === 7
//                   ? "md:col-span-2"
//                   : ""
//               }`}
//             >
//                 <BlogCard key={index} data={section} index={index}></BlogCard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogsHome;
