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
  const [showNavBar, setShowNavBar] = useState(true);
    
    

  useEffect(() => {
     if(Array.isArray(data)){
      setDataProducts(data)
     }
  }, [data])

  useEffect(() => {
    const handleResize = () => {
      setShowNavBar(window.innerWidth > 640); 
    };

    handleResize();
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);
  
  return (
    <BaseLayout
    header
    navBar={showNavBar}
   
  >
    <div className="grid md:grid-cols-4 grid-cols-1  gap-6  ">
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

