import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const MENU_ITEMS = [
	{ name: 'Features', href: '#features' },
	{ name: 'Pricing', href: '#pricing' },
	{ name: 'Testimonials', href: '#testimonials' },
	{ name: 'Login', href: '/auth/login' },
];

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-950/20 backdrop-blur-sm">
			{/* fixed navbar position at top, taking up the whole width with backdrop blur effect */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Container to center navbar content */}
				<div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
					{/* Navbar content goes here */}
					<div className="flex items-center space-x-1 group cursor-pointer">
						<div>
							<img
								src="/images/logo.svg"
								alt="My App"
								className="w-42 sm:h-48 md:h-60 h-14 sm:h-16 md:h-20 inline-block mr-2"
							/>
						</div>
						<span>
							<span className="text-gray-400 text-lg sm:text-1xl md:text-2xl font-light italic">
								the
							</span>
							<span className="text-white text-xl sm:text-2xl md:text-3xl font-medium">
								Club
							</span>
						</span>
					</div>
					<div className="flex item-center space-x-6 lg:space-x-8 hidden md:block">
						{MENU_ITEMS.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-gray-300 hover:text-white text-sm lg:text-base"
							>
								{item.name}
							</a>
						))}
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="hover:bg-gray-800 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 md:hidden"
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
					>
						{isMobileMenuOpen ? (
							<X className="text-white" />
						) : (
							<Menu className="text-white" />
						)}
					</Button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
					<div className="px-4 py-4 sm:py-6 space-y-3 md:space-y-4">
						{MENU_ITEMS.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="block text-gray-300 hover:text-white text-sm lg:text-base"
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
