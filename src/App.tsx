import Navbar from '@/components/layout/Navbar';
import Hero from '@/features/landing/components/Hero';
import Features from '@/features/landing/components/Features';
import Pricing from '@/features/landing/components/Pricing';
import Testimonials from '@/features/landing/components/Testimonials';
import Footer from '@/components/layout/Footer';

function App() {
	return (
		<div className="min-h-screen bg-gray-950 overflow-x-hidden text-white">
			<Navbar />
			<Hero />
			<Features />
			<Pricing />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;
