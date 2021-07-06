import React from 'react'
import Products from '../components/Products'
import initalState from '../initialState'

const Home = () => {
  return (
    <div>
      <Products data={initalState.products} />
    </div>
  )
}

export default Home
