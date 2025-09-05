import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50 text-gray-800">
      {/* Main content area */}
      <main className="flex flex-col row-start-2 items-center gap-16 w-full max-w-7xl md:flex-row md:justify-between md:items-center md:gap-24">
        {/* Left side: Text content */}
        <div className="flex flex-col items-center text-center gap-6 md:items-start md:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 animate-fade-in-up">
            our AI Chat Companion
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg animate-fade-in-up delay-100">
            Instantly get answers, spark creativity, and simplify our tasks with
            our intelligent chatbot, designed to be our perfect partner.
          </p>
          <a
            href="#"
            className="mt-4 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 animate-fade-in-up delay-200"
          >
            Start Chatting Now
          </a>
        </div>

        {/* Right side: Chatbot visual mockup */}
        <div className="relative w-full max-w-lg aspect-video md:aspect-auto md:h-[400px] bg-white rounded-xl shadow-xl border border-gray-200 p-6 flex flex-col justify-end overflow-hidden animate-slide-in-right">
          {/* Example chat bubbles */}
          <div className="absolute top-4 left-4 right-4 flex flex-col gap-3">
            <div className="bg-indigo-500 text-white p-3 rounded-lg self-start max-w-[70%] shadow-md animate-fade-in-message delay-500">
              Hello, how can I help you today?
            </div>
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg self-end max-w-[70%] shadow-md animate-fade-in-message delay-1000">
              What are some fun facts about space?
            </div>
          </div>
          {/* Input area */}
          <div className="relative mt-auto animate-fade-in-up delay-[1500ms]">
            <input
              type="text"
              placeholder="Type our message..."
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              readOnly
            />
            <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 text-center text-sm text-gray-500">
        © 2025 AI Chatbot. All rights reserved.
      </footer>
    </div>
  );
}
