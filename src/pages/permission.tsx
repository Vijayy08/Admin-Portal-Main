import React, { ReactElement, useState } from 'react'
import { mdiUpload, mdiSearchWeb } from '@mdi/js'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import { useSamplePermission } from '../hooks/sampleData'
import {Permission } from '../interfaces'
import PermissionItem from '../components/PermissionItem'
const TablesPage = () => {
  const [searchOption, setSearchOption] = useState('')
  const [searchId, setSearchId] = useState('')
  const [data, setData] = useState([])
  const { permission } = useSamplePermission()
  const originalData = permission && permission.response ? permission.response : []
  const handleSearchClick = async () => {
    try {
      let url
      if (searchOption === 'id') {
        if (searchId) {
          url = `http://3.13.92.74:30001/acl/admin/permission/id/${searchId}`
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'X-USER-ID': '1',
            },
          })
          if (response.ok) {
            const permission = await response.json()
            console.log(permission)
            setData([permission.response])
          } else {
            console.error('Error searching for formulations')
          }
        } else {
          console.error('Please enter an ID to search')
          return
        }
      } else {
        url = `http://3.13.92.74:30001/acl/admin/permission/name/${searchId}`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-USER-ID': '1',
          },
        })
        if (response.ok) {
          const permission = await response.json()
          console.log(permission)
          setData([permission.response])
        } else {
          console.error('Error searching for formulations')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <SectionMain>
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

            <BaseButton
              label="Search"
              icon={mdiSearchWeb}
              onClick={handleSearchClick}
              className="bg-[#1da1f2] hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </CardBox>
        <CardBox className="mb-6">
          {searchId.length > 0
            ? data.map((permission: Permission) => (
                <CardBox className="mb-6">
                  <PermissionItem key={permission.id} permission={permission} />
                </CardBox>
              ))
            : originalData.map((permission: Permission) => (
                <CardBox className="mb-6">
                  <PermissionItem key={permission.id} permission={permission} />
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
