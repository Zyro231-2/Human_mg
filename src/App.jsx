import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import { filterData, apirUrl } from './data';
import Cards from './Cards';
import Spinner from './Spinner';
import { toast } from 'react-toastify';
import './App.css';

function App() {
  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].tittle);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchData() {
    try {
      setLoading(true);
      let response = await fetch(apirUrl);
      let data = await response.json();
      setCourses(data.data);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching data');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className='py-2 bg-gray-800' style={{ position: 'sticky', top: 0, zIndex: 2 }}>
        <input
          type="text"
          placeholder="Search for courses"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div>
        {loading ? <Spinner /> : <Cards courses={courses} category={category} searchTerm={searchTerm} />}
      </div>
    </>
  );
}

export default App;
