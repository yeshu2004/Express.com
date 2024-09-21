import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <>
        <div className='w-full lg:px-20 px-10 py-10 flex flex-col gap-10'>
            <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 w-full border-b-2 pb-10'>
                <div className='lg:w-1/3 w-full overflow-hidden'>
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Hq_1d9jqC1aC40TZ" alt="" />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col gap-5'>
                    <Link to='' className='font-semibold lg:text-4xl text-3xl leading-1'>The resume that got a software engineer a $300,000 job at Google.</Link>
                    <div className='flex items-center gap-2 font-semibold text-gray-800'>
                        <p>Germany<span>,</span></p>
                        <p className='text-blue-500'><span>~ </span>Lorem Ipsum</p>
                    </div>
                    <p className='text-base'>To anyone who’s been struggling, here’s the 9 most common mistakes I learned writing my resume after countless rejections and interviewing engineering candidates.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 w-full border-b-2 pb-10'>
                <div className='lg:w-1/3 w-full overflow-hidden'>
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Hq_1d9jqC1aC40TZ" alt="" />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col gap-5'>
                    <h2 className='font-semibold lg:text-4xl text-3xl leading-1'>The resume that got a software engineer a $300,000 job at Google.</h2>
                    <div className='flex items-center gap-2 font-semibold text-gray-800'>
                        <p>Germany<span>,</span></p>
                        <p><span>~ </span>Lorem Ipsum</p>
                    </div>
                    <p className='text-base'>To anyone who’s been struggling, here’s the 9 most common mistakes I learned writing my resume after countless rejections and interviewing engineering candidates.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 w-full border-b-2 pb-10'>
                <div className='lg:w-1/3 w-full overflow-hidden'>
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Hq_1d9jqC1aC40TZ" alt="" />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col gap-5'>
                    <h2 className='font-semibold lg:text-4xl text-3xl leading-1'>The resume that got a software engineer a $300,000 job at Google.</h2>
                    <div className='flex items-center gap-2 font-semibold text-gray-800'>
                        <p>Germany<span>,</span></p>
                        <p><span>~ </span>Lorem Ipsum</p>
                    </div>
                    <p className='text-base'>To anyone who’s been struggling, here’s the 9 most common mistakes I learned writing my resume after countless rejections and interviewing engineering candidates.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Post