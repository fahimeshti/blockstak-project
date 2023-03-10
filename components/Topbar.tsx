import React from 'react'
import Container from './Container';
import SearchBar from './SearchBar';

const Topbar = (): JSX.Element => {
    return (
        <div className='border-b'>
            <Container>
                <div className='w-full py-6 flex items-center justify-between px-4 md:px-0'>
                    <h1 className='md:text-[24px] font-bold uppercase text-primary border-r pr-4 md:pr-8'>Nfters</h1>
                    <ul className='flex flex-wrap text-sm md:text-base gap-10 font-medium'>
                        <li>Marketplace</li>
                        <li>Resource</li>
                        <li>About</li>
                    </ul>
                    <div className='hidden md:block'>
                        <SearchBar />
                    </div>
                    <div className='hidden md:flex gap-4 font-semibold'>
                        <button className='bg-primary hover:bg-primary/80 px-11 h-[50px] border rounded-[100px] text-white'>Upload</button>
                        <button className='border-primary text-primary px-[22px] h-[50px] hover:bg-primary hover:text-white transition duration-150 border-2 rounded-[100px] capitalize'>Connect wallet</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Topbar;

