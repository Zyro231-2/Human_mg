import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { useState } from "react";

export default function Card(props) {
    const { likedCourses, setLikedCourses, course } = props;
    const [copyText,secoptText]=useState(course.description)

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }

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
        <div key={course.id} className="relative h-[430px] w-[30%] bg-gray-700 rounded-md">
            <div className="">
                <div className="relative">
                    <img className="h-[60%] w-[100%] rounded-md" src={course.image.url} alt={course.image.alt} />
                </div>
                <div className="pl-2 ">
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
                    <h5 className="font-bold py-4 text-[20px]">{course.title}</h5>
                    <p className="card-title">
                        {course.description.length > 100 ? course.description.substr(0, 100)+"..." : course.description}
                    </p>
                    <div className="flex justify-center">
                    <button onClick={copyToClipboard} className="border-2 hover:border-gray-500 hover:text-gray-500 p-1 w-[200px] mt-3 items-center rounded-xl">Copy Description</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
