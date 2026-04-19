export default function Contact() {
  return (
    <main className="p-10">
      <h1 className="text-3xl mb-6">Contact Us</h1>

      <form action="https://formspree.io/f/YOUR_ID" method="POST">
        <input type="text" name="name" placeholder="Your Name" className="block mb-4 p-2 border" />
        <input type="email" name="email" placeholder="Your Email" className="block mb-4 p-2 border" />
        <textarea name="message" className="block mb-4 p-2 border"></textarea>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}