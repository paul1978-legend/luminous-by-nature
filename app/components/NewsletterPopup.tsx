"use client";

import {useEffect,useState} from "react";

export default function NewsletterPopup(){

const [open,setOpen]=useState(false);

useEffect(()=>{

const dismissed=
localStorage.getItem("newsletterDismissed");

if(!dismissed){

const timer=setTimeout(()=>{
setOpen(true);
},12000);

return ()=>clearTimeout(timer);

}

},[]);


function closePopup(){
localStorage.setItem(
"newsletterDismissed",
"true"
);
setOpen(false);
}

if(!open) return null;

return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

<div className="light-beam bg-[#F5F1E8] rounded-3xl shadow-2xl p-10 max-w-lg text-center relative">

<button
onClick={closePopup}
className="absolute top-4 right-5 text-xl text-gray-500 hover:text-black"
>
×
</button>

<div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

<h2 className="text-3xl font-serif mb-4">
Join Our Studio Newsletter
</h2>

<p className="text-gray-700 leading-relaxed mb-6">
Be first to hear about new works,
upcoming workshops,
special releases and studio inspirations.
</p>


<form
action="https://formspree.io/f/xlgaalob"
method="POST"
className="flex flex-col gap-4"
>

<input
type="email"
name="email"
required
placeholder="Your Email"
className="p-3 rounded-xl border"
/>

<input
type="hidden"
name="enquiryType"
value="Newsletter Signup"
/>

<button className="btn-primary">
Subscribe
</button>

</form>

<p className="text-xs text-gray-500 mt-4">
No spam. Just light and occasional magic ✨
</p>

</div>

</div>

)

}