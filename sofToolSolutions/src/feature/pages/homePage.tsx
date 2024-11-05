import { useAuthStore } from "@/authStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "../core/ui/base-layout";

import { Card } from "../core";
import { GiLunarModule } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";





export const HomePage = () => {

  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
   
  const [showNavBar, setShowNavBar] = useState(true);
   
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setShowNavBar(window.innerWidth > 640); 
    };

    handleResize();
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  if (!isAuthenticated) return null;

  return (
    <BaseLayout
    header
    navBar={showNavBar}  
    
  >
  <div className="h-auto">
    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 w-10/12 justify-center mx-auto">  
        <div className="col-span-1">
         <Card  className="h-80 p-5  hover:cursor-pointer grid justify-center hover:shadow-2xl hover:bg-secondary-100 hover:text-white ">
         <GiLunarModule className="h-40 w-40 text-secondary-300 mt-7" />
         <p className="flex-none text-2xl font-semibold leading-3 -mt-4 ">Ver Modulos</p>
      </Card>
      </div>

    <div className="col-span-1 " onClick={() => navigate('/products')}>     
      <Card  className="h-80 p-5 hover:cursor-pointer  grid justify-center hover:shadow-2xl hover:bg-secondary-100 hover:text-white ">
      <MdOutlineProductionQuantityLimits className="h-40 w-40 text-secondary-300 mt-7" />
      <p   className="flex-none text-2xl font-semibold leading-3 -mt-4 ">Ver Productos</p>
      </Card>
        </div>
    </div>
  </div>

    </BaseLayout>
  )
}


