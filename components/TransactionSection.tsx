import Image from 'next/image';
import React from 'react'
import Container from './Container';

const TransactionSection = (): JSX.Element => {
    return (
        <div className='bg-[#D9E0EC33]'>
            <Container>
                <div className='py-20 grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <h2 className='col-span-1 uppercase bold text-[28px] font-integralCF py-8 md:py-0 text-center'>The amazing NFT art of the world here</h2>
                    </div>
                    <div className='col-span-2 flex flex-wrap md:flex-nowrap gap-10 p-8 md:pl-12 font-dmSans'>
                        <div className='flex'>
                            <span className='p-1 pr-2'>
                                <Image src='/second/card-tick-1 1.svg' alt='search' width={55} height={55} />
                            </span>
                            <span>
                                <span className='block text-xl mb-1.5 font-bold'>Fast Transaction</span>
                                <span className='leading-none text-[#696969]'>
                                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
                                </span>
                            </span>
                        </div>

                        <div className='flex'>
                            <span className='p-1 pr-2'>
                                <Image src='/second/chart-square.svg' alt='search' width={50} height={40} />
                            </span>
                            <span>
                                <span className='block text-xl mb-1.5 font-bold'>Growth Transaction</span>
                                <span className='leading-none text-[#696969]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TransactionSection;
