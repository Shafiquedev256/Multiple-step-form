import {useState,useEffect} from "react"
export const Step3 = ()=>{
  const [planToggle,setPlanToggle] = useState(localStorage.getItem("period"))
  const [plan,setPlan] = useState([
    "+$1/mo","+$2/mo","+$2/mo"
    ])
  useEffect(()=>{
    if(planToggle == "Yearly"){
      setPlan(["+$10/yr","+$20/yr","+$20/yr"])
    }
    if(planToggle == "Monthly"){
      setPlan(["+$1/mo","+$2/mo","+$2/mo"])
    }
localStorage.setItem("period",planToggle)
  },[planToggle])
  
  useEffect(()=>{
    localStorage.setItem("addOn",JSON.stringify([]))
  },[])
  
  const handleOns = ()=>{
  let object = {
    title:"Online service",
    cost:plan[0],
    count:{
      Yearly:10,
      Monthly:1,
    }
  }
  const existingobj = JSON.parse(localStorage.getItem('addOn')) || [];
    
    const objectEl = [...existingobj,object]
  localStorage.setItem("addOn",JSON.stringify(objectEl))
  }
  
  const handleStorage = ()=>{
  let object = {
    title:"Larger storage",
    cost:plan[1],
    count:{
      Yearly:20,
      Monthly:2,
    }
  }
  const existingobj = JSON.parse(localStorage.getItem('addOn')) || [];
    
    const objectEl = [...existingobj,object]
  localStorage.setItem("addOn",JSON.stringify(objectEl))
  }
  const handleCustom = ()=>{
  let object = {
    title:"Customizable Profile",
    cost:plan[2],
    count:{
      Yearly:20,
      Monthly:2,
    }
  }
  const existingobj = JSON.parse(localStorage.getItem('addOn')) || [];
    
    const objectEl = [...existingobj,object]
  localStorage.setItem("addOn",JSON.stringify(objectEl))
  }
  
  return(
    <div class="w-screen flex justify-center">
    <div class="w-[300px] rounded-2xl bg-white p-4  absolute top-20 shadow-lg">
 <div class=" text-2xl text-[#060E5E] font-bold">Pick add-ons</div>
  <div class="text-gray-400 text-sm"> Add-ons help enhance your gaming experience.</div>
  
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500" onClick={handleOns}>
<input type="checkbox" class="checked:bg-purple-600 "/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] text-sm font-bold">Online service</div>
<div class="flex flex-row">
 <div class="text-sm text-gray-500 w-max">Access to multiplayer games</div>
 <div class="text-xs font-bold text-[#060E5E] ml-2">{plan[0]}</div>
 </div>
 </div>
 </div>
 
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500 " onClick={handleStorage}>
<input type="checkbox" class="checked:bg-purple-600"/>
<div class="flex flex-col  ml-2">
<div class="text-[#060E5E] text-sm font-bold">Larger storage</div>
<div class="flex flex-row">
 <div class="text-sm text-gray-500 w-max">Extra 1TB of cloud save</div>
  <div class="text-xs font-bold text-[#060E5E] ml-8">{plan[1]}</div>
  </div>
 </div>
 </div>
 
<div class="cards_options w-[100%] pr-2 hover:bg-[#F9F0FF] hover:border-purple-500" onClick={handleCustom}>
<input type="checkbox" class="checked:bg-purple-600"/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] text-sm font-bold">Customizable Profile</div>
<div class="flex flex-row justify-around">
 <div class="text-sm text-gray-500 w-max">Custom theme on your profile</div>
 <div class="text-xs font-bold text-[#060E5E] ml-1 mr-2 w-min">{plan[2]}</div>
 </div>
 </div>
 </div>
<div></div>

    </div>
    </div>
    )
}