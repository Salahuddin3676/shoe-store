import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="w-full h-screen border-2 border-red-600">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
