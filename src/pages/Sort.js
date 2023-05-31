import React from 'react';
import CustomFileInput from './CustomFileInput'

export default function Example() {
    return (
      <div className="h-screen flex justify-center items-center">

            <div>
                <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl pb-10 text-center">
                    <span className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]">Sort</span> your pictures with ease
                </div>
                
                <div className='container flex justify-center items-center'>
                    <CustomFileInput className='w-2/5'/> {/*need to add functionality still */}
                </div>
            </div>
            
            
            
        
      </div>
    )
  }