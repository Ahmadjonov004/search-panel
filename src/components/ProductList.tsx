import ProductCard from "./ProductCard"

interface Book {
  id: number, 
  title: string, 
  author: string, 
  category: string,
}

interface BookProps {
  books: Book[]
}

function ProductList({ books }: BookProps) {
  
  return (
    <div>
      <h1>Kitoblar ro'yhati</h1>
      {
        books.length > 0 
        ? books.map(book => (
          <ProductCard key={book.id} {...book}/>
        ))
        : <p>Ma'lumot mavjud emas</p>
      }
    </div>
  )
}


export default ProductList