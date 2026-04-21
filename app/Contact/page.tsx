export default function Contact() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-serif mb-6">Contact Us</h1>

        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="flex flex-col gap-4">

          <input type="text" name="name" placeholder="Your Name" className="p-3 rounded-xl" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 rounded-xl" required />
          <textarea name="message" placeholder="Your Message" className="p-3 rounded-xl h-32" required />

          <button className="bg-[#D4A017] py-3 rounded-xl text-black">
            Send Enquiry
          </button>

        </form>

        <div className="mt-8 text-sm">
          <p>luminousbynature.com.au@gmail.com</p>
          <p>0458 899 227</p>
        </div>

      </div>

    </main>
  );
}