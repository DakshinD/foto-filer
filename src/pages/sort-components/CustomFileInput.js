import React, { useRef, useState } from 'react';
import FileTable from './filetable'
import { ArrowUpTrayIcon } from '@heroicons/react/20/solid'

export default function Example({setIsLoading}) {

    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleFileEvent =  (e) => {
      const chosenFiles = Array.prototype.slice.call(e.target.files)
      handleUploadFiles(chosenFiles);
    }

    const handleUploadFiles = files => {
      const uploaded = [...uploadedFiles];
      files.some((file) => {
        if (uploaded.findIndex((f) => f.name === file.name) === -1) {
          uploaded.push(file);
        }
      })
      setUploadedFiles(uploaded);
    }

    


    return (
      <div className='w-full flex flex-col space-y-10'>
        <div className="flex shrink-0 items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="shadow-2xl shadow-gray-500 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 dark:bg-gray-800 hover:bg-gray-500 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
            </div>
            <input id="dropzone-file" type="file" multiple accept='image/*' className="hidden" onChange={handleFileEvent}/>
          </label>
        </div>

        {/* list of files starts here */}
        <div className='py-20'> 
          <FileTable files={uploadedFiles} stateChanger={setUploadedFiles} setIsLoading={setIsLoading}/>
        </div>
        
        
      </div>
        
      

    ) 
  }