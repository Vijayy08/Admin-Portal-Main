
import { mdiMonitor, mdiLock, mdiTable,mdiLeaf,mdiFood,mdiMedication,mdiOil,mdiFoodDrumstick,mdiLeafCircle,mdiYoga,mdiHospital,mdiHospitalBox,mdiCow } from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/tables',
    label: 'Questionarrie',
    icon: mdiTable,
  },
  {
    // href: '/new',
    label: 'MasterData',
    icon: mdiTable,
    menu: [
      { href: '/formulation', label: 'Formulation', icon: mdiMedication },
      { href: '/ingredient', label: 'Ingredient', icon: mdiLeaf },
      { href: '/diet', label: 'Diet', icon: mdiFood },
      { href: '/oil', label: 'Oil', icon: mdiOil },
      { href: '/disease', label: 'Disease', icon: mdiMedication},
      { href: '/pulses', label: 'Pulses', icon: mdiFood },
      
      { href: '/nonVeg', label: 'NonVeg', icon: mdiFoodDrumstick },
      { href: '/fruit', label: 'Fruit', icon: mdiFood },
      
     
      { href: '/vegetable', label: 'Vegetable', icon: mdiLeafCircle},
      { href: '/otherFood', label: 'OtherFood', icon: mdiFood },
      { href: '/diary', label: 'Diary', icon: mdiCow },
      { href: '/spice', label: 'Spice', icon: mdiFood },
      { href: '/veganfood', label: 'VeganFood', icon: mdiFood },
     
      { href: '/sweetner', label: 'Sweetner', icon: mdiFood },
      { href: '/cereal', label: 'Cereal', icon: mdiFood },
      { href: '/weekdiet', label: 'WeekDiet', icon: mdiFood }
    ],
  },

  {
    href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
]
//  fetch('http://3.13.92.74:30001/acl/user/module',{headers:{'accept': 'application/json' , 'X-USER-ID': '1'}}) // Replace with your API endpoint
//    .then((response) => response.json())
//    .then((data) => {
//      // Update menuAside array with submodules
//      console.log(data)
//      const masterDataMenuItem = menuAside.find((item) => item.label === 'MasterData')
//      if (masterDataMenuItem) {
//        masterDataMenuItem.menu = data.response.moduleList[0].subModuleList.map((subModule) => ({
//          href: `/${subModule.name.toLowerCase()}`,
//          label: subModule.name,
//        }))
//      }
//    })
//    .catch((error) => {
//      console.error('Failed to fetch submodules for MasterData', error)
//    })
//  fetch('https://jsonplaceholder.typicode.com/users') // Replace with your API endpoint
//    .then((response) => response.json())
//    .then((data) => {
//      // Update menuAside array with submodules
//      console.log(data)
//      const masterDataMenuItem = menuAside.find((item) => item.label === 'MasterData')
//      if (masterDataMenuItem) {
//        masterDataMenuItem.menu = data.map((subModule) => ({
//          href: `/${subModule.name.toLowerCase()}`,
//          label: subModule.name,
//        }))

//      }
//    })
//    .catch((error) => {
//      console.error('Failed to fetch submodules for MasterData', error)
//    })


export default menuAside

