import React, { ReactElement, useState } from 'react'
import { mdiUpload ,mdiSearchWeb} from '@mdi/js'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import IngredientItem from '../components/IngredientItem'
import { useSampleIngredients } from '../hooks/sampleData'
import { Ingredient } from '../interfaces'
const TablesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
 
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
        const response = await fetch(
          'http://3.13.92.74:30009/master-data/admin/ingredient/ingredient.csv',
          {
            method: 'POST',
            body: formData,
            headers: {
              accept: 'application/json',
              'X-USER-ID': '1',
              'Content-Type': 'multipart/form-data'
             
            },
          }
        )
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
  const ingredient = {
    id: '7187ac46-f3cd-434f-b97a-7458acfa2f56',
    status: 1,
    name: 'Test',
    sanskritName: 'Test',
    description: 'Test',
    quantity: '40mg',
    rasa: 'string',
    guna: 'string',
    vipaka: 'string',
  }
// const {ingredients}=useSampleIngredients();
// const data=ingredients&&ingredients.response?ingredients.response:[]
const handleSearchClick = async () => {
  try {
    const response = await fetch(
      `http://3.13.92.74:30009/master-data/admin/ingredient/search?query=${searchQuery}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-USER-ID': '1',
        },
      }
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    } else {
      console.error('Error searching for ingredients')
    }
  } catch (error) {
    console.error(error)
  }
}

 return (
   <>
     <SectionMain>
       

       <CardBox className=" bg-gradient-to-tr from-yellow-500 via-green-300 to-yellow-500 mb-6 ">
         <div className="flex justify-between">
           <div className="flex justify-end">
             <input
               type="text"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
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

       
       <CardBox>
         <IngredientItem ingredient={ingredient} />
         {/* {data.map((ingredient: Ingredient) => (
           <IngredientItem key={ingredient.id} ingredient={ingredient} />
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
