
interface BookProps{
  title: string,
  author: string, 
  category: string
}

function ProductCard({title, author, category}: BookProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <button>O'chirish</button>
      <hr/>
    </div>
  )
}

export default ProductCard