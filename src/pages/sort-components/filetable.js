
import {React} from 'react'
import FormData from 'form-data'
import axios from 'axios'
import FacesPage from '../Faces'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import {ImageName, Person, ImageFile} from '../../features/components'

import { addPerson } from '../../features/peopleSlice'
import { addImage } from '../../features/imageFilesSlice'

import { XMarkIcon } from '@heroicons/react/24/outline'
    
    const handleClick = (e) => {
        
        e.target.files = []
        console.log(e.target.files)
    }
    
    function checkFile(file) {
        return file.name 
    }



    function RedirectToFacesPage() {
        window.location.replace('http://localhost:3000/faces');
    }


  export default function Example({files, stateChanger, setIsLoading}) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    async function sortFiles(files) {

        const formData = new FormData()
        files.map((item, index)=>{
            formData.append("image"+index, item)
        })
        // start spinner
        setIsLoading(true)

        const res = await axios.post('http://127.0.0.1:5000/sort', formData, { 'Content-Type': 'multipart/form-data' });

        // end spinner
        setIsLoading(false)

        // add each person to redux state
        console.log(res)
        for (const images of res.data) {
            var newPerson = Person(nanoid(), "New Person", "fakeemail.com", "1289493", [])
            for (const image of images) {
                newPerson.imageNames.push(ImageName(image.filename, image.coords))
            }
            dispatch(
                addPerson(newPerson)
            )
        }

        // add each imagefile to redux state to store
        for(const file of files) {
            
            var newFile = ImageFile(file.name, URL.createObjectURL(file))
            dispatch(
                addImage(newFile)
            )
            
        }
        
        navigate('/faces')
    }
    
    return (
    <div className='bg-gray-900 rounded-lg'>
        <ul role="list" className="divide-y divide-gray-700 ">
            <li key='header12345' className="flex justify-between gap-x-6 py-5 bg-gray-800 rounded-lg">
                {/* header*/}
                <div className="flex-1 mx-10 text-left items-center">
                    
                    <p className="flex float-left text-2xl font-semibold text-white">Files</p>

                    <div className='flex float-right space-x-4 xs:space-y-4 '>
                        <button
                            onClick ={() => stateChanger([])}
                            className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                        >
                            Clear Files
                        </button>

                        {/* POST to the Flask server right here */}
                        <button
                            onClick = {()=>sortFiles(files)} 
                            className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        >
                            Sort
                        </button>
                        
                    </div>
                    
                </div>
            </li>
            {files.map(file => (
            <li key={file.name} className="flex justify-between gap-x-6 py-5 bg-gray-900 rounded-b-lg">
                <div className="flex-1 gap-x-4 mx-10 text-left">

                    <p className="float-left text-md font-semibold leading-6 text-white">{file.name}</p>

                    <button 
                        onClick = {() => stateChanger(files.filter(curr => curr.name !== file.name))}
                        className="float-right bg-gray-100 rounded-full p-1 inline-flex items-center justify-center fill-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <XMarkIcon className="block h-4 w-4"/>
                    </button>
                    
                </div>
            </li>
            ))}
        </ul>
    </div>
      
    )
  }