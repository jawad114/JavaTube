import React, { useRef, useState } from 'react';
import { formatDuration } from '../utils/formateDuration';
import formatRelativeTime from '../utils/formateTime';

type VedioGridItemProps = {
    id: string,
    title: string, 
    channel: {
        id: string,
        name: string,
        profileUrl: string
    },
    views: number,
    postedAt: Date,
    duration: number,
    videoUrl: string,
    thumbnailUrl: string
};

const VIEWS_FORMATER = new Intl.NumberFormat('en', { notation: 'compact' });

function VedioGridItem({ id, title, channel, views, postedAt, duration, videoUrl, thumbnailUrl }: VedioGridItemProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reset video to start
            videoRef.current.play().catch((error) => {
                console.error("Video play failed:", error);
            });
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false); // Switch back to thumbnail on pause
        }
    };

    return (
        <div className='flex flex-col gap-2 z-0  lg:ml-10 lg:w-72 lg:mr-10'>
            <div 
                className='relative aspect-vedio' 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                {/* Thumbnail Image (only show when the video is paused) */}
                {!isPlaying && (
                    <img 
                        src={thumbnailUrl} 
                        alt="" 
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-200 z-10  ${isPlaying ? 'rounded-none' : 'rounded-xl'}`}
                    />
                )}


                {/* Video element */}
                <video
                    ref={videoRef}
                    src={videoUrl}
                    muted
                    className={`block w-full h-full object-cover rounded-xl  ${isPlaying ? 'rounded-none' :' rounded-xl'}`}
                />
                <div className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded z-20 '>
                    {formatDuration(duration)}
                </div>
            </div>

            {/* Video details */}
            <div className='flex gap-2'>
                <a href={`/@${channel.id}`} className='flex-shrink-0'>
                    <img src={channel.profileUrl} alt="" className='w-12 h-12 rounded-full' />
                </a>
                <div className='flex flex-col'>
                    <a href={`/watch?v=${id}`} className='font-bold'>{title}</a>
                    <a href={`/@${channel.id}`} className="text-sm text-slate-500">{channel.name}</a>
                    <div className='text-secondary-dark text-sm'>
                        {VIEWS_FORMATER.format(views)} views • {formatRelativeTime(postedAt)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VedioGridItem;
