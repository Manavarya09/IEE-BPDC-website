import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-8 pb-20">
        <main className="max-w-3xl w-full flex flex-col gap-10 items-center text-center py-16">
          <Image
            src="/logo.svg"
            alt="IEE Website Logo"
            width={80}
            height={80}
            className="mb-4"
            priority
          />
          <h1 className="text-5xl font-extrabold text-blue-900 dark:text-blue-200 mb-4">
            Welcome to IEE Website
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Empowering our community with events, resources, and connections.
            Explore our site to learn more about us, view our gallery, and get in
            touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              About Us
            </a>
            <a
              href="/events"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition"
            >
              Events
            </a>
            <a
              href="/gallery"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </main>
        <footer className="mt-auto py-6 text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} IEE Website. All rights reserved.
        </footer>
      </div>
    </>
  );
}
