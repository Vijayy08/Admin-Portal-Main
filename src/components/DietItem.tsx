import React, { useState } from 'react'
import Item from '../components/Item'
function DietItem({ diet }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(diet.name)
  const [targetAim, setTargetAim] = useState(diet.targetAim)
  const [breakfast,setBreakfast]=useState(diet.vegan.breakfast)
  const [lunch,setLunch]=useState(diet.vegan.lunch)
  const [dinner,setDinner]=useState(diet.vegan.dinner)
  const[vegbreakfast,setVegBreakfast]=useState(diet.vegetarian.breakfast)
   const [veglunch, setVegLunch] = useState(diet.vegetarian.lunch)
    const [vegdinner, setVegDinner] = useState(diet.vegetarian.dinner)
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
            <span className="font-bold pl-5"> Breakfast:</span>
            <div className="pl-10">
              {breakfast.map((item, index) => (
                <div key={index}>
                  <h2>
                    <span className="font-bold ">Name:</span>{' '}
                    <input
                      value={item.name}
                      onChange={(e) => {
                        const newBreakfast = [...breakfast]
                        newBreakfast[index].name = e.target.value
                        setBreakfast(newBreakfast)
                      }}
                      className="border border-gray-400 p-1 rounded-sm"
                    />
                  </h2>
                  <h2>
                    <span className="font-bold ">Total Servings:</span> {''}
                    <input
                      value={item.totalServings}
                      onChange={(e) => {
                        const newBreakfast = [...breakfast]
                        newBreakfast[index].totalServings = e.target.value
                        setBreakfast(newBreakfast)
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
                                const newBreakfast = [...breakfast]
                                newBreakfast[index].nutritionInfo[index].name = e.target.value
                                setBreakfast(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">Amount:</span>{' '}
                            <input
                              value={nutrition.amount}
                              onChange={(e) => {
                                const newBreakfast = [...breakfast]
                                newBreakfast[index].nutritionInfo[index].amount = e.target.value
                                setBreakfast(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">RequiredAmount:</span>{' '}
                            <input
                              value={nutrition.requiredAmount}
                              onChange={(e) => {
                                const newBreakfast = [...breakfast]
                                newBreakfast[index].nutritionInfo[index].requiredAmount =
                                  e.target.value
                                setBreakfast(newBreakfast)
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
            <span className="font-bold pl-5"> Breakfast:</span>
            <div className="pl-10">
              {vegbreakfast.map((item, index) => (
                <div key={index}>
                  <h2>
                    <span className="font-bold ">Name:</span>{' '}
                    <input
                      value={item.name}
                      onChange={(e) => {
                        const newBreakfast = [...vegbreakfast]
                        newBreakfast[index].name = e.target.value
                        setVegBreakfast(newBreakfast)
                      }}
                      className="border border-gray-400 p-1 rounded-sm"
                    />
                  </h2>
                  <h2>
                    <span className="font-bold ">Total Servings:</span> {''}
                    <input
                      value={item.totalServings}
                      onChange={(e) => {
                        const newBreakfast = [...vegbreakfast]
                        newBreakfast[index].totalServings = e.target.value
                        setVegBreakfast(newBreakfast)
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
                                const newBreakfast = [...vegbreakfast]
                                newBreakfast[index].nutritionInfo[index].name = e.target.value
                                setVegBreakfast(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">Amount:</span>{' '}
                            <input
                              value={nutrition.amount}
                              onChange={(e) => {
                                const newBreakfast = [...vegbreakfast]
                                newBreakfast[index].nutritionInfo[index].amount = e.target.value
                                setVegBreakfast(newBreakfast)
                              }}
                              className="border border-gray-400 p-1 rounded-sm"
                            />
                          </h2>
                          <h2>
                            <span className="font-bold ">RequiredAmount:</span>{' '}
                            <input
                              value={nutrition.requiredAmount}
                              onChange={(e) => {
                                const newBreakfast = [...vegbreakfast]
                                newBreakfast[index].nutritionInfo[index].requiredAmount =
                                  e.target.value
                                setVegBreakfast(newBreakfast)
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
            <span className="font-bold pl-5"> Breakfast:</span>
            <div className="pl-10">
              {breakfast && breakfast.map((item) => <Item key={item.name} item={item} />)}
            </div>
            <span className="font-bold pl-5">Lunch:</span>
            <div className="pl-10">
              {lunch && lunch.map((item) => <Item key={item.name} item={item} />)}
            </div>
            <span className="font-bold pl-5">Dinner:</span>
            <div className="pl-10">
              {dinner && dinner.map((item) => <Item key={item.name} item={item} />)}
            </div>
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Vegetarian:</span> <br />
            <span className="font-bold pl-5"> Breakfast:</span>
            <div className="pl-10">
              {vegbreakfast && vegbreakfast.map((item) => <Item key={item.name} item={item} />)}
            </div>
            <span className="font-bold pl-5">Lunch:</span>
            <div className="pl-10">
              {veglunch && veglunch.map((item) => <Item key={item.name} item={item} />)}
            </div>
            <span className="font-bold pl-5">Dinner:</span>
            <div className="pl-10">
              {vegdinner && vegdinner.map((item) => <Item key={item.name} item={item} />)}
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
