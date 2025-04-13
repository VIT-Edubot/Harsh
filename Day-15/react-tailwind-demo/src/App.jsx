import './App.css'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold">LaunchDarkly</div>
        <nav className="flex flex-col gap-5 sm:flex-row sm:gap-5 p-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to LaunchDarkly</h1>
        <p className="mt-4 text-gray-600">
          This is a simple responsive layout using Tailwind CSS in a React app. Resize the window to see responsive behavior in action.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm p-4">
        &copy; 2025 LaunchDarkly. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
