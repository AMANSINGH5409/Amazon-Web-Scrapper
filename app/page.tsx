import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DocumentMagnifyingGlassIcon className="w-64 h-64 text-indigo-600/20" />
      <h1 className="text-3xl text-center font-bold mt-2 text-black mb-5">
        Welcome to Amazon Web Scrapper
      </h1>
    </div>
  );
}
