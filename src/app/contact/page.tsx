import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Have questions or want to get in touch? Fill out our contact form or reach us via email. We look forward to hearing from you!</p>
      </main>
    </>
  );
}
