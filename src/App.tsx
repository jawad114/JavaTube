import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryPills from './components/CategoryPills';
import PageHeader from './layouts/PageHeader';
import { categories } from './data/home';

function App() {
  return (
    <div className="max-h-screen flex flex-col">
     <PageHeader/>
     <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
      <div>Sidebar</div>
      <div className='overflow-x-hidden '>
      <div className='sticky top-0 bg-white z-0 pb-4'>
          <CategoryPills categories={categories}/>
      </div>
     </div>
     </div>
    </div>
  );
}

export default App;
