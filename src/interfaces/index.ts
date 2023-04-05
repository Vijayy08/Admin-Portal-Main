export type UserPayloadObject = {
  name: string
  email: string
  avatar: string
}
 
export type MenuAsideItem = {
  label: string
  icon?: string
  href?: string
  target?: string
  color?: ColorButtonKey
  isLogout?: boolean
  menu?: MenuAsideItem[]
}

export type MenuNavBarItem = {
  label?: string
  icon?: string
  href?: string
  target?: string
  isDivider?: boolean
  isLogout?: boolean
  isDesktopNoLabel?: boolean
  isToggleLightDark?: boolean
  isCurrentUser?: boolean
  menu?: MenuNavBarItem[]
}

export type ColorKey = 'white' | 'light' | 'contrast' | 'success' | 'danger' | 'warning' | 'info'

export type ColorButtonKey =
  | 'white'
  | 'whiteDark'
  | 'lightDark'
  | 'contrast'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'void'

export type BgKey = 'purplePink' | 'pinkRed'

export type TrendType = 'up' | 'down' | 'success' | 'danger' | 'warning' | 'info'

export type TransactionType = 'withdraw' | 'deposit' | 'invoice' | 'payment'

export type Transaction = {
  id: number
  amount: number
  account: string
  name: string
  date: string
  type: TransactionType
  business: string
}

export type Client = {
  id: number
  content: string
  categoryId: string
  groupId: string
 
  
}
export type Ingredient = {
  id: number
  name: string
  sanskritName: string
  description: string
  quantity: string
 rasa: string
  guna: string
  vipaka: string
}
export type Formulation = {
  id: string
  status: number
  name: string
  shortDescription: string
  longDescription: string
  ingredientIdList: string[]
  metaData: {
    sellerProductId: string
  }
  imageList: string[]
  thumbnailImage: string
  ingredientList: null | any[]
}
export type Yoga={
  id:string
  status:number
  name:string
}
export type Surgery = {
  id: string
  status: number
  name: string
}
export type Symptom = {
  id: string
  status: number
  name: string
}
export type Disease = {
  id: string
  status: number
  name: string
  description: string
  pathophysiologicalGoalIdList: null | any[]
  formulationIdList: string[]

  formulationList: null | any[]
}


export type StyleKey = 'white' | 'basic'

export type UserForm = {
  name: string
  email: string
}
