
interface BookProps{
  title: string,
  author: string, 
  category: string
  onDelete: () => void  
}

function ProductCard({title, author, category, onDelete}: BookProps) {
  

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <button onClick={onDelete}>O'chirish</button>
      <hr/>
    </div>
  )
}

export default ProductCard