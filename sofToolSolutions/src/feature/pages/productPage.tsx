import { useEffect, useState } from "react"
import { useGetProductAll } from "../user/services/allProduct"
import { Card } from "../core"
import { BaseLayout } from "../core/ui/base-layout"
interface dataCard {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
}

export const ProductPage = () => {

  const { data} = useGetProductAll()
  const [dataProducts, setDataProducts] = useState<dataCard[]>([])

    
    

  useEffect(() => {
     if(Array.isArray(data)){
      setDataProducts(data)
     }
  }, [data])
  
  return (
    <BaseLayout
    header
   
  >
    <div className="grid grid-cols-4  gap-6  ">
      {dataProducts && dataProducts.map((dato) => (
         <Card className="grid justify-center p-5 hover:shadow-xl space-y-2 " key={dato.id}>
          <span >{ ` Nombre: ${dato.title.slice(0,15)}...`}</span>
           <img src={dato.image} alt={dato.title}  className=" h-44 w-44"/>
           <p>{ ` Precio: $${dato.price}`}</p>
         </Card>
      ))}
 
    </div>
    </BaseLayout>
  )
}

