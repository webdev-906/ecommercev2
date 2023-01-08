import axios from 'axios';
import { useEffect, useState } from 'react';


function Products() {
  // state initailization
  const [engineSearch, setEngineSearch] = useState('');
  // console.log(search);

  const engineType = (e) => {
    setEngineSearch(e.target.value)
  }

  const [data, setData] = useState([]);
  // get data from API
  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      // console.log("Getting from", res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])


  const arr = data.filter((data) => {
    return engineSearch.toLowerCase() === '' ? data : data.engine_type.toLowerCase().includes(engineSearch) || 
    engineSearch === '$' ? data : data.price.includes(engineSearch)
  }).map((data) => {
    return (
      <div key={data.title}>
        <img src={data.image} alt={data.title}></img>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p className="hide_engine_details">{data.engine_type}</p>
      </div>
    )
  })

  return (
    <div>
    <div className="products">
      <form className="product-filter" action="#" method="#">
      <label htmlFor="engine-type">Seach By Engine Type Or Price</label>
      <input type="text" id="engine-type" name="engine-type" placeholder='v6, v8, $1500' onChange={engineType}></input>
       {/* This reloads the whole page and the query is in the url.... */}
      {/* <button onChange={(e) => setEngineSearch(e.target.value === [])} >Reset</button> */}
      </form>
      {/* All our products */}
      {arr}
    </div>
    </div>

  )
}

export default Products


