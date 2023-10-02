import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import {filterData,apirUrl} from './data'
import Cards from './Cards';
import Spinner from './Spinner';
import {toast} from "react-toastify"

function App() {
  const [courses,setcourses] =useState('');
  const [Loading,setLoading] =useState(true);
  const [category,setCategory]=useState(filterData[0].tittle)

  // To fetch the courses and store them in courses array not in objects
  async function fetchData() {
    try {
    setLoading(true)
      let response=await fetch(apirUrl);
      let data= await response.json();
      setcourses(data.data)
    } catch (error) {
      return(<div>{error}/</div>)
    }
    setLoading(false)
  }

  // to run in first render
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <Navbar />
      <div className='py-2 bg-gray-800' style={{position: 'sticky',top:0,zIndex:2}}>
        <Filter filterData={filterData}  category={category} setCategory={setCategory}/>
      </div>
      <div>
        {
          Loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
        }
      </div>
    </>
  )
}

export default App;
