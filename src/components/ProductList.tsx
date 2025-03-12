import ProductCard from "./ProductCard"

interface Book {
  id: number, 
  title: string, 
  author: string, 
  category: string,
}

interface BookProps {
  books: Book[]
  onDelete: (id: number) => void
}

function ProductList({ books, onDelete}: BookProps) {
  
  
  return (
    <div>
      <h1>Kitoblar ro'yhati</h1>
      {
        books.length > 0 
        ? books.map(book => (
          <div key={book.id}>
            <ProductCard  {...book} onDelete = {() => onDelete(book.id)}/>
          </div>
          
        ))
        : <p>Ma'lumot mavjud emas</p>
      }
    </div>
  )
}


export default ProductList