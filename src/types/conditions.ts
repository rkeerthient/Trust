export enum C_activeInAnswers {
	YES = "Yes",
	NO = "No",
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Ce_condition {
	landingPageUrl?: string,
	description?: string,
	name: string,
	c_activeInAnswers?: C_activeInAnswers,
	c_photo?: Image,
	c_primaryCTA?: C_primaryCTA,
	c_relatedLocations?: EntityReference[],
	c_relatedProfessionals?: EntityReference[],
	c_secondaryCTA?: C_secondaryCTA,
	keywords?: string[],
	id: string,
}
