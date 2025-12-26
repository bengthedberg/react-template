import { useEffect, useState } from 'react';

function Hero() {
	const [mousePositon, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-g lg:px-8 overflow-hidden">
			<div
				className="absolute inset-0 opacity-30"
				style={{
					background: `radial-gradient(circle at ${mousePositon.x}px ${mousePositon.y}px, rgba(59,130,246,0.25), transparent 60%)`,
				}}
			/>
			<div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-500/15 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
			<div className=" mx-auto text-center relative w-full">
				<div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
					<div>
						<h1 className="text-7xl sm:text-5xl md:text-6xl font-extrabold mb-6">
							Welcome to{' '}
							<span className="text-blue-500">The Club</span>
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
							Join us and experience the best community platform.
						</p>
						<a
							href="#features"
							className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
						>
							Explore Features
						</a>
					</div>
					<div className="relative order-2 w-full mt-10 lg:mt-0">
						<div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 shadow-lg">
							<img
								src="/images/placeholder.png"
								alt="Hero Image"
								className="mx-auto rounded-lg "
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
