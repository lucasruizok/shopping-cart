import {FiltersContext} from '../context/filtersContext'
import { useContext } from 'react'

function UseFilters (){

    const {filters, setFilters} = useContext(FiltersContext)
    
    const filterProducts = (products) =>{
      return products.filter(product =>{
        return ( 
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    return {filters, setFilters, filterProducts}
  }

export default UseFilters;