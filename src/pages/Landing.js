import Example from "../herosection";

export default function Landing(){
    return(
        <div className="bg-p grid grid-cols-2 w-full h-screen relative isolate ">

             <div className="absolute mt-24 inset-x-0 -top-40 -z-10 transform-gpu overflow-clip blur-3xl sm:-top-40 w-1/2 bg-gray-900">
                    <div
                        className="relative left-[calc(50%-30rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
            </div>

            {/* Hero/Description */}
            <div className="relative">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl ">
                FotoFiler.
                </h1>
            </div>

            {/* Upload File Section */}
            <div className="relative">
                Hello
            </div>

        </div>
    )
}