import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type CategoryPillProps = {
    categories: string[]
}

function CategoryPills({ categories }: CategoryPillProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State to track selected category

    // Function to scroll to the left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        }
    };

    // Function to scroll to the right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        }
    };

    // Function to update scroll position state
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    // Add event listener for scroll when the component mounts
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className='relative z-30'>
            {/* Left arrow */}
            {!isAtStart && (
                <button
                    onClick={scrollLeft}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10  bg-gradient-to-l from-white from-50% to-transparent rounded-full p-2 ml-28 hover:bg-gray-300'>
                    <FiChevronLeft size={24} />
                </button>
            )}

            {/* Scrollable Categories */}
            <div
                className='flex  overflow-hidden ml-32 px-32 no-scrollbar whitespace-nowrap gap-3 w-[calc(100%-50px)] mx-auto'
                ref={scrollRef}>
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={"dark"}
                        size="icon"
                        onClick={() => setSelectedCategory(category)} // Set selected category
                        className={`ml-3 px-16 rounded-lg whitespace-nowrap ${
                            selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-slate-100'
                        } hover:text-white`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Right arrow */}
            {!isAtEnd && (
                <button
                    onClick={scrollRight}
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full flex justify-end  rounded-full p-2 hover:bg-gray-300'>
                    <FiChevronRight size={24} />
                </button>
            )}
        </div>
    );
}

export default CategoryPills;
