export const metadata = {
title:"Leadlight Repairs Brisbane",
description:
"Traditional stained glass and leadlight repair services in Queensland."
};

export default function Repairs(){
return(

<main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

<div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

<h1 className="text-4xl font-serif text-center mb-10">
Restoration & Repairs
</h1>

<p className="text-center max-w-2xl mx-auto mb-16">
Bringing damaged or aged stained glass back to life
with care, precision and respect.
</p>


<div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">

<div>
<p className="mb-2 text-sm text-gray-500">
Before
</p>

<img
src="/images/before1.jpg"
alt="Damaged leadlight before repair"
className="rounded-xl glow"
/>
</div>


<div>
<p className="mb-2 text-sm text-gray-500">
After
</p>

<img
src="/images/after1.jpg"
alt="Restored stained glass after repair"
className="rounded-xl glow"
/>

</div>

</div>


<div className="text-center">
<a
href="/contact"
className="btn-primary"
>
Request A Repair Quote
</a>
</div>

</main>

)
}