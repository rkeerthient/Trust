export enum Category {
	BOOK_TRAVEL = "Book Travel",
	CHECK_IN = "Check in",
	FEES_POLICIES = "Fees Policies",
	FLIGHT_STATUS = "Flight Status",
	TICKETS = "Tickets",
	TICKETING = "Ticketing",
	AMENITIES = "Amenities",
	RESERVE = "Reserve",
	FRONT_DESK = "Front Desk",
	PARKING = "Parking",
	GIFT_CARD = "Gift Card",
	WAITLIST = "Waitlist",
	DELIVERY = "Delivery (Restaurant)",
	ORDER = "Order (Restaurant)",
	TAKEOUT = "Takeout",
	PICKUP = "Pickup (Restaurant)",
 	MENU = "Menu",
	APPOINTMENT = "Appointment",
	PORTFOLIO = "Portfolio",
	QUOTE = "Quote",
	SERVICES = "Services (Retail)",
	STORE_ORDERS = "Store Orders",
	STORE_SHOP = "Store Shop",
	STORE_SUPPORT = "Store Support",
	SCHEDULE = "Schedule",
	SHOWTIMES = "Showtimes",
	AVAILABILITY = "Availability",
	PRICING = "Pricing",
	ACTIVITIES = "Activities",
	BOOK = "Book",
	BOOK__HOTEL_ = "Book (Hotel)",
	BOOK__RIDE_ = "Book Ride",
	BOOK__TOUR_ = "Book Tour",
	CAREERS = "Careers",
	CHARGE = "Charge",
	COUPONS = "Coupons",
	DELIVERY__RETAIL_ = "Delivery (Retail)",
	DONATE = "Donate",
	EVENTS = "Events",
	ORDER__RETAIL_ = "Order (Retail)",
	OTHER_MENU = "Other Menu",
	PICKUP__RETAIL_ = "Pickup (Retail)",
	RESERVE__PARKING_ = "Reserve (Parking)",
	SHOWS = "Shows",
	SPORTS = "Sports",
	SUPPORT = "Support",
	TEE_TIME = "Tee Time",
	GIFT_CARD__RESTAURANT_ = "Gift Card (Restaurant)",
}

