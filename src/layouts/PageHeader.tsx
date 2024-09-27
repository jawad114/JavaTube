import React from 'react'
import {ArrowLeft, Bell, Menu, Mic, Search, Upload, User} from 'lucide-react'
import Button from '../components/Button'
import { useState } from 'react'
function PageHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
    const [showFullWidthSearch, setShowFullWidthSearch] = React.useState(false)
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
        <div className={`flex gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex' } `}>
            <Button variant="ghost" size="icon"   className='w-16 h-16 mt-3 bg-slate-200' onClick={toggleSidebar}><Menu  /></Button>
            <a href="/home"><img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" className='w-16 h-16 mt-3' /></a>
        </div>
        <form className={`'gap-4 flex-grow justify-center ${showFullWidthSearch ? 'flex' : 'hidden md:flex  ' } `}>
            <Button size="icon" variant="ghost" className='flex-shrink-0 w-12 h-12 mt-6 bg-slate-200 md:hidden lg:hidden'><ArrowLeft/></Button>
            <div className='flex flex-grow max-w-[600px]'>
           
            <input 
                type="search" 
                placeholder="Search" 
                className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary mt-5  p-1 h-14 py-1 px-4 text-lg w-full "
                />

                <Button  type='submit' variant={"ghost"} className='bg-slate-200 mt-5 w-8 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0 '><Search/></Button>
            </div>
            <Button size='icon' type='button' variant={"ghost"} className='bg-slate-200 mt-7 flex-shrink-0 w-12 h-12 ml-3'><Mic/></Button>
        </form>
        <div className={`flex flex-shrink-0 md:gap-2 gap-3 ${showFullWidthSearch ? 'hidden' : 'flex' } `}>
             <Button size='icon' type='button' onClick={() => setShowFullWidthSearch(true)} variant={"ghost"} className='bg-slate-200  flex-shrink-0 lg:hidden md:hidden w-16 h-16 mt-3'><Search/></Button>
            <Button size='icon' type='button' variant={"ghost"} className='bg-slate-200 flex-shrink-0 md:hidden w-16 h-16 mt-3'><Mic/></Button>
            <Button variant={"ghost"} size="icon"   className='w-16 h-16 mt-3 bg-slate-200'><Upload  /></Button>
            <Button variant={"ghost"} size="icon"   className='w-16 h-16 mt-3 bg-slate-200'><Bell  /></Button>
            <Button variant={"ghost"} size="icon"   className='w-16 h-16 mt-3 bg-slate-200'><User  /></Button>
        </div>
    </div>
  )
}

export default PageHeader