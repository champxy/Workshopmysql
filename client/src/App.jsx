import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => { 
    getdata()
  }, [])

  const getdata = async () => {
    const url = 'http://localhost:4900/api/product/'
    const response = await axios.get(url)
    setData(response.data)
  }

  return (
    <div>
      <h1>Product List</h1>
      {data.map((product, index) => (
        <div key={index}>
          <h3>Name : {product.name}</h3>
          <h4>Price : {product.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default App