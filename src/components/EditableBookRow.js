import React from 'react'

function EditableBookRow() {
  return (
    <div>
      <tr>
        <td>
          <input type="text" 
          required="required" 
          placeholder="Enter a title" 
          name="title">
          </input>
        </td>
        <td>
        <input type="text" 
          required="required" 
          placeholder="Enter an author" 
          name="author">
          </input>
        </td>
        <td>
        <input type="text" 
          required="required" 
          placeholder="Enter a year" 
          name="year">
          </input>
        </td>
        <td>
        <input type="text" 
          required="required" 
          placeholder="Enter a genre" 
          name="genre">
          </input>
        </td>
        <td>
        <input type="text" 
          required="required" 
          placeholder="Have you read this?" 
          name="read">
          </input>
        </td>
      </tr>
    </div>
  )
}

export default EditableBookRow