import { Products } from './components/Products'
import {Header} from './components/Header.jsx'
import {products as initialProducts} from './mocks/products.json'
import { Footer } from './components/Footer'
import UseFilters from './hooks/useFilters'

function App() {

  const {filterProducts, filters} = UseFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header/>
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
