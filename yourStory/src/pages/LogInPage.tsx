import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



type Iuserlogin={
  
  Username:string,
  Password:string,
}

export default function LogInPage() {

  const [input,setInput] =React.useState<Iuserlogin>({
    Username:"",
    Password:"",

  })
   
  const [inputuse,setInputuser] = React.useState<Iuserlogin[]>([])

  
 React.useEffect(() => {
  axios.get("https://64ecabe1f9b2b70f2bfac3e1.mockapi.io/login")
  .then((res)=>{
    setInputuser(res.data)
  }).catch((err)=>{
    console.log(err);
    
  })

 },[input]);

 const Nav = useNavigate();
 

  return (

    <div className="min-h-screen py-40 bg-[#D3CEE1]" >
    <div className="container mx-auto ">
       <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('/src/assets/login.jpg')]"></div>
          <div className="w-full lg:w-1/2 py-16 px-12"> 
              <h1 className=' text-3xl text-center text-[#2d3f72]'>أهلا بكم في قصتي</h1>
              <h2  className="text-2xl mb-4 text-center p-2 text-[#3e4f7e]">تسجيل دخول</h2>
              <form>
                 <div className="mt-5">
                     <input  className="border-2 rounded-md border-[#FB9324] py-1 px-2 w-full text-right" type='text' value={input.Username} placeholder='اسم مستخدم' onChange={(e)=>{setInput({...input,Username:e.target.value})}}/>
                 </div>
                 <div className="mt-5">
                     <input  className="border-2 rounded-md border-[#FB9324] py-1 px-2 w-full text-right" type='password' value={input.Password} placeholder='كلمة المرور'onChange={(e)=>{setInput({...input,Password:e.target.value})}}/>
                 </div>
                 
                 <div className="mt-5">
                   <button className="w-full bg-[#69C0DC] rounded-full py-3 text-center text-white"onClick={()=>{
                     inputuse.map((user) => {
                     
                      if (input.Username === user.Username && input.Password === user.Password) {
                        
                        Nav('/UserPage');
                      } else {
                        
                        toast.error('فشل تسجيل الدخول. يرجى التحقق من بيانات .');
                      }

                     })
                   }}>تسجيل دخول</button>
                   <ToastContainer 
                   position = {"top-center"}
                   autoClose = {false} 
                   closeOnClick= {true}
                   pauseOnHover = {false}
                   pauseOnFocusLoss = {false}
                   draggable = {false}
                    />
                </div>
                <p className='pt-10 text-center text-[#FED7D8] text-xl' >ليس لديك حساب؟ <a className="font-semibold text-base text-[#212F54]  hover:underline"href="/">سجل الأن</a></p>
                
              </form>

        </div>

    
    </div>
   </div>
  </div>

  )
}
