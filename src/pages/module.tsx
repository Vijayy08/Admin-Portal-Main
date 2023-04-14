import React, { ReactElement, useState } from 'react'
import {  mdiSearchWeb } from '@mdi/js'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import { useSampleModules } from '../hooks/sampleData'
import { Module } from '../interfaces'
import ModuleItem from '../components/ModuleItem'
import ModuleComponent from '../components/ModuleComponent'
const TablesPage = () => {
  const [searchOption, setSearchOption] = useState('')
  const [searchId, setSearchId] = useState('')
  const [data, setData] = useState([])
  const { module } = useSampleModules()
  const [showComponent, setShowComponent] = useState(false)
  const originalData = module && module.response ? module.response : []
  const handleSearchClick = async () => {
    try {
      let url
      if (searchOption === 'id') {
        if (searchId) {
          url = `http://3.13.92.74:30001/acl/admin/module/id/${searchId}`
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'X-USER-ID': '1',
            },
          })
          if (response.ok) {
            const module = await response.json()
            console.log(module)
            setData([module.response])
          } else {
            console.error('Error searching for formulations')
          }
        } else {
          console.error('Please enter an ID to search')
          return
        }
      } else if (searchOption === 'name') {
        url = `http://3.13.92.74:30001/acl/admin/module/name/${searchId}`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-USER-ID': '1',
          },
        })
        if (response.ok) {
          const module = await response.json()
          console.log(module)
          setData([module.response])
        } else {
          console.error('Error searching for formulations')
        }
      } else  {
        url = `http://3.13.92.74:30001/acl/admin/module/type/${searchId}`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-USER-ID': '1',
          },
        })
        if (response.ok) {
          const module = await response.json()
          console.log(module)
          setData(module.response)
        } else {
          console.error('Error searching for formulations')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleCancelClick = () => {
    setShowComponent(false)
  }
  return (
    <>
      <SectionMain>
        <CardBox className="mb-6">
          <div className="flex justify-between">
            <CardBox className=" bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 mb-6 ">
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
                  <option value="type">By Type</option>
                </select>
                {searchOption === 'id' && (
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Enter ID"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none mr-4"
                      style={{ width: '200px' }}
                    />
                  </div>
                )}
                {searchOption === 'name' && (
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none mr-4"
                      style={{ width: '200px' }}
                    />
                  </div>
                )}
                {searchOption === 'type' && (
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Enter type"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none mr-4"
                      style={{ width: '200px' }}
                    />
                  </div>
                )}

                <BaseButton
                  label="Search"
                  icon={mdiSearchWeb}
                  onClick={handleSearchClick}
                  className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </CardBox>
            <CardBox className=" bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 mb-6 ">
              <div>
                <BaseButton
                  label="Create Module"
                  onClick={() => setShowComponent(true)}
                  className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </CardBox>
          </div>
        </CardBox>
        {showComponent && (
          <CardBox className="mb-6">
            <ModuleComponent showComponent={handleCancelClick} />
          </CardBox>
        )}
        <CardBox className="mb-6">
          {searchId.length > 0
            ? data.map((module: Module) => (
                <CardBox className="mb-6">
                  <ModuleItem key={module.id} module={module} />
                </CardBox>
              ))
            : originalData.map((module: Module) => (
                <CardBox className="mb-6">
                  <ModuleItem key={module.id} module={module} />
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
