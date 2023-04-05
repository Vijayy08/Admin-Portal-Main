import React, { useState } from 'react'
import PpgItem from './PpgItem'

function WeekDietItem({ weekdiet }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(weekdiet.name)
  
  const [ppgIdList, setPpgIdList] = useState(
    weekdiet.pathophysiologyGoalIdList ? weekdiet.pathophysiologyGoalIdList.join(',') : ''
  )
  const handleEditClick = () => {
    setEditing(true)
  }

  const handleUpdateClick = async () => {
    try {
      const response = await fetch(
        `http://3.13.92.74:30009/master-data/admin/week-diet/id/${weekdiet.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': '1',
          },
          body: JSON.stringify({
            name,
            ppgIdList
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

          <p className="text-lg font-medium">
            <span className="font-bold">PathophysiologyGoalId List:</span>{' '}
            <textarea
              value={ppgIdList}
              onChange={(e) => setPpgIdList(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={4}
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
            <span className="font-bold">Name:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{name}</p>
          </h2>

          <h2 className="text-lg font-medium">
            <span className="font-bold">PathophysiologyGoalId List:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{ppgIdList}</p>
          </h2>
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

export default WeekDietItem
