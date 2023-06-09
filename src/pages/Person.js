import {useLocation, useNavigate} from 'react-router-dom';
import {React, useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
const products = [
    {
      id: 1,
      name: 'Person 1',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Person 2',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Person 3',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Person 4',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Person 4',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Person 4',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Person 4',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 8,
        name: 'Person 4',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 9,
        name: 'Person 4',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]

  function pushNewView() {
    console.log("clicked a card")
  }

export default function Example() {
    const location = useLocation();

    const currentPerson = useSelector(state => {
      return (location.state) && state.people[location.state.index]
    })
    const imageFiles = useSelector(state => {
      return state.imageFiles
    })



    const [person, setPerson] = useState(currentPerson);

    const indexOfPerson = location.state.index

    useEffect(() => {
      
      
      setPerson(location.state && location.state.index)
      console.log("opened person view")
    }, {location})

    const onNameChangeHandler = event => {
      
      var newPerson = person
      newPerson.name = event.target.value
      
      setPerson(newPerson)
      console.log("being called")
      location.state.person.name = event.target.value
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
              <span className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]">{person.name}</span> 
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
                              setPerson({
                                ...person,
                                name: e.target.value
                              });
                            }}
                             type="text" name="first-name" id="first-name" autocomplete="given-name" class="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                

                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                        <div class="mt-2">
                            <input 
                            onChange= {e => {
                              setPerson({
                                ...person,
                                email: e.target.value
                              });
                            }}
                            id="email" name="email" type="email" autocomplete="email" class="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="number" class="block text-sm font-medium leading-6 text-white">Phone Number</label>
                        <div class="mt-2">
                            <input 
                            onChange= {e => {
                              setPerson({
                                ...person,
                                phoneNumber: e.target.value
                              });
                            }}
                            id="number" name="number" type="tel" autocomplete="number" class="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>
        </form>

          

        
        </div>
        
      </div>

        <div className="flex min-w-screen md:max-w-[50%] min-h-[50%] md:min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
              (location.state && person.imageNames > 0 && imageFiles.length > 0) && person.imageNames.map((image, index) => {
                console.log("got here")
                {/* need to fix the image grid */}
                return (
                  <div className='w-48 h-96'>
                      <a 
                key={index} className="bg-gray-900 rounded-2xl shadow-2xl group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={(imageFiles.find((file) => file.name === image.filename)).url}
                      alt={image.filename}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 "
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