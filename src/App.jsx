import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
	return (
		<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-900">
			{/* BACKGROUND PAGE */}
			<div className="fixed top-0 -z-10 h-full w-full">
				<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
			</div>
			{/* COMPONENTS */}
			<div className="container mx-auto px-8">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};

export default App;
