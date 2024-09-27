"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export const Logo = () => {
    const router =  useRouter()
    return (
        <div className='justify-center min-h2-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2 hover:text-slate-500'
        onClick={() => router.push('/')}
        >
            <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="12.4517" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 0 12.4517)" fill="currentColor" />
                <rect x="4.27637" y="21.3218" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 4.27637 21.3218)" fill="currentColor" />
                <rect x="8.55322" y="30.1924" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 8.55322 30.1924)" fill="currentColor" />
                <rect x="8.86963" y="8.17578" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 8.86963 8.17578)" fill="currentColor" />
                <rect x="13.1475" y="17.0454" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 13.1475 17.0454)" fill="currentColor" />
                <rect x="17.4229" y="25.916" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 17.4229 25.916)" fill="currentColor" />
                <rect x="17.7402" y="3.89893" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 17.7402 3.89893)" fill="currentColor" />
                <rect x="30.8877" y="8.49268" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 30.8877 8.49268)" fill="currentColor" />
                <rect x="26.2939" y="21.6396" width="8.9784" height="9.26802" rx="2" transform="rotate(-25.739 26.2939 21.6396)" fill="currentColor" />
            </svg>
            <h1 className='font-bold text-xl'>IkoodiManager</h1>
        </div>
    )
}