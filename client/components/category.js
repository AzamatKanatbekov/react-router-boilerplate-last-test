import React from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
  const [newCategory, setNewCategory] = React.useState('')
  return (
    <div className="text-center">
      {props.categoryList.map((el) => (
        <div className="my-2">
          <Link to={`/${el}`}>{el}</Link>
        </div>
      ))}
      <input
        type="text"
        className="bg-green-300"
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button type="button" className="bg-green-400" onClick={() => props.addCategory(newCategory)}>
        Go
      </button>
    </div>
  )
}

export default Category
