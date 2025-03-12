import { useState } from 'react'
import {books as booksData} from '../public/data/book'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [books, setBooks] = useState(booksData)
  const [newBook, setNewBook] = useState({title: '', author: '', category: ''})
  const [filteredBooks, setFilteredBooks] = useState('All')

  const onDelete = (id:number) => {
    setBooks(books.filter(book => book.id!== id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewBook(prev => ({...prev, [name]: value }))
  }
  const addBook = () => {
    const newId =  books.length + 1
    setBooks([...books, {id: newId, ...newBook}])
    setNewBook({title: '', author: '', category: ''})
  }

  const filterBooks = filteredBooks === 'All' ? books : books.filter(book => book.category == filteredBooks)
  

  return (
    <div>
      <input 
      placeholder='Title...'
      name='title'
      value={newBook.title}
      onChange={handleChange}
      type="text" />
      <input 
      placeholder='Author...'
      name='author'
      value={newBook.author}
      onChange={handleChange}
      type="text" />
      <input 
      placeholder='Category...'
      name='category'
      value={newBook.category}
      onChange={handleChange}
      type="text" />
      <button onClick={addBook}>Qo'shish</button>
      <select 
        value = {filteredBooks}
        onChange={ (e)=> setFilteredBooks(e.target.value)}
          

      
      >
        <option value="All">All</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Programming">Programming</option>
        <option value="Finance">Finance</option>
        <option value="Business">Business</option>
        <option value="Science">Science</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Biography">Biography</option>
      </select>
      <ProductList books = {filterBooks} onDelete = {onDelete}/>
    </div>
  )
}

export default App