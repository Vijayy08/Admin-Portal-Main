import React, { useState } from 'react'
import Item from '../components/Item'
function DietItem({ diet }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(diet.name)
  const [targetAim, setTargetAim] = useState(diet.targetAim)
  const [vegan,setVegan]=useState(diet.vegan)
  
  const[vegetarian,setVegetarian]=useState(diet.vegetarian)
   
  const handleEditClick = () => {
    setEditing(true)
  }
 const handleCancelClick = () => {
   setEditing(false)
 }
 const handleUpdateClick = async () => {
   try {
     const response = await fetch(
       `http://3.13.92.74:30009/master-data/admin/diet/id/${diet.id}`,
       {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json',
           'X-USER-ID': '1',
         },
         body: JSON.stringify({
           name,
           targetAim,
           vegan
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
            <span className="font-bold">TargetAim:</span>{' '}
            <input
              value={targetAim}
              onChange={(e) => setTargetAim(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
            />
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Vegan:</span> <br />
            
            <div className="pl-10">
              {vegan.map((item, index) => (
                <div key={index}>
                  <h2>
                    <span className="font-bold ">Name:</span>{' '}
                    <input
                      value={item.name}
                      onChange={(e) => {
                        const newBreakfast = [...vegan]
                        newBreakfast[index].name = e.target.value
                        setVegan(newBreakfast)
                      }}
                      className="border border-gray-400 p-1 rounded-sm"
                    />
                  </h2>
                  <h2>
                    <span className="font-bold ">Total Servings:</span> {''}
                    <input
                      value={item.totalServings}
                      onChange={(e) => {
                        const newBreakfast = [...vegan]
                        newBreakfast[index].totalServings = e.target.value
                        setVegan(newBreakfast)
                      }}
                      className="border border-gray-400 p-1 rounded-sm"
                    />
                  </h2>
                  <h2>
                    <span className="font-bold ">Nutrition Info:</span>
                    <div className="pl-8">
                      {item.nutritionInfo.map((nutrition, index) => (
                        <div key={index}>
                          <h2>
                            <span className="font-bold ">Name:</span>{' '}
                            <input
                              value={nutrition.name}
                              onChange={(e) => {
                                const newBreakfast = [...vegan]
                                newBreakfast[index].nutritionInfo[index].name = e.target.value
                                setVegan(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">Amount:</span>{' '}
                            <input
                              value={nutrition.amount}
                              onChange={(e) => {
                                const newBreakfast = [...vegan]
                                newBreakfast[index].nutritionInfo[index].amount = e.target.value
                                setVegan(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">RequiredAmount:</span>{' '}
                            <input
                              value={nutrition.requiredAmount}
                              onChange={(e) => {
                                const newBreakfast = [...vegan]
                                newBreakfast[index].nutritionInfo[index].requiredAmount =
                                  e.target.value
                                setVegan(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                        </div>
                      ))}
                    </div>
                  </h2>
                </div>
              ))}
            </div>
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Vegetarian:</span> <br />
            
            <div className="pl-5">
              {vegetarian.map((item, index) => (
                <div key={index}>
                  <h2>
                    <span className="font-bold ">Name:</span>{' '}
                    <input
                      value={item.name}
                      onChange={(e) => {
                        const newBreakfast = [...vegetarian]
                        newBreakfast[index].name = e.target.value
                        setVegetarian(newBreakfast)
                      }}
                      className="border border-gray-400 p-1 rounded-sm"
                    />
                  </h2>
                  <h2>
                    <span className="font-bold ">Total Servings:</span> {''}
                    <input
                      value={item.totalServings}
                      onChange={(e) => {
                        const newBreakfast = [...vegetarian]
                        newBreakfast[index].totalServings = e.target.value
                        setVegetarian(newBreakfast)
                      }}
                      className="border border-gray-400 p-1 rounded-sm"
                    />
                  </h2>
                  <h2>
                    <span className="font-bold ">Nutrition Info:</span>
                    <div className="pl-8">
                      {item.nutritionInfo.map((nutrition, index) => (
                        <div key={index}>
                          <h2>
                            <span className="font-bold ">Name:</span>{' '}
                            <input
                              value={nutrition.name}
                              onChange={(e) => {
                                const newBreakfast = [...vegetarian]
                                newBreakfast[index].nutritionInfo[index].name = e.target.value
                                setVegetarian(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">Amount:</span>{' '}
                            <input
                              value={nutrition.amount}
                              onChange={(e) => {
                                const newBreakfast = [...vegetarian]
                                newBreakfast[index].nutritionInfo[index].amount = e.target.value
                                setVegetarian(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">RequiredAmount:</span>{' '}
                            <input
                              value={nutrition.requiredAmount}
                              onChange={(e) => {
                                const newBreakfast = [...vegetarian]
                                newBreakfast[index].nutritionInfo[index].requiredAmount =
                                  e.target.value
                                setVegetarian(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                        </div>
                      ))}
                    </div>
                  </h2>
                </div>
              ))}
            </div>
          </h2>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={handleUpdateClick}
            >
              Update
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Name:</span> {name}
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">TargetAim:</span> {targetAim}
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Vegan:</span> <br />
            
            <div className="pl-5">
              {vegan && vegan.map((item) => <Item key={item.name} item={item} />)}
            </div>
            
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Vegetarian:</span> <br />
           
            <div className="pl-10">
              {vegetarian && vegetarian.map((item) => <Item key={item.name} item={item} />)}
            </div>
            
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

export default DietItem
