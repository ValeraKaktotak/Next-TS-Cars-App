import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Cars Next App - Cars',
	description: 'Generated by create next app',
}

export default function CarsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <>{children}</>
}
