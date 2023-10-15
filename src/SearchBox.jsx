import React from 'react'

const SearchBox = ({ searchValue, setSearchValue, handleClick }) => {
    return (
        <div className="w-full flex justify-center">
            <div className='md:w-[70%] w-full pt-4 mb-3 flex justify-center'>
                <input
                    type='text'
                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='Search...'
                    className='rounded-l-3xl px-4 py-2 w-[70%] bg-gray-50 outline-none'
                />
                <button className='bg-blue-500 text-white rounded-r-3xl px-3' onClick={handleClick}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBox