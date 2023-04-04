import React, { useState } from 'react'

function FormulationItem({ formulation }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(formulation.name)
  const [shortDescription, setShortdescription] = useState(formulation.shortDescription)
  const [longDescription, setLongdescription] = useState(formulation.longDescription)
  const [thumbnailImage, setThumbnailImage] = useState(formulation.thumbnailImage)
  const [ingredientIdList,setIngredientIdList]=useState(formulation.ingredientIdList.join(','))
  const [metaData,setMetaData]=useState(formulation.metaData.sellerProductId)
  const [imageList,setImageList]=useState(formulation.imageList.join(','))
  const handleEditClick = () => {
    setEditing(true)
  }

  const handleUpdateClick = () => {
    // call an API to update the medicine information here
    setEditing(false)
  }

  const handleDeleteClick = () => {
    // call an API to delete the medicine here
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      {editing ? (
        <>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Name:</span>{' '}
            <textarea
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">ShortDescription:</span>{' '}
            <textarea
              value={shortDescription}
              onChange={(e) => setShortdescription(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={4}
              style={{ width: '1000px' }}
            />
          </h2>
          <p className="text-lg font-medium">
            <span className="font-bold"> LongDescription:</span>{' '}
            <textarea
              value={longDescription}
              onChange={(e) => setLongdescription(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={4}
              style={{ width: '1000px' }}
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">ThumbnailImage:</span>{' '}
            <textarea
              value={thumbnailImage}
              onChange={(e) => setThumbnailImage(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Seller Product ID:</span>{' '}
            <textarea
              value={metaData}
              onChange={(e) => setMetaData(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Image List:</span>{' '}
            <textarea
              value={metaData}
              onChange={(e) => setImageList(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={handleUpdateClick}
            >
              Update
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Name:</span> {name}
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">ShortDescription:</span> {shortDescription}
          </h2>
          <p className="text-lg font-medium">
            <span className="font-bold">LongDescription: </span> {longDescription}
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">ThumbnailImage:</span> {thumbnailImage}
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Ingredient IDs:</span>
            {ingredientIdList}
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Seller Product ID:</span>
            {metaData}
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Image List:</span>
            {imageList}
          </p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default FormulationItem
