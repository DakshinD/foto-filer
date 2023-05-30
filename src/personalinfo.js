
const people = [
    {
      name: 'Dakshin Devanand',
      role: 'Developer',
      imageUrl:
      'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
        description: 'Incoming CS Major at UT Austin, aspiring software developer',
    },
    {
      name: 'Hari Shankar',
      role: 'Developer',
      imageUrl:
        'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
        description: 'Incoming CS Major at UT Austin, aspiring software developer',
    }
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet the Founders</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              FotoFiler is a project made by 2 students inspired by a camera roll full of graduation pics
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-50 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-100">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <p className="text-sm font-semibold leading-6 text-gray-300">{person.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  