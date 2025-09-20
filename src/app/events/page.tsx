import Navbar from "@/components/Navbar";

export default function Events() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Check out our upcoming and past events. Stay tuned for updates and join us to connect, learn, and grow together!</p>
      </main>
    </>
  );
}
