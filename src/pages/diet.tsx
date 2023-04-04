import React, { ReactElement, useState } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import DietItem from '../components/DietItem'
import { useSampleDiets } from '../hooks/sampleData'

import { mdiSearchWeb, mdiUpload } from '@mdi/js'
const TablesPage = () => {
  const [searchOption, setSearchOption] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file)
  }

  const handleUploadButtonClick = async () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append('file', selectedFile)

      try {
        const response = await fetch('http://3.13.92.74:30009/master-data/admin/diet/diet.csv', {
          method: 'POST',
          body: formData,
          headers: {
            accept: 'application/json',
            'X-USER-ID': '1',
            'Content-Type': 'multipart/form-data',
          },
        })
        if (response.ok) {
          console.log('File uploaded successfully')
          setSelectedFile(null)
        } else {
          console.error('Error uploading file')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  // const { diets } = useSampleDiets()
  // const data = diets && diets.response ? diets.response : []

  const handleSearchClick = async () => {
    try {
      let url
      if (searchOption === 'id') {
        url = `http://3.13.92.74:30009/master-data/admin/diet/id`
      } 
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-USER-ID': '1',
        },
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      } else {
        console.error('Error searching for formulations')
      }
    } catch (error) {
      console.error(error)
    }
  }
  const diet = {
   id: "a40282f7-eb27-4838-9391-61cedf2be627",
   status: 1,
   name: "Deepana diet chart",
   targetAim: "Deepana",
   vegan: {
      "breakfast": [
          {
            "name": "Sunshine Barley Bowl",
            "totalServings": "6",
            "nutritionInfo": [
              {
                "name": "Cereal Gruel",
                "amount": "",
                "requiredAmount": ""
              },
              {
                "name": "Carbohydrates",
                "amount": "16.5 gm",
                "requiredAmount": "16.5 gm"
              },
            ],
            "mediaIdList": [
              ""
            ]
          },
          {
            "name": "CCF Tea",
            "totalServings": "8",
            "nutritionInfo": [
              {
                "name": "Cumin",
                "amount": "100 ml",
                "requiredAmount": "100 ml"
              },
            ],
            "mediaIdList": [
              ""
            ]
          }
        ],
        "lunch": [
          {
            "name": "Pesto Khichadi",
            "totalServings": "5",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "66.1 gm",
                "requiredAmount": "66.1 gm"
              },
            ],
            "mediaIdList": [
              ""
            ]
          },
          {
            "name": "Appetizing puffed rice gruel",
            "totalServings": "6",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "44.9 gm",
                "requiredAmount": "44.9 gm"
              },
            ],
            "mediaIdList": [
              ""
            ]
          }
        ],
        "dinner": [
          {
            "name": "Rainbow Fruit Platter",
            "totalServings": "7",
            "nutritionInfo": [
              {
                "name": "Pomegranate",
                "amount": "",
                "requiredAmount": ""
              },
              
            ],
            "mediaIdList": [
              ""
            ]
          }
        ]
      },
      vegetarian: {
        "breakfast": [
          {
            "name": "Veg Barley Soup",
            "totalServings": "string",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "25.7 gm",
                "requiredAmount": "25.7 gm"
              },
            ],
            "mediaIdList": [
              ""
            ]
          },
          {
            "name": "Sauteed Calabash, Barley Flarbread, Buttermik",
            "totalServings": "string",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "5.8 gm",
                "requiredAmount": "5.8 gm"
              },
            ],
          }
        ],
        "lunch": [
          {
            "name": "Puffed Grain Party",
            "totalServings": "5",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "12 gm",
                "requiredAmount": "12 gm"
              },
            ]
          }
        ],
        "dinner": [
          {
            "name": "Vegetable Pigeon pea soup",
            "totalServings": "6",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "24.7 gm",
                "requiredAmount": "24.7 gm"
              },
            ],
          },
          {
            "name": "Spiced tangy lemonade",
            "totalServings": "7",
            "nutritionInfo": [
              {
                "name": "Carbohydrates",
                "amount": "9.3 gm",
                "requiredAmount": "9.3 gm"
              },
            ],
          }
        ]
      },
      
      recommendedFoodItem: {
        "cerealIdList": [
          "5f99bc90-63c7-46b4-a356-da43fadfcb5b",
          "b24f46f1-6098-486e-b2bd-8e81b389c02c",
          "469427a9-ea73-48c2-994f-81cceae5112a",
          "73b8957b-9b55-4a33-938f-70beb66644e1",
          "b504edf3-abe8-4ba8-bb9e-2fe8889d0c44"
        ],
        "pulsesIdList": [
          "f407eaa0-051c-4a76-81aa-7d56da540540",
          "98590835-4e28-4286-b828-532d1d1b1304"
        ],
        "cerealList": null,
      },
      quantityPerDay: {
        "calories": "2400 cal/day",
        "nutsAndSeedsQuantity": "6.5 oz",
        "cerealQuantity": "{\"entity\": \"CEREAL\", \"entityId\": \"5f99bc90-63c7-46b4-a356-da43fadfcb5b\", \"quantity\": \"7 oz\"}",
      },   
 
  }

  return (
    <>
      <SectionMain>
        <CardBox className=' className=" bg-gradient-to-tr from-yellow-500 via-orange-300 to-yellow-500 mb-6 '>
          <div className="flex justify-between">
            <div className="flex justify-end">
              <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
                className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none "
                style={{ width: '200px' }}
              >
                <option value="">Select an option</option>
                <option value="id">By ID</option>
               
              </select>
              <BaseButton
                label="Search"
                icon={mdiSearchWeb}
                onClick={handleSearchClick}
                className="bg-[#1da1f2] hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
              />
            </div>
            <div>
              <input type="file" onChange={handleFileInputChange} />
              <BaseButton
                label="Upload"
                icon={mdiUpload}
                onClick={handleUploadButtonClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              />
            </div>
          </div>
        </CardBox>
        <CardBox className="mb-6">
          <DietItem diet={diet} />
          {/* {data.map((diet) => (
            <DietItem key={diet.id} diet={diet} />
          ))} */}
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
