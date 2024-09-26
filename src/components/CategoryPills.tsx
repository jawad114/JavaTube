import React, { useRef } from 'react';
import Button from './Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Icon for arrows

type CategoryPillProps = {
    categories: string[]
}

function CategoryPills({ categories }: CategoryPillProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to scroll to the left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -400, // adjust this value based on how far you want it to scroll
                behavior: 'smooth'
            });
        }
    };

    // Function to scroll to the right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200, // adjust this value based on how far you want it to scroll
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='relative'>
            {/* Left arrow */}
            <button 
                onClick={scrollLeft}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2 hover:bg-gray-300'>
                <FiChevronLeft size={24} />
            </button>
            
            {/* Scrollable Categories */}
            <div 
                className='flex overflow-x-hidden  no-scrollbar whitespace-nowrap gap-3 w-[calc(100%-50px)] mx-auto' 
                ref={scrollRef}>
                {categories.map((category) => (
                    <Button key={category} variant={"dark"} size="icon" className='ml-3 px-16 rounded-lg whitespace-nowrap bg-slate-100 hover:text-white'>
                        {category}
                    </Button>
                ))}
            </div>

            {/* Right arrow */}
            <button 
                onClick={scrollRight}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2 hover:bg-gray-300'>
                <FiChevronRight size={24} />
            </button>
        </div>
    );
}

export default CategoryPills;
