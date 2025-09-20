import Navbar from "@/components/Navbar";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Explore photos and memories from our events and activities. Our gallery showcases the vibrant spirit of our community.</p>
      </main>
    </>
  );
}
