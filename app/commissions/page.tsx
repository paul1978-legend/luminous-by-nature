import Image from "next/image";

export const metadata = {
title:"Custom Stained Glass Commissions",
description:
"Bespoke stained glass commissions for homes and sacred spaces."
};

export default function Commissions() {
return (
<>
<main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

{/* HERO */}
<section className="text-center max-w-3xl mx-auto mb-24">

<div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

<h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-wide">
Commission a Custom Piece
</h1>

<p className="text-lg text-gray-700 leading-relaxed">
A stained glass piece is more than decoration.
It is a story told through light.
Created uniquely for your space.
</p>

</section>



{/* FEATURED GALLERY */}
<section className="max-w-6xl mx-auto mb-24">

<h2 className="text-4xl font-serif text-center mb-12">
Featured Commissions
</h2>

<div className="grid md:grid-cols-3 gap-8">

<img
src="/images/commission1.jpg"
alt="Botanical stained glass commission Sunshine Coast"
className="glow rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
/>

<img
src="/images/commission2.jpg"
alt="Decorative leadlight commission Brisbane"
className="glow rounded-2xl h-80 w-full object-cover mt-10 hover:scale-105 transition duration-500"
/>

<img
src="/images/commission3.jpg"
alt="Custom handcrafted stained glass panel Queensland"
className="glow rounded-2xl h-80 w-full object-cover mt-6 hover:scale-105 transition duration-500"
/>

</div>

</section>



{/* COMMISSIONS GALLERY CATEGORIES */}
<section className="max-w-6xl mx-auto mb-24">

<h2 className="text-4xl font-serif text-center mb-12">
Commission Categories
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-md p-8 text-center">
<h3 className="text-2xl font-serif mb-4">
Residential
</h3>

<p className="text-gray-700">
Windows, doors, feature panels
and bespoke interior pieces.
</p>
</div>


<div className="bg-white rounded-2xl shadow-md p-8 text-center">
<h3 className="text-2xl font-serif mb-4">
Restoration
</h3>

<p className="text-gray-700">
Sensitive restoration of treasured
and historic stained glass.
</p>
</div>


<div className="bg-white rounded-2xl shadow-md p-8 text-center">
<h3 className="text-2xl font-serif mb-4">
Sacred Works
</h3>

<p className="text-gray-700">
Contemplative works for spiritual
and sacred spaces.
</p>
</div>

</div>

</section>



{/* PROCESS */}
<section className="max-w-5xl mx-auto text-center mb-24">

<h2 className="text-4xl font-serif mb-12">
How It Works
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div>
<h3 className="font-serif text-2xl mb-3">
1. Enquire
</h3>

<p>
Share your vision and space.
</p>
</div>


<div>
<h3 className="font-serif text-2xl mb-3">
2. Design
</h3>

<p>
A bespoke concept is created.
</p>
</div>


<div>
<h3 className="font-serif text-2xl mb-3">
3. Craft
</h3>

<p>
Your piece is made by hand in light.
</p>
</div>

</div>

</section>



{/* REVIEWS */}
<section className="max-w-6xl mx-auto text-center mb-24">

<div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

<h2 className="text-4xl font-serif mb-12">
Collected Kind Words
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-md">
<div className="text-[#D4A017] text-xl mb-4">
★★★★★
</div>

<p className="italic mb-4">
“Absolutely stunning craftsmanship.
The piece transformed our home.”
</p>

<p className="text-sm text-gray-500">
Google Review
</p>
</div>


<div className="bg-white rounded-2xl p-8 shadow-md">
<div className="text-[#D4A017] text-xl mb-4">
★★★★★
</div>

<p className="italic mb-4">
“Incredible workshop experience.”
</p>

<p className="text-sm text-gray-500">
ClassBento Review
</p>
</div>


<div className="bg-white rounded-2xl p-8 shadow-md">
<div className="text-[#D4A017] text-xl mb-4">
★★★★★
</div>

<p className="italic mb-4">
“Highly recommend. True artistry.”
</p>

<p className="text-sm text-gray-500">
Client Review
</p>
</div>

</div>


<p className="mt-10 italic text-lg text-gray-700">
Trusted by collectors, homeowners
and workshop students across Queensland.
</p>

</section>



{/* ENQUIRY FORM */}
<section className="max-w-xl mx-auto text-center">

<h2 className="text-4xl font-serif mb-8">
Start Your Commission
</h2>

<form
action="https://formspree.io/f/xlgaalob"
method="POST"
className="flex flex-col gap-4"
>

<input
type="text"
name="name"
placeholder="Your Name"
className="p-4 rounded-xl border"
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
className="p-4 rounded-xl border"
required
/>

<select
name="enquiryType"
className="p-4 rounded-xl border"
>
<option>Commission</option>
<option>Repair</option>
<option>General Enquiry</option>
</select>

<textarea
name="message"
rows={5}
placeholder="Tell us about your idea..."
className="p-4 rounded-xl border"
required
/>

<button className="btn-primary">
Send Enquiry
</button>

</form>

</section>


</main>



<a
href="/contact"
className="fixed bottom-6 right-6 bg-[#D4A017] text-black px-6 py-3 rounded-full shadow-lg z-50"
>
Enquire
</a>

</>
);
}