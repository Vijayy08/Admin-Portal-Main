import React, { useState } from 'react'

function IngredientItem({ ingredient }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(ingredient.name)
  const [sanskritName, setSanskritName] = useState(ingredient.sanskritName)
  const [description, setDescription] = useState(ingredient.description)
  const [quantity, setQuantity] = useState(ingredient.quantity)
  const [rasa, setRasa] = useState(ingredient.rasa)
  const [guna, setGuna] = useState(ingredient.guna)
  const [vipaka, setVipaka] = useState(ingredient.vipaka)

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleUpdateClick = async () => {
    try {
      const response = await fetch(
        `http://3.13.92.74:30009/master-data/admin/ingredient/id/${ingredient.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': '1',
          },
          body: JSON.stringify({
            name,
            sanskritName,
            description,
            quantity,
            rasa,
            guna,
            vipaka
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to update the data')
      }

      setEditing(false)
    } catch (error) {
      console.error(error)
    }
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
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">SanskritName:</span>{' '}
            <input
              value={sanskritName}
              onChange={(e) => setSanskritName(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </h2>
          <p className="text-lg font-medium">
            <span className="font-bold"> Description:</span>{' '}
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold"> Quantity:</span>{' '}
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Rasa:</span>{' '}
            <input
              value={rasa}
              onChange={(e) => setRasa(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Guna:</span>{' '}
            <input
              value={guna}
              onChange={(e) => setGuna(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Vipaka:</span>{' '}
            <input
              value={vipaka}
              onChange={(e) => setVipaka(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
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
            <span className="font-bold">Name:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{name}</p>
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">SanskritName:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{sanskritName}</p>
          </h2>
          <p className="text-lg font-medium">
            <span className="font-bold">Description: </span>
            <p className="border border-gray-400 p-1 rounded-sm">{description}</p>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Quantity:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{quantity}</p>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Rasa:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{rasa}</p>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Guna:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{guna}</p>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Vipaka:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{vipaka}</p>
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

export default IngredientItem
