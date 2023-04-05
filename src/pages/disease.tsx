import React, { ReactElement, useState } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import DiseaseItem from '../components/DiseaseItem'
import { useSampleDisease } from '../hooks/sampleData'
import { Disease } from '../interfaces'
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
      formData.append('diseaseCsvFile', selectedFile)

      try {
        const response = await fetch(
          'http://3.13.92.74:30009/master-data/admin/disease/disease.csv',
          {
            method: 'POST',
            body: formData,
            headers: {
              'X-USER-ID': '1',
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
  const { disease } = useSampleDisease()
  const data = disease && disease.response ? disease.response : []

  const handleSearchClick = async () => {
    try {
      let url
      if (searchOption === 'id') {
        url = `http://3.13.92.74:30009/master-data/admin/disease/id`
      } else {
        url = `http://3.13.92.74:30009/master-data/admin/disease/name`
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
          {data.map((disease: Disease) => (
            <CardBox className="mb-6">
              <DiseaseItem key={disease.id} disease={disease} />
            </CardBox>
          ))}
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
