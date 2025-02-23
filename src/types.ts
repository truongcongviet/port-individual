export type SiteConfig = {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	articleDate: string
	ogImage: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
}

export type PaginationLink = {
	url: string
	text?: string
	srLabel?: string
}

export type SiteMeta = {
	title: string
	description?: string
	ogImage?: string
	articleDate?: string
}
