import { Facebook, Youtube, X, Instagram } from 'lucide-react';

const socialIcons = [
	{ name: 'Facebook', icon: Facebook, href: '#' },
	{ name: 'YouTube', icon: Youtube, href: '#' },
	{ name: 'X', icon: X, href: '#' },
	{ name: 'Instagram', icon: Instagram, href: '#' },
];

const linkSections = [
	{
		title: 'Company',
		links: [
			{ name: 'About', href: '#' },
			{ name: 'Blog', href: '#' },
			{ name: 'Careers', href: '#' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ name: 'Customer Service', href: '#' },
			{ name: 'Stores', href: '#' },
			{ name: 'Menu', href: '#' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ name: 'Privacy Policy', href: '#' },
			{ name: 'Terms of Service', href: '#' },
			{ name: 'Cookie Policy', href: '#' },
		],
	},
];

function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div className="flex justify-center md:justify-start">
						<img
							src="/images/logo.svg"
							alt="Coffee Club Logo"
							className="h-12 sm:h-14 md:h-16"
						/>
					</div>
					{linkSections.map((section) => (
						<div
							key={section.title}
							className={
								section.title === 'Legal'
									? 'text-center md:text-left'
									: 'hidden md:block'
							}
						>
							<h3 className="text-white font-semibold mb-4">
								{section.title}
							</h3>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className="text-gray-400 hover:text-white transition-colors"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex justify-center gap-6 mb-8 ">
					{socialIcons.map((social) => {
						const Icon = social.icon;
						return (
							<a
								key={social.name}
								href={social.href}
								className="text-gray-400 hover:text-blue-500 transition-colors"
								aria-label={social.name}
							>
								<Icon size={24} />
							</a>
						);
					})}
				</div>
				<div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
					Copyright © {new Date().getFullYear()} The CoffeeClub. All
					rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
