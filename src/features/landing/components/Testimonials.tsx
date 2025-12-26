import { Quote } from 'lucide-react';

const testimonials = [
	{
		name: 'Joe Blog',
		review: 'This app changed my life! Highly recommended.',
	},
	{
		name: 'Jane Doe',
		review: 'A fantastic experience from start to finish.',
	},
];

function Testimonials() {
	return (
		<section
			id="testimonials"
			className="py-16 sm:py-20 px-6 sm:px-8 relative"
		>
			<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">
				<div className="lg:w-1/2 w-full text-center lg:text-left">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
						What our members are saying
					</h2>
					<p className="text-gray-700 text-base text-xl sm:text-lg leading-relaxed max-w-2xl mx-auto">
						Real feedback from our valued members. Join the
						community and see for yourself!
					</p>
				</div>
				<div className="lg:w-1/2 w-full">
					<div className="space-y-8 sm:space-y-10 lg:space-y-12">
						{testimonials.map((comment, index) => (
							<div
								key={index}
								className="relative bg-slate-200/50 border backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 overflow-visible group flex flex-col h-full border-gray-800 hover:border-gray-600 hover:shadow-md"
							>
								<div className="flex flec-cols w-full">
									<Quote
										fill="true"
										className="text-slate-700 m-1"
										size={18}
									/>
									<div className="text-left ">
										<p className="text-gray-700 text-base text-xl sm:text-lg leading-relaxed mb-4 sm:mb-6">
											{comment.review}
										</p>
										<h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-black">
											{comment.name}
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
