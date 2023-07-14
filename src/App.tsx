import React from 'react';
import './App.css';
import edit_site1 from './images/edit_site1.png'
import edit_site2 from './images/edit_site2.png'
import edit_site3 from './images/edit_site3.png'
import edit_site4 from './images/edit_site4.png'
import edit_site5 from './images/edit_site5.png'
import robot1 from './images/robot1.png'
import robot2 from './images/robot2.png'
import robot3 from './images/robot3.png'
import robot4 from './images/robot4.png'
import robot5 from './images/robot5.png'


import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

function App() {
  const images = [
    edit_site1,
    edit_site2,
    edit_site3,
    edit_site4,
    edit_site5,
    robot1,
    robot3,
    robot4,
    robot5,
];
  return (
    <div className="App">
      <header className="bg-cloud overflow-hidden">
        <div className='w-screen h-screen font-poppins p-20 '>
          <div className='w-4/5 h-full relative justify-center '>
            <div className='absolute top-[25%]'>
              <p className="text-6xl text-left text-dark slide-right-header mb-2">Hey there...</p>
              <p className="text-8xl text-left slide-right-subtitle mb-16">I'm Eisen De Guzman</p>
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
        <div className='w-screen h-screen  font-poppins px-20 pt-10 pb-20 flex flex-col gap-10'>
          <div className='w-full h-[1px] shrink-0 bg-gray' />
          <p className="text-4xl font-semibold">MY PROJECTS</p>
          <div className='w-full h-[500px] flex flex-row'>
            <div className='w-1/3 mr-10 flex flex-col gap-8 text-start'>
            <p className=' text-3xl font-semibold'>Landing Page Creator <br></br> <small className="text-xl">(Frontend Developer Project)</small></p>
            
            <p>
            Created a Landing Page Creator for online stores, similar to WordPress/LinkTree, where
              users can have their own online landing page for their shops without the need for coding.
              
            </p>
            <p>
            The users can customize their shop webpage with a web editor UI which can add/edit components in the website such as images, links, sliders, etc.
            </p>
            <div className='flex flex-col'>
              <p className='font-semibold'>
                Tech stack :
              </p>
              <p className='ml-4'> SvelteKit (Framework)</p>
              <p className='ml-4'> TailwindCSS</p>
              <p className='ml-4'> GraphQL (API Query/Mutator)</p>
            </div>
           <a href="https://test.naaraan.com/" className="underline text-sky-800"target="_blank">Click to visit Project</a>
            </div>  
            <div className='w-2/3 bg-gray '>
            <Slide>
              <div className="each-slide-effect ">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
              </div>
              <div className="each-slide-effect ">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
              </div>
              <div className="each-slide-effect  ">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
              </div>
              <div className="each-slide-effect  ">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
              </div>
              <div className="each-slide-effect  ">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
              </div>
            </Slide>
          </div>
        </div>
       
        </div> 
        <div className='w-screen h-screen  font-poppins px-20 pt-10 pb-20 flex flex-col gap-10'>
        <div className='w-full h-[500px] flex flex-row'>
            <div className='w-1/3 mr-10 flex flex-col gap-8 text-start'>
            <p className=' text-3xl font-semibold'>Automated Waiter Robot <br></br> <small className="text-xl">(University Senior  Project)</small></p>
            
            <p>
            Designed and created an automated waiter robot for restaurants with a navigation
            system, a robot arm to serve drinks, and a tray lift to serve plates. Developed two
            webpages for the customer and staff users to control the robot remotely. 
            </p>
            <p>
            The customer webpage is for
            calling the robot to order food and refill drinks, while the staff webpage lets the staff
            keep track of the customer's orders and order the robot to go to any table for serving.
            </p>
            <div className='flex flex-col'>
              <p className='font-semibold'>
                Tech stack :
              </p>
              <p className='ml-4'> ROS 1 (Robot Operating System)</p>
              <p className='ml-4'> React (Web Framework)</p>
              <p className='ml-4'> Flask (API to connect Robot and Webpages)</p>
              <p className='ml-4'> Node.js/Socket.io (Web Backend)</p>
            </div>
            <div className="flex flex-col">
            <a href="https://www.canva.com/design/DAFi9zEW-e0/rm7tlSxiCyKfn-77cEXU4A/edit?analyticsCorrelationId=84bd5a53-6326-40f6-b1dd-77d095a02ed7" className="underline text-sky-800"target="_blank">Click to visit Project Presentation</a>
            <a href="https://youtu.be/YG-K0zhOZM4" target="_blank" className="underline text-sky-800">Click here for video demonstration</a>
            </div>
           
            </div>  
            <div className='w-2/3 bg-gray '>
            <Slide>
              <div className="each-slide-effect ">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
              </div>
              <div className="each-slide-effect ">
                <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                </div>
              </div>
              <div className="each-slide-effect  ">
                <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                </div>
              </div>
              <div className="each-slide-effect  ">
                <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                </div>
              </div>
              
            </Slide>
          </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
