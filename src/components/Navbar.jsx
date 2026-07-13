import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
        <header className='bg-red-300'>
            <div className='flex justify-between p-4 items-center text-xl mx-8'>
                <a href="#home">
                    <h1 className="text-4xl font-bold"><span className='text-white'>B</span><span className='text-black/80'>rand</span></h1>
                </a>
                <div className="gap-12 flex">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#use-cases">Use Cases</a>
                    <a href="#integrations">Integrations</a>
                    <a href="#about-us">About Us</a>
                </div>
                <Button title="Join Us"/>
            </div>
        </header>
    </>
  )
}

export default Navbar