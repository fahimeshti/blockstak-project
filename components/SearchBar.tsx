import Image from 'next/image';
import React from 'react'

const SearchBar = (): JSX.Element => {
    return (
        <div>
            <div className="relative mx-auto text-gray-600">
                <input className="w-[300px] border-2 border-[#EFEFEF] bg-white h-[50px] px-[30px] pr-16 rounded-[100px] text-base focus:outline-none placeholder:text-[#C0C0C0] "
                    type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 -top-2 mt-5 mr-4">
                    <Image src='/search-normal-1.svg' alt='search' width={24} height={24} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
