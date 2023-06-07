import {useLocation} from 'react-router-dom';

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
              We found <span className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]">{products.length}</span> unique people in your pictures
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
            {products.map((product) => (
              <a 
                onClick={pushNewView}
                key={product.id} href={product.href} className="bg-gray-900 rounded-2xl shadow-2xl group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg rounded-b-none bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className='flex flex-1 items-center justify-between'>
                  <h3 className="text-lg text-gray-100 font-semibold p-4 ">{product.name}</h3>
                  <p className="text-lg text-transparent font-bold p-2 me-2 bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"> +18 </p>
                </div>
                
              </a>
            ))}
            {/* THIS IS WHERE IM TESTING THE IMAGE DATA{location.state.images.map((image) => (
              <a 
                onClick={pushNewView}
                key={image.name} className="bg-gray-900 rounded-2xl shadow-2xl group">
                
                <div className='flex flex-1 items-center justify-between'>
                  <h3 className="text-lg text-gray-100 font-semibold p-4 ">{image.name}</h3>
                  <p className="text-lg text-transparent font-bold p-2 me-2 bg-clip-text bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"> +18 </p>
                </div>
                
              </a>
            ))}*/}
          </div>
        </div>
      </div>
      
    </div>
      
    )
  }