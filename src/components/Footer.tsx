import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-hoverBg text-white pt-4 pb-6'>
      <div className='max-w-contentContainer mx-auto'>
        <ul className='w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200'>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            All Departments
          </li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            Store Directory
          </li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            Careers
          </li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            Our company
          </li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            Help
          </li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            Privacy Policy
          </li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>
            Terms of Use
          </li>
   
        </ul>

        <p className='text-sm text-zinc-300 text-center mt-4'>
          @ 2024 ShopeCom. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer