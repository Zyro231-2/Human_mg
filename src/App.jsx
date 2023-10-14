import React, { useEffect, useState } from "react"
import Filter from "./Filter"
import { filterData, apirUrl } from "./data"
import Cards from "./Cards"
import Spinner from "./Spinner"
import Footer from "./Footer"
import { toast } from "react-toastify"

function App() {
  const [courses, setcourses] = useState([])
  const [Loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].tittle)

  // To fetch the courses and store them in courses array not in objects
  async function fetchData() {
    try {
      setLoading(true)
      let response = await fetch(apirUrl)
      let data = await response.json()
      console.log(data.data)
      let allCourses = [] // creating one full and final array for all the categories
      Object.keys(data.data).forEach((key) => {
        // key is the category name
        data.data[key].forEach((singleCourse) => {
          singleCourse.category = key // adding the category field in the object
          allCourses.push(singleCourse)
        })
      })
      console.log(allCourses)
      setcourses(allCourses)
    } catch (error) {
      return <div>{error}/</div>
    }
    setLoading(false)
  }

  // to run in first render
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div
        className="bg-gray-800"
        style={{ position: "sticky", top: 0, zIndex: 2 }}>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div>
        {Loading ? (
          <Spinner />
        ) : category === "All" ? ( // if category is all then populate all
          <Cards
            courses={courses}
            category={category}
          />
        ) : (
          <Cards // if category is something else then use filter
            courses={courses.filter((each_course) => {
              return each_course.category === category // return each matched category course data
            })}
            category={category}
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
