import useSWR from 'swr'
 
  
   const fetcher = (url: string) =>fetch(url).then((res) => {console.log(res) ;return res.json()})
  

 export const useSampleClients =  () => {
  const { data, error } = useSWR(
    'http://3.13.92.74:30005/questionnaire/admin/question',
    fetcher
  )
   const clients= data ?? []
  
  return {
    clients,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleIngredients = () => {
  const { data, error } = useSWR('http://3.13.92.74:30009/master-data/admin/ingredient', fetcher)
  const ingredients = data ?? []
   console.log(ingredients)
  return {
    ingredients,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleFormulations = () => {
  const { data, error } = useSWR('http://3.13.92.74:30009/master-data/admin/formulation', fetcher)
  const formulations = data ?? []
  console.log(formulations)
  return {
    formulations,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleYogas = () => {
  const { data, error } = useSWR('http://3.13.92.74:30009/master-data/admin/yoga', fetcher)
  const yogas = data ?? []
  console.log(yogas)
  return {
    yogas,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleDiets = () => {
  const { data, error } = useSWR('http://3.13.92.74:30009/master-data/admin/diet', fetcher)
  const diets = data ?? []
  console.log(diets)
  return {
    diets,
    isLoading: !error && !data,
    isError: error,
  }
}

 export const useSampleLabels = () => {
   const { data, error } = useSWR('/admin-one-react-tailwind/data-sources/clients.json', fetcher)
   

   return {
     clients : data?.data ?? [],
     isLoading: !error && !data,
     isError: error,
   }
 }



export const useSampleTransactions = () => {
  const { data, error } = useSWR('/admin-one-react-tailwind/data-sources/history.json', fetcher)

  return {
    transactions: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}
