import Image, { StaticImageData } from 'next/image';
import React from 'react'


function randomNum() {
    return Math.floor(Math.random() * 3) + 1;
}

const Card = ({ images }: { images: StaticImageData[] }): JSX.Element => {
    return (
        <div className='card bg-white p-2 rounded-[14px] border'>
            <div className='relative'>
                <Image
                    src={images[randomNum()]}
                    alt='img'
                    width={258}
                    height={222}
                />
                <div className="absolute left-2 -bottom-3 flex -space-x-3">
                    <Image
                        className='rounded-[100px] overflow-hidden'
                        src='/eee.png'
                        alt='img'
                        width={36}
                        height={36}
                    />
                    <Image
                        className='rounded-[100px] overflow-hidden'
                        src='/eee.png'
                        alt='img'
                        width={36}
                        height={36}
                    />
                    <Image
                        className='rounded-[100px] overflow-hidden'
                        src='/eee.png'
                        alt='img'
                        width={36}
                        height={36}
                    />
                    <Image
                        className='rounded-[100px] overflow-hidden'
                        src='/eee.png'
                        alt='img'
                        width={36}
                        height={36}
                    />
                </div>
            </div>
            <div className='p-4 pb-2'>
                <div className='border-b'>
                    <span className='font-bold font-dmSans md:text-xl'>ArtCrypto</span>
                    <div className='flex justify-between text-xs font-semibold my-2'>
                        <span className='text-[#00AC4F]'>0.25 ETH</span>
                        <span className='text-[#838383]'>1 of 321</span>
                    </div>
                </div>

                <div className='mt-3 text-sm flex flex-col md:flex-row justify-between text-[#4F33A3]'>
                    <button className='px-2 py-1.5 bg-[#F5F5F5] rounded-[100px]'>
                        3h 50m 2s left
                    </button>
                    <button className='font-medium'>Place a bid</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
