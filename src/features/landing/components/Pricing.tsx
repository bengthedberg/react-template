import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const plans = [
	{
		name: 'Lifetime Membership',
		price: '$5.00',
		description: 'Unlock all features with a single payment.',
		features: [
			'Access to all membership menu items',
			'Exlusive offers',
			'Enjoy discounts on special events',
			'Birthday rewards',
		],
		popular: true,
		link: '/',
	},
];
function Pricing() {
	return (
		<section id="pricing" className="py-16 sm:py-20 px-6 sm:px-8 relative">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						<span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
							Simple, Transparent Pricing
						</span>
						<br />
						<span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							One Plan for Everyone
						</span>
					</h2>
					<p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed max-w-2xl mx-auto">
						Join The Club today and unlock all features with a
						single payment. <br />
						No hidden costs, no surprises.
					</p>
				</div>
				<div className="grids grids-cols-1 md:grids-cols-2 lg:grids-cols-3 gap-8 sm:gap-12 lg:gap-16">
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`max-w-2xl mx-auto relative bg-slate-900/50 border backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20 lg:scal-105' : 'border-gray-800 hover:border-gray-600 hover:shadow-md'}`}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -transform-x-full -transform-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
							{plan.popular && (
								<div className="absolute -top-4 sm:-top-3 text-xs left-1/2 transform -translate-x-1/2 z-10 ">
									<div className="flex item-center space-x-1 px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-b from-blue-600 to-cyan-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg shadow-blue-600/30 shadow-lg">
										<Star className="h-3 w-3 sm:h-4 sm:w-4 fill-white" />
										<p>Most Popular</p>
									</div>
								</div>
							)}
							<div className="flex-1 w-full">
								<div className="max-w-lg mx-auto text-center lg:mx-0 lg:text-left">
									<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
										{plan.name}
									</h3>
									<p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
										{plan.description}
									</p>
									<div className="flex item-baseline justify-center lg:justify-start mt-6 sm:mt-8">
										<span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
											{plan.price}
										</span>
									</div>
									<div className="mt-8">
										<ul className="space-y-4 text-left">
											{plan.features.map((item, idx) => (
												<li
													key={idx}
													className="flex items-center space-x-3"
												>
													<svg
														className="w-6 h-6 text-blue-500 flex-shrink-0"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M5 13l4 4L19 7"
														></path>
													</svg>
													<span className="text-gray-300">
														{item}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<Button
									className={`w-full mt-8 py-3 px-6 rounded-lg shadow-lg transition ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
									onClick={() => console.log(plan.link)}
								>
									Join Now
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Pricing;
