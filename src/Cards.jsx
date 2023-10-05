import { useState } from "react";
import Card from "./Card";
import { toast } from "react-toastify";


export default function Cards(props) {
    let category=props.category;
    let courses=props.courses;
    const [likedCourses,setLikedCourses]=useState([])
    function getCourse() {
        if (category=="All") {
            let allCourses=[];    
            Object.values(courses).forEach(array=>{
                array.forEach(singleCourse=>{
                    allCourses.push(singleCourse);
                })
            })  
            return allCourses;
        }
        else{
        return courses[category];
       }
    }
    return(
        <div className="cards pt-2 pb-20 flex flex-row justify-center items-center flex-wrap text-white bg-gray-800 gap-x-3 gap-y-10">
            {getCourse().map((course)=>{
                return(
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                )
            })}
        </div>
    )
}