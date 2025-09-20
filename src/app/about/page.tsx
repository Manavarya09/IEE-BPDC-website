import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Welcome to our organization! We are dedicated to providing valuable
          events and resources for our community. Learn more about our mission,
          team, and history here.
        </p>
      </main>
    </>
  );
}
