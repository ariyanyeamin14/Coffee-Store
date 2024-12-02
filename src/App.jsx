import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'
import NavBar from './Components/NavBar'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='w-[85%] mx-auto '>
      <nav>
        < NavBar></NavBar>
      </nav>
      <div className='my-20'>
        <h1 className='text-center text-5xl font-bold mb-10'>Hot Hot Cold Coffees Items: {coffees.length}</h1>
        <div className='grid grid-cols-2 gap-8'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
