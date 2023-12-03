import {useState} from "react"
export const Step1 = ()=>{
  const [name,setName]   = useState()
  const [email,setEmail]   = useState()
  const [phone,setPhone]   = useState()
  return(
    <div class="w-screen flex justify-center md:justify-start md items-center md:w-min">
    <div class="w-72 rounded-2xl bg-white p-5 md:static absolute top-20 shadow-lg md:shadow-none md:rounded-none  md:w-[600px]">
 <div class=" text-2xl text-[#060E5E] font-bold">Personal info</div>
  <div class="text-gray-400 text-sm">Please provide your name, email address, and phone number.</div>

  <label class="text-[#060E5E] tex-sm">Name</label><br/>
 <input placeholder="e.g. Stephen King" required  class="input md:w-[90%] md:p-5" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
 <label class="text-[#060E5E] tex-sm"> Email Address</label><br/>
 <input required placeholder="e.g. stephenking@lorem.com" type="email" class="input md:w-[90%] md:p-5" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>

 <label class="text-[#060E5E] tex-sm"> Phone Number</label><br/>
 <input required placeholder="e.g. +1 234 567 890" class="input md:w-[90%] md:p-5" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
    </div>
    </div>
    )
}