import Image from 'next/image';

export default function IndexPage() {
  return (
    <>
      <div className="relative z-50 flex flex-col items-center justify-center mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-100 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Beautiful Media Discovery</span>
          <span className="block text-indigo-500">
            Simple Request Management
          </span>
        </h1>
        <p className="mt-3 text-base text-center text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Overseerr is a request management and media discovery tool built to
          work with your existing Plex ecosystem.
        </p>
        <div className="w-full overflow-hidden bg-gray-800 rounded-md shadow-2xl md:rounded-xl">
          <Image
            src="/screenshots/screen_main.jpg"
            width="1500"
            height="948"
            layout="responsive"
          />
        </div>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="https://docs.overseerr.dev/getting-started/installation"
              className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 md:py-4 md:text-lg md:px-8"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Installation
            </a>
          </div>
          <div className="mt-3 mb-6 sm:mt-0 sm:ml-3">
            <a
              href="https://docs.overseerr.dev"
              className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition bg-indigo-700 border border-transparent rounded-md hover:bg-indigo-600 md:py-4 md:text-lg md:px-8"
            >
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
