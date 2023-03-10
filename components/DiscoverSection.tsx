import Image from 'next/image';
import React from 'react'
import Container from './Container';
import image1 from '../public/hero/image3.png';
import image2 from '../public/hero/unsplash_E8Ufcyxz514.png';
import image3 from '../public/hero/unsplash_pVoEPpLw818.png';
import image4 from '../public/hero/unsplash_tZCrFpSNiIQ.png';
import Card from './Card';

const buttons = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
    "Crypto",
]

const images = [
    image1, image2, image3, image4
]

const DiscoverSection = (): JSX.Element => {
    return (
        <div className="w-full bg-[#D9E0EC33] py-16 font-dmSans font-medium">
            <Container>
                <div className='w-full'>
                    <div className='w-full'>
                        <div className='p-4 md:p-0'>
                            <h1 className='font-integralCF md:text-[34px]'>Discover more NFTs</h1>
                            <div className='py-6 flex gap-3 flex-wrap'>
                                {buttons.map((item, idx) => (
                                    <button key={item} className={`${idx === 0 ? "bg-[#3D00B7]" : "bg-[#DCDCDC33] text-black hover:bg-[#3D00B7] hover:text-white"} px-5 py-2 font-medium rounded-[100px] text-white text-sm transition-all duration-150`}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 justify-between p-4 md:p-0'>
                            {cards.map(item => (
                                <Card key={item} images={images} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default DiscoverSection;

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]