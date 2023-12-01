import {useState} from "react"
export const Step1 = ()=>{
  const [name,setName]   = useState()
  const [email,setEmail]   = useState()
  const [phone,setPhone]   = useState()
  return(
    <div class="w-screen flex justify-center">
    <div class="w-72 rounded-2xl bg-white p-5  absolute top-20 shadow-lg">
 <div class=" text-2xl text-[#060E5E] font-bold">Personal info</div>
  <div class="text-gray-400 text-sm">Please provide your name, email address, and phone number.</div>

  <label class="text-[#060E5E] tex-sm">Name</label>
 <input placeholder="e.g. Stephen King" required  class="input" onChange={(e)=>setName(e.target.value)} value={name}/>
 <label class="text-[#060E5E] tex-sm"> Email Address</label>
 <input required placeholder="e.g. stephenking@lorem.com" type="email" class="input" onChange={(e)=>setEmail(e.target.value)} value={email}/>

 <label class="text-[#060E5E] tex-sm"> Phone Number</label>
 <input required placeholder="e.g. +1 234 567 890" class="input" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
    </div>
    </div>
    )
}