type SocialWrapperProps = {
	children: React.ReactNode
	className?: string
}

type NavLink = {
	path: string
	label: string
}

type CountUpProps = {
	start: number
	end: number
	duration: number
}

type CountUpItemsProps = {
	id: number
	number: number
	text: string
}

type ProjectProps = {
	id: number
	img: string
	name: string
	des: string
	details: string[]
}

type ServicesProps = {
	id: number
	title: string
	icon: React.ReactNode
	description: string
}

type SkillsProps = {
	name: string
	level: number
}

type GalleryProps = {
	id: number
	name: string
	image: string
	link: string
}

type ContactsProps = {
	id: number
	title: string
	text: string
}

export {
	ContactsProps,
	CountUpItemsProps,
	CountUpProps,
	GalleryProps,
	NavLink,
	ProjectProps,
	ServicesProps,
	SkillsProps,
	SocialWrapperProps,
}
