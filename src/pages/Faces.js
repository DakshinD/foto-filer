import {useLocation, useNavigate} from 'react-router-dom';
import {React, useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import {ImageName, Person, ImageFile} from '../features/components.js'     

  
  export default function Example() {
    const people = useSelector(state => state.people)
    const imageFiles = useSelector(state => {
      console.log('State: ', state)
      return state.imageFiles
    })



    const navigate = useNavigate();
    function pushNewView(currPerson, idx) {
      console.log("pressed push new view")
      navigate('/faces/person',{state: {index: idx}})
    }
    
    useEffect(() => {
      console.log("image files")
      console.log(imageFiles)
    }, {imageFiles})

  
    
    return (
    <div className="flex flex-col bg-gray-100 shadow-2xl">

      <div className="flex min-h-[50%] justify-center">
        <div className="flex-1 bg-gray-900 backdrop-blur-xl items-start">
        <div
          className="absolute mt-40 inset-x-0 -top-40 -z-10 transform-gpu overflow-clip blur-3xl sm:-top-40"
        >
            
          <div
            className="relative left-[calc(50%-10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* actual text */} 
          <div className="text-4xl font-bold tracking-tight text-white sm:text-6xl py-10 text-center mx-10">
              We found <span className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]">{people != null ? people.length : 0 }</span> unique people in your pictures
          </div>
          <div className="flex justify-center">
            <ul className="flex-col list-disc list-outside text-md font-semibold tracking-tight text-gray-200 sm:text-lg py-10 mx-10">
                <li className="">Click on each person to view all photos they're located in</li>
                <li className="">Edit names, emails, and phone numbers, for easy messaging</li>
            </ul>
          </div>

        
        </div>
        
      </div>

        <div className="min-h-[50%]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {
              (people.length > 0 && imageFiles.length > 0) && people.map((person, index) => {
                console.log(person)
                return (
                  <a 
                onClick={() => {pushNewView(person, index)}}
                key={person.id} className="bg-gray-900 rounded-2xl shadow-2xl group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg rounded-b-none bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={(imageFiles.find((file) => file.name === person.imageNames[0].filename)).url}
                      alt={person.imageNames[0]}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 "
                    />
                  </div>
                <div className='flex flex-1 items-center justify-between'>
                  <h3 className="text-lg text-gray-100 font-semibold p-4 ">{person.name}</h3>
                  <p className="text-lg text-transparent font-bold p-2 me-2 bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"> {person.imageNames.length} </p>
                </div>
                
              </a>
                )
            })
            }
            
          </div>
        </div>
      </div>
      
    </div>
      
    )
  }



  