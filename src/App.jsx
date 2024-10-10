import { useState } from 'react'
import reactLogo from './image/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import milk from './image/milk.jpg'
 

const accordianData = [
  {id:1 ,title:"Pink Dragon" , content:"Fruit Puree , Tapioca Pearls (Boba) ,Milk or Non-Dairy Milk , Black Tea (optional)!"},
  {id:2 ,title:"Matcha     Tea" , content:"Matcha Powder, Tapioca Pearls (Boba), Milk or Non-Dairy Milk, Sweetener,Hot Water,Ice ,Whipped cream(optional) ,Vanilla extract(optional)!"},
  {id:3 ,title:" Choco    Oreo" , content:"Tapioca Pearls (Boba),Milk or Non-Dairy Milk,Chocolate Syrup,Oreos,Sweetener (optional),Ice,Whipped Cream (optional), Chocolate Chips or Cocoa Powder (optional)!"},
  {id:4 ,title:"Salted caramel" , content:"Salted Caramel Sauce,Tapioca Pearls (Boba), Milk or Non-Dairy Milk, Sweetener, Black Tea (optional),Sea Salt,Ice,Whipped cream (for topping),Extra caramel drizzle (for decoration,optional) !"},
  {id:5 ,title:"Strwabery Milk" , content:"Tapioca Pearls (Boba),Strawberries,Milk or Non-Dairy Milk,Sweetener,IceWhipped Cream (optional),Strawberry Syrup (optional)"}

]

function AccordionItem({title, content,isExpanded,onToggle}){
  return(
    <div  className={`bg-cyan-200
                    rounded-3xl
                    overflow-hidden 
                    transiton-all 
                    duration-300 ${ isExpanded?"max-h-96" :"max-h-20"}`}>
    
    <div  className="flex
                     justify-between
                     items-start
                     
                     p-6
                     cursor-pointer"
                     onClick={onToggle}>
    <div  className="text-2xl
                     font-bold
                     "
    style={{ fontFamily: "'Dancing Script', cursive ", color:"Black"}}            >{title}
                     
                    
    </div>   
    <i class={`bx bx-chevron-right text-4xl transition-all duration-300 ${isExpanded? "rotate-90" : ""} `}></i>
    <button className="font-bold
                       text-black
                       bg-white
                       text-1xl
                       border-2
                     
                       rounded-3xl
                       outline-3
                      focus:border-orange-600
                      focus:bg-pink-500
                      focus:text-white"
                       >Select</button>
    </div>
    <div className={`px-5
                    pb-5
                    overflow-hidden
                    transition-all
                    text-1xl
                    font-bold
                    duration-300${isExpanded? "opacity-100" :"opacity-0"}`}
                    style={{ fontFamily: "'Dancing Script', cursive ", color:"White" }}>{title}
                      
    <div>{content}</div>                  

    </div>

    </div>
  )
}

function App() {
  const [expandedId , setExpandedId] = useState(null);

  const toggleExpand = (id) =>{
    setExpandedId(expandedId === id? null : id)
  }
 
  return (
   <>
  
  <div  className="min-h-screen
                   flex
                   items-center
                   justify-center
                   w-full
                   bg-gradient-to-r
                   from-pink-500
                   via-orange-500
                   to-orange-300
                   
                   border-black
                   border-4
                   rounded-lg "
                   >
  <img src={milk} alt="" 
                 className="w-[650px] 
                            object-cover 
                            xl:rounded-tl-2xl
                            xl:rounded-tr-2xl
                            xl:rounded-br-2xl
                            xl:block hidden

                             border-pink-700
                             border-4
                             rounded-lg
                             "
                   style={{ marginLeft: '3rem' }}>

  </img>
                   
  <div  className="flex
                  flex-col
                  gap-3
                  max-w-md
                  mx-auto">
  <h1   className="flex
                  text-center
                  justify-center
                  text-4xl
                  font-bold">
                  
  <div style={{ fontFamily: "'Dancing Script', cursive " }}>Mr.Bobaa</div></h1>
                
                {accordianData.map((item) =>(
                  <AccordionItem key={item.id}
                {...item} 
                isExpanded ={expandedId === item.id}
                onToggle={() => toggleExpand(item.id)}
                  />
                ))}    
  </div>                 

   </div>
   </>
       
      
)
}

export default App
