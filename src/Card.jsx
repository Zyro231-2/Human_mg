import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { useState } from "react";

export default function Card(props) {
  const [copied, setCopied] = useState(false);
  const { likedCourses, setLikedCourses, course } = props;
  const [copyText, setCopyText] = useState(course.description);

  const copyToClipboard = () => {
    copy(copyText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses([...likedCourses, course.id]);
      }
      toast.success("Liked Success");
    }
  }

  return (
    <div
      key={course.id}
      className="relative overflow-hidden min-h-[400px] max-h-[450px] md:w-[30%] sm:mx-1 mx-3 max-w-[400px] bg-gray-700 rounded-md"
    >
      <div>
        <div className="relative">
          <img
            className="h-[60%] w-[100%] rounded-md"
            src={course.image.url}
            alt={course.image.alt}
          />
          <div className="relative bottom-5">
            {likedCourses.includes(course.id) ? (
              <FcLike
                onClick={clickHandler}
                className="cursor-pointer p-1 absolute top-[48%] text-4xl right-5 bg-white rounded-[50%]"
              />
            ) : (
              <FcLikePlaceholder
                onClick={clickHandler}
                className="cursor-pointer p-1 absolute top-[48%] text-4xl right-5 bg-white rounded-[50%]"
              />
            )}
          </div>
        </div>
        <div>
          <h5 className="font-bold py-4 text-[20px] pl-2">{course.title}</h5>
          <p className="card-title pl-2 pr-1">
            {course.description.length > 100
              ? course.description.substr(0, 100) + "..."
              : course.description}
          </p>
        </div>
      </div>

      <button
        onClick={copyToClipboard}
        className={`absolute bottom-0 border-t-2 py-2 text-xl font-semibold bg-white text-black mt-5 hover:bg-slate-700 hover:text-white p-1 w-full pl-0 items-center ${
          copied ? "bg-green-600 text-white hover:bg-green-600 hover:text-white" : ""
        }`}
      >
        {copied ? "Copied" : "Copy Description"}
      </button>
    </div>
  );
}
