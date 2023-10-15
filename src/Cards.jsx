import { useState } from "react";
import Card from "./Card";
import { toast } from "react-toastify";
import { useEffect } from "react";


export default function Cards({category, courses}) {    
    const [likedCourses,setLikedCourses]=useState([])
    
    return(
        <div className="pl-10 pr-10 pt-2 pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center place-items-center text-white bg-gray-800 gap-10 gap-x-10">
            {courses.map((course)=>{
                return(
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                )
            })}
        </div>
    )
}