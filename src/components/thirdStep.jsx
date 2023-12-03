import {useState,useEffect} from "react"
export const Step3 = ()=>{
  const [online,setOnline]= useState(true)
  const [storage,setStorage]=useState(true)
  const [custom,setCustom]=useState(true)
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
    if(online){
  localStorage.setItem("addOn",JSON.stringify(objectEl))}else{
    const oldArr = existingobj.filter(item=>item.title!=object.title)
localStorage.setItem("addOn",JSON.stringify(oldArr))
  }
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
  if(storage){
  localStorage.setItem("addOn",JSON.stringify(objectEl))}else{
    const oldArr = existingobj.filter(item=>item.title!=object.title)
localStorage.setItem("addOn",JSON.stringify(oldArr))
  }
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
  if(custom){
  localStorage.setItem("addOn",JSON.stringify(objectEl))}else{
    const oldArr = existingobj.filter(item=>item.title!=object.title)
localStorage.setItem("addOn",JSON.stringify(oldArr))
  }
  }
  
  return(
    <div class="w-screen flex justify-center md:w-min">
    <div class="w-[300px] rounded-2xl bg-white p-4 md:static absolute top-20 shadow-lg md:shadow-none md:rounded-none  md:w-[600px]">
 <div class=" text-2xl text-[#060E5E] font-bold">Pick add-ons</div>
  <div class="text-gray-400 text-sm"> Add-ons help enhance your gaming experience.</div>
  
<div class="cards_options hover:bg-[#F9F0FF] md:w-[500px] w-max hover:border-purple-500" >
<input type="checkbox" class="checked:bg-purple-600 " onChange={()=>{
setOnline(state=>!state) ;
handleOns()}}  value={online}/>
<div class="flex flex-col md:w-[90%] ml-2">
<div class="text-[#060E5E] text-sm font-bold">Online service</div>
<div class="flex flex-row md:justify-between w-[100%]">
 <div class="text-sm text-gray-500 w-max">Access to multiplayer games</div>
 <div class="text-xs font-bold text-[#060E5E] ml-1">{plan[0]}</div>
 </div>
 </div>
 </div>
 
<div class="cards_options hover:bg-[#F9F0FF] md:w-[500px] w-max hover:border-purple-500 " >
<input type="checkbox" class="checked:bg-purple-600" onChange={()=>{
setStorage(state=>!state) ;
handleStorage()}}  value={storage} />
<div class="flex flex-col md:w-[90%]  ml-2">
<div class="text-[#060E5E] text-sm font-bold">Larger storage</div>
<div class="flex flex-row md:justify-between w-[227px]">
 <div class="text-sm text-gray-500 w-max">Extra 1TB of cloud save</div>
  <div class="text-xs font-bold text-[#060E5E] ml-1">{plan[1]}</div>
  </div>
 </div>
 </div>
 
<div class="cards_options md:w-[500px] w-max pr-2 hover:bg-[#F9F0FF] hover:border-purple-500" >
<input type="checkbox" class="checked:bg-purple-600" onChange={()=>{
setCustom(state=>!state) ;
handleCustom()}}  value={custom}/>
<div class="flex flex-col ml-2 md:w-[90%]">
<div class="text-[#060E5E] text-sm font-bold">Customizable Profile</div>
<div class="flex flex-row md:justify-between  w-[100%]">
 <div class="text-sm text-gray-500 w-max">Custom theme on your profile</div>
 <div class="text-xs font-bold text-[#060E5E]  ml-1 w-min">{plan[2]}</div>
 </div>
 </div>
 </div>
<div></div>

    </div>
    </div>
    )
}