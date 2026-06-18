import React, { useEffect, useRef, useState } from "react";

const BlogCard = ({ data, index }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.description, "text/html");
  const desc = doc.body.textContent || doc.body.innerText; // Get the plain text

  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(true);

  let truncatedContent = desc.slice(0, 300) + "...";
  index == 0
    ? (truncatedContent = desc.slice(0, 348) + "...")
    : index == 1
    ? (truncatedContent = desc.slice(0, 78) + "...")
    : index == 2
    ? (truncatedContent = desc.slice(0, 180) + "...")
    : index == 3
    ? (truncatedContent = desc.slice(0, 250) + "...")
    : index == 4
    ? (truncatedContent = desc.slice(0, 110) + "...")
    : index == 5
    ? (truncatedContent = desc.slice(0, 110) + "...")
    : index == 6
    ? (truncatedContent = desc.slice(0, 110) + "...")
    : index == 7
    ? (truncatedContent = desc.slice(0, 110) + "...")
    : "";
  return (
    <div
      ref={contentRef}
      className={` md:overflow-hidden${
        index === 0
          ? ""
          : index === 1
          ? ""
          : index === 2
          ? ""
          : index === 3
          ? ""
          : index === 4
          ? ""
          : index === 5
          ? ""
          : index === 6
          ? ""
          : index === 7
          ? ""
          : ""
      }`}
    >
      <div className="">
        <div className="clearfix">
          {/* Image with text wrapping around it */}
          <div style={{backgroundImage:`url(${data.image})`}}
            //src={data.image}
           // alt="Placeholder"
            className={`w-48 h-36 object-cover float-left mr-2 mb-2 rounded-lg bg-cover bg-center bg-no-repeat ${
              index === 0
                ? "md:w-full"
                : index === 1
                ? "md:w-full md:h-[6vw] bg-[5%_30%]"
                : index === 2
                ? "md:w-full md:h-[6vw] bg-[5%_60%]"
                : index === 3
                ? "md:w-full md:h-[6vw] bg-[5%_40%]"
                : index === 4
                ? "md:w-full md:h-[12vw] bg-[5%_10%]"
                : index === 5
                ? "md:w-[50%] md:h-[3vw] bg-[2%_2%]"
                : index === 6
                ? "md:w-[60%] md:h-[10vw]"
                : index === 7
                ? ""
                : ""
            }`}
          />

          {/* Text content */}
          <div>
            <h2 className=" text-xl font-semibold mb-2 text-justify font-pressuramonobold">
              {data.title}
            </h2>
            {/* <p
              className={`inline text-justify ${
                index === 0
                  ? "md:inline hidden"
                  : index === 1
                  ? "hidden"
                  : index === 2
                  ? "hidden"
                  : index === 3
                  ? ""
                  : index === 4
                  ? ""
                  : index === 5
                  ? ""
                  : index === 6
                  ? ""
                  : index === 7
                  ? ""
                  : ""
              }`}
            >
              {data.abstract}
            </p> */}
            <button className="font-bold  rounded-lg text-[#141e76] font-pressuramono absolute right-2 bottom-0">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
