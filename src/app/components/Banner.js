import React from 'react'


const Banner = () => {
  return (

    <div className="flex items-center px-4 lg:px-24 bg-gradient-to-t from-[#7defe0] to-[#b6c0c5]">
        <div className='flex flex-col items-center justify-between w-full gap-12 py-40 md:flex-row'>
            {/* left side */}
            <div className='space-y-8 md:w-1/2'>
      <h2 className='text-4xl font-bold leading-snug text-black'>
        Unlock Your Career Potential!
        <span className='block text-[#112d60]'>Find Internships that Fit Your Goals.</span>
      </h2>
      <p className='md:w-4/5'>
        Discover exciting opportunities and gain real-world experience through our extensive internship programs. Start your journey towards a successful career today!
      </p>
      <div>
        <input type='search' name='search' id='search' placeholder='Search for Internships' className='px-2 py-2 outline-none rounded-l-sm' />
        <button className='px-6 py-2 font-medium text-white transition-all duration-200 ease-in bg-[#112d60] hover:bg-black'>
          Search
        </button>
      </div>
            </div>
            
            
<img src='/images/students.png ' alt='' className='w-85 h-80'></img>
           

        </div>
    </div>
  )
  

}

export default Banner

