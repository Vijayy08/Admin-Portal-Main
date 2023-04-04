import React, { ReactElement,useState } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import FormulationItem from '../components/FormulationItem'
// import { useSampleFormulations } from '../hooks/sampleData'
// import { Formulation } from '../interfaces'
import { mdiSearchWeb,mdiUpload } from '@mdi/js'
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
        const response = await fetch(
          'http://3.13.92.74:30009/master-data/admin/formulation/formulation.csv',
          {
            method: 'POST',
            body: formData,
            headers: {
              accept: 'application/json',
              'X-USER-ID': '1',
              'Content-Type': 'multipart/form-data',
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
  // const { formulations } = useSampleFormulations()
  // const data = formulations && formulations.response ? formulations.response : []

  const handleSearchClick = async () => {
    try {
      let url
      if (searchOption === 'id') {
        url = `http://3.13.92.74:30009/master-data/admin/formulation/id`
      } else {
        url = `http://3.13.92.74:30009/master-data/admin/formulation/name`
        
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
 const formulation = {
      id: "0ab3f975-a3d6-42d2-86c6-04146cf08b55",
      status: 1,
      name: "Kalyanaka Ghrita saptavarthi Capsule",
      shortDescription: "The term “oral schedule II prescription” means a prescription for a schedule II controlled substance that a practitioner conveys to a pharmacist via a telephone call or other oral form of communication – as opposed to via a written or electronic prescription.",
      longDescription: "The term “oral schedule II prescription” means a prescription for a schedule II controlled substance that a practitioner conveys to a pharmacist via a telephone call or other oral form of communication – as opposed to via a written or electronic prescription.",
      ingredientIdList: [
        "b5531d7b-0965-47af-a8ed-032069712e8d",
        "3df2a77c-6e8c-478e-aaf8-f5e52cd6f481",
        "1abd155d-1427-49c1-b0c5-67fe7792caa6",
        "103263b1-e9e8-4084-96e3-0c9e17582c07",
        "9bb2d59c-4f35-4a99-bde7-237619998f00",
        "8e2a94f9-567f-40df-936e-ce2b8f5f57df",
        "844312fb-ebab-46d7-9f21-6bb0f9c4e781",
        "1f48e755-d8c7-4d3c-96b5-9bce08c3028c",
        "fbd69177-6e06-44c1-a26e-618f15926552",
        "32c0cb54-cf26-48c7-beea-9489f1258cd0",
        "1bd6f94b-3057-4ca4-a2a3-7b3324736c21",
        "0121e04f-d95b-4b85-bfb5-455c1f7b96c0",
        "db260147-e5c1-4156-ab24-ef1d3fed2fa3",
        "f46b6916-068d-4dda-824f-9aded036b81b",
        "57dd9607-83f7-4475-94a7-9ce72c4470ac",
        "16846884-bb4e-4a5d-a248-a3c99527b637",
        "81df8cb0-d8bc-4724-aea9-36014504661c",
        "8e8c5bfa-2d91-4a21-95ba-a9fcf6cd88c3",
        "cd49a262-6ad9-4dbb-a57a-84f341f64792",
        "9a34e2ec-acde-47cd-b876-977e46a7b6e9",
        "9dc3220d-2b06-4bd5-b21a-a9a34629c8b1",
        "c84380a5-edce-429c-acc7-a6ebe26598b4",
        "9d0b73c8-b322-46c6-a294-cfb1686b214f",
        "e2208a97-4d7d-4167-ab7a-5426d6012636",
        "ed4a9033-e569-41e6-8524-d2599d52cf38",
        "aa89142c-ee3e-4cf8-8ec4-d429e01bc296",
        "6fd25849-e770-4c04-b9fd-f9ed06754975",
        "60caaf02-c349-4e14-acd0-54cbe4739e23"
      ],
      metaData: {
        "sellerProductId": "f6d63e0d-06d2-447d-8f8f-26489a0ab60d"
      },
      imageList: [
        "https://d1ogkutqo175yl.cloudfront.net/images/lybl/Kamdudha+Ras+Muktik.png"
      ],
      thumbnailImage: "https://d1ogkutqo175yl.cloudfront.net/images/lybl/Kamdudha+Ras+Muktik.png",
      ingredientList: null
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
                <option value="name">By Name</option>
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
          <FormulationItem formulation={formulation} />
          {/* {data.map((formulation: Formulation) => (
            <FormulationItem key={formulation.id} formulation={formulation} />
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
