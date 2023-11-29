import Conditions from '@/components/Conditions'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import React from 'react'

const Shop = () => {
    return (
        <>
            <Navbar />
            <Products variant='full' />
            <Conditions />
            <Footer variant='regular' />
        </>
    )
}

export default Shop