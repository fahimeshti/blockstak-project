import Image from 'next/image';
import React from 'react'
import Container from './Container';


const data = [
    {
        amount: "98",
        text: "Artwork"
    },
    {
        amount: "12",
        text: "Auction"
    },
    {
        amount: "15",
        text: "Artist"
    },
]

const HeroSection = (): JSX.Element => {
    return (
        <Container>
            <div className='w-full grid grid-cols-2 py-8 md:py-16'>
                <div className='w-full col-span-2 md:col-span-1 relative px-4 md:px-0'>
                    <h1 className='text-2xl md:text-[40px] font-bold font-integralCF leading-tight'>Discover, and collect Digital Art  NFTs </h1>
                    <p className='text-[#565656] text-base md:text-xl max-w-md mb-10 mt-4 font-dmSans'>
                        Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                    </p>
                    <button className='bg-primary md:text-xl font-semibold hover:bg-primary/80 md:px-[40px] px-4 py-3 md:py-5 border rounded-[100px] text-white tracking-[0.065em]'>Explore Now</button>
                    <div className='flex items-center mt-8 gap-3 w-full'>
                        {data.map((item, idx) => (
                            <div key={idx}>
                                <span className='md:text-[40px] leading-none'>
                                    <span className='font-integralCF'>{item.amount}</span>
                                    <span className='font-bold'>K+</span>
                                </span>
                                <span className='block font-dmSans leading-none text-xl text-[#565656]'>{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <Image className='absolute bottom-2 -left-14 z-[-1]' src='/Dot.svg' alt='dots' width={196} height={154} />
                </div>
                <div className='col-span-1 hidden md:block'>
                    <div className='relative flex flex-row justify-end items-center'>
                        <div className='absolute top-0 left-24 z-10 w-[400px] h-[440px] rounded-3xl p-6 flex flex-col justify-between text-white font-dmSans'>
                            <div>
                                <h3 className='font-dmSans font-bold text-[28px]'>Abstr Gradient NFT</h3>
                                <div className='flex gap-2'>
                                    <span>
                                        <Image
                                            src='/hero/Ellipse 95.png'
                                            alt='img'
                                            width={32}
                                            height={32}
                                        />
                                    </span>
                                    <span className='font-bold text-xl'>Arkhan17</span>
                                </div>
                            </div>
                            <div className='flex justify-between p-4 px-6 backdrop-blur-xl rounded-[14px] bg-white/20'>
                                <div className='flex flex-col'>
                                    <span className='text-xs'>Current Bid</span>
                                    <span className='font-bold'>0.25 ETH</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs'>Ends in</span>
                                    <span><span className='font-bold'>12</span>h{' '}
                                        <span className='font-bold'>43</span>m{' '}
                                        <span className='font-bold'>42</span>s{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Image
                            className='mr-[-4.9rem] mt-24 z-[4]'
                            src='/hero/Group 83.png'
                            alt='img'
                            width={150}
                            height={150}
                        />
                        <Image
                            className='z-[3] '
                            src='/hero/unsplash_E8Ufcyxz514.png'
                            alt='img'
                            width={400}
                            height={400}
                        />
                        <Image
                            className='ml-[-19rem] z-[2]'
                            src='/hero/unsplash_pVoEPpLw818.png'
                            alt='img'
                            width={346}
                            height={392}
                        />
                        <Image
                            className='ml-[-17rem] z-[1]'
                            src='/hero/unsplash_tZCrFpSNiIQ.png'
                            alt='img'
                            width={310}
                            height={341}
                        />

                    </div>
                </div>
            </div>
        </Container >
    )
}

export default HeroSection;