export interface AppleActionLinks {
	category: Category,
	appStoreUrl: string,
	quickLinkUrl: string,
	appName: string,
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

export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface C_accomplishments {
	acc_Title?: string,
	acc_Value?: string,
}

export enum C_activeInAnswers {
	YES = "Yes",
	NO = "No",
}

export interface C_areasOfFocus {
	areas_Title?: string,
	area_Desciption?: string,
}

export interface C_education {
	ed_Degree?: string[],
	ed_Univ?: string,
	ed_Year?: number,
	ed_year_end?: number,
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

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface FeaturedMessage {
	description?: string,
	url?: string,
}

export interface MenuUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface OrderUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export enum PaymentOptions {
	AFTERPAY = "Afterpay",
	ALIPAY = "Alipay",
	AMERICANEXPRESS = "American Express",
	ANDROIDPAY = "Google Pay",
	APPLEPAY = "Apple Pay",
	ATM = "ATM",
	ATMQUICK = "ATM Quick",
	BACS = "BACS",
	BANCONTACT = "Bancontact",
	BANKDEPOSIT = "Bank Deposit",
	BANKPAY = "Bank Pay",
	BGO = "Bank/Giro Overschrijving",
	BITCOIN = "Bitcoin",
	Bar = "Bargeld",
	CARTASI = "CartaSi",
	CASH = "Cash",
	CCS = "CCS",
	CHECK = "Check",
	CONB = "Contactloos betalen",
	CONTACTLESSPAYME = "Contactless Payment",
	CVVV = "Cadeaubon/VVV bon",
	DEBITNOTE = "Debit Note",
	DINERSCLUB = "Diners Club",
	DIRECTDEBIT = "Direct Debit",
	DISCOVER = "Discover",
	ECKARTE = "Girokarte",
	ECOCHEQUE = "EcoCheque",
	EKENA = "E-kena",
	EMV = "Elektronische Maaltijdcheques",
	FINANCING = "Financing",
	GOPAY = "GoPay",
	HAYAKAKEN = "Hayakaken",
	HEBAG = "He-Bag",
	IBOD = "iBOD",
	ICCARDS = "IC Cards",
	ICOCA = "Icoca",
	ID = "iD",
	IDEAL = "iDeal",
	INCA = "Incasso",
	INVOICE = "Invoice",
	JCB = "JCB",
	JCoinPay = "J−Coin Pay",
	JKOPAY = "JKO Pay",
	KITACA = "Kitaca",
	KLA = "Klantenkaart",
	KLARNA = "Klarna",
	LINEPAY = "LINE Pay",
	MAESTRO = "Maestro",
	MANACA = "Manaca",
	MASTERCARD = "MasterCard",
	MIPAY = "Mi Pay",
	MONIZZE = "Monizze",
	MPAY = "MPay",
	Manuelle_Lastsch = "Manuelle Lastschrift",
	Merpay = "メルPay",
	NANACO = "nanaco",
	NEXI = "Nexi",
	NIMOCA = "Nimoca",
	OREM = "Onder Rembours",
	PASMO = "Pasmo",
	PAYBACKPAY = "Payback Pay",
	PAYBOX = "Paybox",
	PAYCONIQ = "Payconiq",
	PAYPAL = "PayPal",
	PAYPAY = "PayPay",
	PAYSEC = "PaySec",
	PIN = "PIN",
	POSTEPAY = "Postepay",
	QRCODE = "QR Code Payment",
	QUICPAY = "QUICPay",
	RAKUTENEDY = "Rakuten Edy",
	RAKUTENPAY = "楽天Pay",
	SAMSUNGPAY = "Samsung Pay",
	SODEXO = "Sodexo",
	SUGOCA = "Sugoca",
	SUICA = "Suica",
	SWISH = "Swish",
	TICKETRESTAURANT = "Ticket Restaurant",
	TOICA = "Toica",
	TRAVELERSCHECK = "Traveler's Check",
	TSCUBIC = "TS CUBIC",
	TWINT = "Twint",
	UNIONPAY = "China UnionPay",
	VEV = "Via een verzekering",
	VISA = "Visa",
	VISAELECTRON = "Visa Electron",
	VOB = "Vooruit betalen",
	VOUCHER = "Voucher",
	VPAY = "V PAY",
	WAON = "WAON",
	WECHATPAY = "WeChat Pay",
	WIRETRANSFER = "Wire Transfer",
	Yucho_Pay = "ゆうちょPay",
	ZELLE = "Zelle",
	AuPay = "auPay",
	DBarai = "d払い ",
	Überweisung = "Banküberweisung",
}

export interface ReservationUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface ComplexVideo {
	url: string,
	video?: string,
	description?: string,
}

export default interface FinancialProfessional {
	appleActionLinks?: AppleActionLinks[],
	appleBusinessDescription?: string,
	appleBusinessId?: string,
	appleBusinessIdDqe?: string,
	appleCompanyId?: string,
	appleCompanyIdDqe?: string,
	appleCoverPhoto?: Image,
	appointmentOnly?: boolean,
	awards?: string[],
	bingWebsiteOverride?: string,
	disclosureLink?: string,
	facebookWebsiteOverride?: string,
	geomodifier?: string,
	hobbies?: string[],
	holidayHoursConversationEnabled?: boolean,
	interests?: string[],
	landingPageUrl?: string,
	linkedInUrl?: string,
	neighborhood?: string,
	nmlsNumber?: string,
	nudgeEnabled?: boolean,
	onlineServiceHours?: Hours,
	primaryConversationContact?: any,
	reviewResponseConversationEnabled?: boolean,
	slug?: string,
	teamName?: string,
	what3WordsAddress?: string,
	yearsOfExperience?: number,
	yelpWebsiteOverride?: string,
	additionalHoursText?: string,
	address: Address,
	addressHidden?: boolean,
	alternatePhone?: any,
	androidAppUrl?: string,
	associations?: string[],
	brands?: string[],
	description?: string,
	hours?: Hours,
	logo?: ComplexImage,
	name: string,
	categories?: any,
	certifications?: string[],
	cityCoordinate?: Coordinate,
	closed?: boolean,
	c_accomplishments?: C_accomplishments[],
	c_activeInAnswers?: C_activeInAnswers,
	c_areasOfFocus?: C_areasOfFocus[],
	c_background?: string,
	c_education?: C_education[],
	c_personalInterest?: string,
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	displayCoordinate?: Coordinate,
	dropoffCoordinate?: Coordinate,
	emails?: string[],
	facebookPageUrl?: string,
	fax?: any,
	featuredMessage?: FeaturedMessage,
	photoGallery?: ComplexImage[],
	geocodedCoordinate?: Coordinate,
	googleWebsiteOverride?: string,
	headshot?: Image,
	instagramHandle?: string,
	iosAppUrl?: string,
	isoRegionCode?: string,
	keywords?: string[],
	languages?: string[],
	localPhone?: any,
	mainPhone?: any,
	menuUrl?: MenuUrl,
	mobilePhone?: any,
	orderUrl?: OrderUrl,
	paymentOptions?: PaymentOptions[],
	pickupCoordinate?: Coordinate,
	products?: string[],
	reservationUrl?: ReservationUrl,
	routableCoordinate?: Coordinate,
	services?: string[],
	specialities?: string[],
	id: string,
	timezone?: any,
	tollFreePhone?: any,
	ttyPhone?: any,
	twitterHandle?: string,
	walkableCoordinate?: Coordinate,
	websiteUrl?: WebsiteUrl,
	yextDisplayCoordinate?: Coordinate,
	yextDropoffCoordinate?: Coordinate,
	yextPickupCoordinate?: Coordinate,
	yextRoutableCoordinate?: Coordinate,
	yextWalkableCoordinate?: Coordinate,
	videos?: ComplexVideo[],
}
