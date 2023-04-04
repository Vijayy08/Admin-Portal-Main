import NutritionItem from "./NutritionItem"
function Item({item}){
   return (
     <>
     
       <h2 className="text-lg font-medium">
         <span className="font-bold ">Name:</span> {item.name}
       </h2>
       <h2 className="text-lg font-medium">
         <span className="font-bold ">Total Servings:</span> {item.totalServings}
       </h2>
       <h2 className="text-lg font-medium">
         <span className="font-bold ">Nutrition Info:</span>
         <div className="pl-10">
           {item.nutritionInfo.map((item) => (
             <NutritionItem key={item.name} item={item} />
           ))}
         </div>
       </h2>
     </>
   )
}
export default Item