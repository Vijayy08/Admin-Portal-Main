import React from 'react'
import { mdiLogout, mdiClose } from '@mdi/js'
import BaseIcon from './BaseIcon'
import AsideMenuItem from './AsideMenuItem'
import AsideMenuList from './AsideMenuList'
import { MenuAsideItem } from '../interfaces'
import { useAppSelector } from '../stores/hooks'

type Props = {
  menu: MenuAsideItem[]
  className?: string
  onAsideLgCloseClick: () => void
}

export default function AsideMenuLayer({ menu, className = '', ...props }: Props) {
  const asideStyle = useAppSelector((state) => state.style.asideStyle)
  const asideBrandStyle = useAppSelector((state) => state.style.asideBrandStyle)
  const asideScrollbarsStyle = useAppSelector((state) => state.style.asideScrollbarsStyle)
  const darkMode = useAppSelector((state) => state.style.darkMode)

  const logoutItem: MenuAsideItem = {
    label: 'Logout',
    icon: mdiLogout,
    color: 'info', 
    isLogout: true,
  }

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onAsideLgCloseClick()
  }

  return (
    <aside
      className={`${className} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    >
      <div
        className={`lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900 ${asideStyle}`}
      >
        <div
          className={`flex flex-row h-14 items-center justify-between dark:bg-slate-900 ${asideBrandStyle}`}
        >
          {/* <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <img
              className="object-contain h-10 w-96 ..."
              src="data:image/jpeg;base64,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"
            />
          </div> */}
          <div className="text-center flex-1 lg:text-left  xl:text-center xl:pl-0">
            <b className="font-black">Modules</b>
          </div>
          <button
            className="hidden lg:inline-block xl:hidden p-3"
            onClick={handleAsideLgCloseClick}
          >
            <BaseIcon path={mdiClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden ${
            darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle
          }`}
        >
          <AsideMenuList menu={menu} />
        </div>
        <ul>
          <AsideMenuItem item={logoutItem} />
        </ul>
      </div>
    </aside>
  )
}
