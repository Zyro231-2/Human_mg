import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { useState } from "react";

export default function Card({  likedCourses, setLikedCourses, course:{id, title, image:{url, alt}, description} }) {
  const [copyText, secoptText] = useState(description);

  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  };

  function clickHandler() {
    if (likedCourses.includes(id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== id));
      toast.warning("Liked Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([id]);
      } else {
        setLikedCourses([...likedCourses, id]);
      }
      toast.success("Liked Success");
    }
  }

  return (
    <div
      key={id}
      className="relative overflow-hidden min-h-[400px] min-w-[400px] bg-gray-700 rounded-md"
    >
      <div className="min-h-fit">
        <div className="relative h-[60%]">
          <img
            className="h-[100%] w-[100%] rounded-md"
            src={url}
            alt={alt}
          />
          <div className=" relative bottom-5">
            {likedCourses.includes(id) ? (
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
        <div className="min-h-fit flex flex-col gap-2 py-3">
          <h5 className="font-bold  text-[20px] pl-2  text-clip line-clamp-1">{title}</h5>
          <p className="pl-2 pr-1 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={copyToClipboard}
        className="bottom-0 border-t-2 py-2  bg-white text-black mt-5 hover:bg-slate-700 hover:text-white p-1 w-full  pl-0 items-center "
      >
        Copy Description
      </button>
    </div>
  );
}
