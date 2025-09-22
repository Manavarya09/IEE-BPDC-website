import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <header className="w-full bg-[#232846] py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/file.svg" alt="IEEE Logo" width={60} height={60} />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">IEEE</span>
            <span className="text-yellow-300 text-xs">
              Bits Pilani Dubai Campus
            </span>
            <span className="text-white text-xs">IEEE Student Branch</span>
          </div>
        </div>
        <nav className="mt-4 md:mt-0 flex gap-8 text-white text-base">
          <a
            href="/"
            className="text-green-400 font-semibold"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-green-400 transition"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-green-400 transition"
          >
            IEEE Benefits
          </a>
          <a
            href="/events"
            className="hover:text-green-400 transition"
          >
            Our Events
          </a>
          <a
            href="#"
            className="hover:text-green-400 transition"
          >
            Our Team
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-16 bg-cover bg-center"
        style={{ backgroundImage: "url(/globe.svg)" }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            IEEE BPDC
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
            Institute of Electrical and Electronics Engineers - BITS Pilani Dubai Campus
          </p>
          <a
            href="#"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg shadow mb-8 transition"
          >
            JOIN OUR STUDENT BRANCH
          </a>
        </div>
      </section>
    </div>
  );
}
