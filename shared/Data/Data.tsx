import type { CountUpItemsProps, NavLink, ProjectProps } from '@/types'

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

const projects: ProjectProps[] = [
	{
		id: 1,
		img: '/project1.jpg',
		name: 'Porche Taycan Sport',
		des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rem harum ut iure saepe maiores dicta! Quam optio quibusdam praesentium. Minima beatae enim odit quos fugiat ab provident explicabo.',
		details: ['+ More Details'],
	},
	{
		id: 2,
		img: '/project2.jpg',
		name: 'Rolls Royce Ghost 3',
		des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rem harum ut iure saepe maiores dicta! Quam optio quibusdam praesentium. Minima beatae enim odit quos fugiat ab provident explicabo.',
		details: ['+ More Details'],
	},
	{
		id: 3,
		img: '/project3.jpg',
		name: 'Range Rover Evoque',
		des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rem harum ut iure saepe maiores dicta! Quam optio quibusdam praesentium. Minima beatae enim odit quos fugiat ab provident explicabo.',
		details: ['+ More Details'],
	},
	{
		id: 4,
		img: '/project4.jpg',
		name: 'Ferrari 365 Daytona',
		des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rem harum ut iure saepe maiores dicta! Quam optio quibusdam praesentium. Minima beatae enim odit quos fugiat ab provident explicabo.',
		details: ['+ More Details'],
	},
	{
		id: 5,
		img: '/project5.jpg',
		name: 'ZAZ-965',
		des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rem harum ut iure saepe maiores dicta! Quam optio quibusdam praesentium. Minima beatae enim odit quos fugiat ab provident explicabo.',
		details: ['+ More Details'],
	},
	{
		id: 6,
		img: '/project6.jpg',
		name: 'ZAZ-968M',
		des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rem harum ut iure saepe maiores dicta! Quam optio quibusdam praesentium. Minima beatae enim odit quos fugiat ab provident explicabo.',
		details: ['+ More Details'],
	},
]

export { countUpItems, navLinks, projects }
