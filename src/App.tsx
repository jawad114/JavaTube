import React from 'react';
import './App.css';
import CategoryPills from './components/CategoryPills';
import PageHeader from './layouts/PageHeader';
import { categories, videos } from './data/home';
import VedioGridItem from './components/VedioGridItem';
import SideBar from './layouts/SideBar';

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
        <div><SideBar /></div>
        <div className='overflow-x-hidden'>
          <div className='sticky top-0 bg-white z-0 pb-4'>
            <CategoryPills categories={categories} />
          </div>
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map(video => (
              <VedioGridItem key={video.id} {...video} />  // Pass data with correct keys
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
