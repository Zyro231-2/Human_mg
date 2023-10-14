import React, { useEffect, useState } from "react"
import Filter from "./Filter"
import { filterData, apirUrl } from "./data"
import Cards from "./Cards"
import Spinner from "./Spinner"
import Footer from "./Footer"
import { toast } from "react-toastify"
import SearchBox from "./SearchBox"
import { data } from "autoprefixer"

function App() {
  const [courses, setcourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [Loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].tittle)
  const [searchValue, setSearchValue] = useState("")

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

      setcourses(allCourses)

    } catch (error) {
      return <div>{error}/</div>
    }
    setLoading(false)
  }

  const handleSearchClick = () => {
    if (courses) {
      if (searchValue) {
        const filteredCourses = courses.filter((course) => {
          if (course.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return course;
          }
        })

        setFilteredCourses(filteredCourses);
      }
    }
  }

  // to run in first render
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div
        className="bg-gray-800"
        style={{ position: "sticky", top: 0, zIndex: 2 }}
      >
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleClick={handleSearchClick}
        />
      </div>
      <div>
        {Loading ? (
          <Spinner />
        ) : category === "All" ? ( // if category is all then populate all
          <Cards
            courses={searchValue ? filteredCourses : courses}
            category={category}
          />
        ) : (
          <Cards // if category is something else then use filter
            courses={
              searchValue ?
                filteredCourses.filter((each_course) => {
                  return each_course.category === category // return each matched category course data
                })
                :
                courses.filter((each_course) => {
                  return each_course.category === category // return each matched category course data
                })
            }
            category={category}
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
