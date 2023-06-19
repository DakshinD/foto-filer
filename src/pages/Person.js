import {useLocation, useNavigate} from 'react-router-dom';
import {React, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { current } from '@reduxjs/toolkit';
import { updateName, updateEmail, updatePhoneNumber} from '../features/peopleSlice'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { saveAs } from "file-saver";

export default function Example() {
    const location = useLocation();
    const currentPerson = useSelector(state => {
      return (location.state) && state.people[location.state.index]
    })
    const imageFiles = useSelector(state => {
      return state.imageFiles
    })

    const dispatch = useDispatch()

    const [person, setPerson] = useState(currentPerson);


    // generic useEffect to set at beginning
    useEffect(() => {
      setPerson(location.state && location.state.index)
    }, {location})

    const onDownloadFiles = async () => {
      
      // create zip object and folder using jszip
      const zip = require('jszip')();
      zip.folder(currentPerson.name)

      // find all images for current persosn
      let blobFiles = [];
      for(const image of currentPerson.imageNames) {
        blobFiles.push(imageFiles.find((file) => file.name === image.filename))
      }
      
      // get the Blob object for each imageName and then upload the files to the zip object
      //console.log(blobFiles)
      for (let file = 0; file < blobFiles.length; file++) {
        let blob = await fetch(blobFiles[file].url)
          .then(r => r.blob())
          .then(blobFile => console.log(zip.folder(currentPerson.name).file(blobFiles[file].name, blobFile)));
        // Zip file with the file name.
        
      } 

      // generate the files and use FileSaver to save the content to user's browser
      zip.generateAsync({type: "blob"}).then(content => {
        saveAs(content, "images.zip");
        console.log("done")
  });
    }


    return (
    <div className="flex flex-col md:flex-row md:flex-row bg-gray-100 shadow-2xl">

      <div className="flex-1 flex min-w-screen md:max-w-[50%] min-h-[50%] md:min-h-screen justify-center ">
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
              <span className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]">{currentPerson && currentPerson.name}</span> 
          </div>

        <form>
            <div class="border-b border-gray-900/10 p-12">
                <h2 class="text-base font-semibold leading-7 text-white">Person Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-300">Enter in the information of the person you want to send the pictures to.</p>

                <div class="mt-10 flex flex-col gap-x-6 gap-y-8">
                    <div class="sm:col-span-3">
                        <label for="name" class="block text-sm font-medium leading-6 text-white">Name</label>
                        <div class="mt-2">
                            <input 
                            onChange= {e => {
                              dispatch(
                                updateName({
                                  index: location.state.index,
                                  newName: e.target.value
                                })
                              )
                            }}
                             defaultValue={currentPerson.name} type="text" name="first-name" id="first-name" autocomplete="given-name" class="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                

                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                        <div class="mt-2">
                            <input 
                            onChange= {e => {
                              dispatch(
                                updateEmail({
                                  index: location.state.index,
                                  newEmail: e.target.value
                                })
                              )
                            }}
                            defaultValue={currentPerson.email} id="email" name="email" type="email" autocomplete="email" class="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="number" class="block text-sm font-medium leading-6 text-white">Phone Number</label>
                        <div class="mt-2">
                            <input 
                            onChange= {e => {
                              dispatch(
                                updatePhoneNumber({
                                  index: location.state.index,
                                  newPhoneNumber: e.target.value
                                })
                              )
                            }}
                            defaultValue={currentPerson.phoneNumber} id="number" name="number" type="tel" autocomplete="number" class="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col flex-cols-1 justify-center items-center my-10'>
                            {/* Gmail button */}
                            <button className='w-72 items-center justify-center text-black bg-gray-200 hover:bg-gray-300/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2'> 
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-2 -ml-1' viewBox="0 0 48 48" width="24px" height="24px"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/></svg>
                              Send Images with Gmail
                            </button>

                            {/* Text button */}
                            <button className='w-72 items-center justify-center text-black bg-green-500 hover:bg-gray-300/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2'> 
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-2 -ml-1' viewBox="0 0 48 48" width="24px" height="24px"><path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 25 11 C 16.806196 11 10 16.724334 10 23.962891 C 10 28.422653 12.681228 32.244798 16.572266 34.560547 C 15.979588 35.500836 15.233739 36.474116 14.300781 37.384766 A 1.0001 1.0001 0 0 0 15.173828 39.083984 C 17.481979 38.674506 19.894769 37.826205 21.878906 36.597656 C 22.885987 36.785688 23.918133 36.925781 25 36.925781 C 33.193804 36.925781 40 31.201447 40 23.962891 C 40 16.724334 33.19389 11 25 11 z M 25 13 C 32.27011 13 38 17.989447 38 23.962891 C 38 29.936334 32.270196 34.925781 25 34.925781 C 23.93592 34.925781 22.905081 34.805366 21.904297 34.597656 A 1.0001 1.0001 0 0 0 21.148438 34.744141 C 20.222493 35.357332 19.095857 35.862111 17.912109 36.279297 C 18.279348 35.7823 18.664906 35.29371 18.921875 34.736328 A 1.0001 1.0001 0 0 0 18.457031 33.421875 C 14.551886 31.494479 12 27.967608 12 23.962891 C 12 17.989447 17.729804 13 25 13 z"/></svg>                              Send Images through Text
                            </button>


                            {/* Download button */}
                            <button 
                            onClick={onDownloadFiles}
                            className='w-72 items-center justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2'> 
                              <ArrowDownTrayIcon width="24px" height="24px" className='mr-2 -ml-1'/>
                              Download Files
                            </button>
                    </div>
                </div>
            </div>
        </form>

          

        
        </div>
        
      </div>

        <div className="flex min-w-screen md:max-w-[50%] min-h-[50%] md:min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
          {
              (currentPerson.imageNames.length > 0 && imageFiles.length > 0) && currentPerson.imageNames.map((image, idx) => {
                {/* need to fix the image grid */}
                return (
                  <div className='w-80'>
              <a 
                key={idx} className="bg-gray-900 rounded-2xl shadow-2xl group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={(imageFiles.find((file) => file.name === image.filename)).url}
                      alt={image.filename}
                      className="h-full w-full object-scale-down object-center group-hover:opacity-75 "
                    />
                  </div>
                
                
              </a>
              
              </div>
                  
          
                  
                )
            })
            }
          </div>
        </div>
      </div>
      
    </div>
      
    )
  }