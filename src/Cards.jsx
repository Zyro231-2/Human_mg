import React, { useState } from 'react';
import Card from './Card';

export default function Cards(props) {
  const { category, courses, searchTerm } = props;

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourse() {
    if (!courses || Object.keys(courses).length === 0) {
      return [];
    }

    let filteredCourses = [];
    if (category === 'All') {
      Object.values(courses).forEach(array => {
        filteredCourses.push(...array);
      });
    } else {
      filteredCourses = courses[category] || [];
    }

    // Filter based on the search term
    if (searchTerm) {
      filteredCourses = filteredCourses.filter(course => {
        return course.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    return filteredCourses;
  }

  const courseList = getCourse();

  return (
    <div className="pt-2 pb-20 flex justify-center items-center flex-wrap text-white bg-gray-800 gap-x-3 gap-y-10">
      {courseList.length > 0 ? (
        courseList.map(course => (
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
}
