const features = [
	{
		title: 'Feature One',
		description:
			'Description for feature one goes here. It is concise and informative with key details.',
		icon: 'icon-one',
		image: '/images/placeholder.png',
		imagePosition: 'left',
	},
	{
		title: 'Feature Two',
		description:
			'Description for feature two. Another key feature that highlights benefits. This one is great for users.',
		icon: 'icon-two',
		image: '/images/placeholder.png',
		imagePosition: 'right',
	},
	{
		title: 'Feature Three',
		description:
			"Description for feature three. The last feature to showcase the product's strengths and advantages.",
		icon: 'icon-three',
		image: '/images/placeholder.png',
		ImagePosition: 'left',
	},
];

function Features() {
	return (
		<section id="features" className="py-16 sm:py-20 px-6 sm:px-8 relative">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						<span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
							Great Coffee Experience
						</span>
						<br />
						<span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							with Every Cup
						</span>
					</h2>
				</div>
			</div>
			<div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 lg:space-y-32">
				{features.map((feature, index) => (
					<div
						key={index}
						className={`flex flex-col ${
							feature.imagePosition === 'right'
								? 'md:flex-row-reverse'
								: 'md:flex-row'
						} items-center gap-8 sm:gap-12 lg:gap-16`}
					>
						<div className="flex-1">
							<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-80 lg:h-96">
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-full object-cover rounded-xl"
								/>
							</div>
						</div>
						<div className="flex-1 w-full">
							<div className="max-w-lg mx-auto text-center lg:mx-0 lg:text-left">
								<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
									{feature.title}
								</h3>
								<p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
									{feature.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Features;
