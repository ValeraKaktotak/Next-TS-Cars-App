import type { CountUpItemsProps, NavLink } from '@/types'

const navLinks: NavLink[] = [
	{ path: '/', label: 'Home' },
	{ path: '/about', label: 'About' },
	{ path: '/cars', label: 'Cars' },
	{ path: '/services', label: 'Services' },
	{ path: '/skilllevel', label: 'Skills' },
	{ path: '/gallery', label: 'Gallery' },
	{ path: '/contact', label: 'Contact' },
]

const countUpItems: CountUpItemsProps[] = [
	{
		id: 1,
		number: 21,
		text: 'Years Of Experience',
	},
	{
		id: 2,
		number: 157,
		text: 'Satisfied Customers',
	},
	{
		id: 3,
		number: 743,
		text: 'Design Items',
	},
	{
		id: 4,
		number: 112,
		text: 'Clients Served',
	},
]

export { countUpItems, navLinks }
