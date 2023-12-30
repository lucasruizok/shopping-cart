import { useId } from "react"
import "./Filters.css"
import UseFilters from "../hooks/useFilters";

export function Filters (){

    const {filters, setFilters} = UseFilters();
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{
        setFilters(prevStateFilter =>({
            ...prevStateFilter,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) =>{
        setFilters(prevStateFilter =>({
            ...prevStateFilter,
            category:event.target.value
        }))
    }


    return(
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input 
                type="range"
                id={minPriceFilterId}
                min={0}
                max={1000}
                value={filters.minPrice}
                onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}