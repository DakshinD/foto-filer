import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/20/solid'

export default function Example() {
    return (
      <div className="h-screen flex justify-center items-center">

            <button className="w-2/5 h-16 mt-height/2 rounded-md bg-indigo-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                
                <div className='flex justify-center items-center space-between'>   
                    <div className='mt-1 h-5 w-5 flex-none text-white'>
                        <ArrowUpTrayIcon />
                    </div>
                    <div>
                        Upload your pictures
                    </div>
                </div> 
                
            </button>
            

        
      </div>
    )
  }