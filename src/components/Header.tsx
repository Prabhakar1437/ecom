

import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex p-5 bg-green-950 text-white items-center justify-between' >
         <Link href="/"
          className='text-2xl font-bold'>
            Next ECOM
            </Link>
            
        <div className='flex gap-10'>
          <Link href="/orders">Orders</Link>
          <Link href="/profile">Profile</Link>
        </div>
    </div>
  )
}

export default Header