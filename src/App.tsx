import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-cloud overflow-auto">
        <div className='w-screen h-screen font-poppins p-10 '>
          <div className='w-3/5 h-full relative justify-center '>
            <div className='absolute top-[25%]'>
              <p className="text-4xl text-left text-dark slide-right-header mb-2">Hey there...</p>
              <p className="text-7xl text-left slide-right-subtitle mb-16">I'm Eisen De Guzman</p>
            </div>
            <div className='absolute top-[60%] flex flex-col gap-2 text-xl scale-up-vertical-top'>
              <p className="pl-2  text-left">
                I am a fresh engineering graduate at<br/> Chulalongkorn University 
                (Bachelor's in Robotics and AI)
              </p>
              <p className="pl-2  text-left">
                I worked as a Frontend Developer at a <br/>Platform-as-a-Service company 
              </p>
            </div>
            
            
          </div>
        </div>
        <div className='w-screen h-screen'>
        <p className="text-4xl">My Projects</p>
        </div> 
      </header>
    </div>
  );
}

export default App;
