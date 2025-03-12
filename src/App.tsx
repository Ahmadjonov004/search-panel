import { useState } from 'react'
import {books as booksData} from '../public/data/book'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [books, setBooks] = useState(booksData)



  return (
    <div>
      <ProductList books = {books}/>
    </div>
  )
}

export default App