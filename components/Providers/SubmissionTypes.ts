type ColorObj = {
	black: boolean;
	white: boolean;
	gray: boolean;
	brown: boolean;
	red: boolean;
	orange: boolean;
	yellow: boolean;
	lime: boolean;
	green: boolean;
	emerald: boolean;
	teal: boolean;
	cyan: boolean;
	sky: boolean;
	blue: boolean;
	indigo: boolean;
	purple: boolean;
	fuchsia: boolean;
	pink: boolean;
};

export type colors =
	| "black"
	| "white"
	| "gray"
	| "brown"
	| "red"
	| "orange"
	| "yellow"
	| "lime"
	| "green"
	| "emerald"
	| "teal"
	| "cyan"
	| "sky"
	| "blue"
	| "indigo"
	| "purple"
	| "fuchsia"
	| "pink";
export type ColourObj<T> = { [color in colors]: T };

export const color:{[key in colors ]: boolean} = {
	'black': false,
    'white': false,
    'gray': false,
    'brown': false,
    'red': false,
    'orange': false,
    'yellow': false,
    'lime': false,
    'green': false,
    'emerald': false,
    'teal': false,
    'cyan': false,
    'sky': false,
    'blue': false,
    'indigo': false,
    'purple': false,
    'fuchsia': false,
    'pink': false,
}
console.log(color)
export type SizeObj = {
	33: boolean;
	34: boolean;
	35: boolean;
	36: boolean;
	37: boolean;
	38: boolean;
	39: boolean;
	40: boolean;
	41: boolean;
	42: boolean;
	43: boolean;
	44: boolean;
	45: boolean;
	46: boolean;
	47: boolean;
	48: boolean;
	49: boolean;
	50: boolean;
	"4XL": boolean;
	"3XL": boolean;
	"2XL": boolean;
	XL: boolean;
	L: boolean;
	M: boolean;
	S: boolean;
	XS: boolean;
	XXS: boolean;
};
export type CategoriesObj = {
	Men: boolean;
	Women: boolean;
	Children: boolean;
	Sweatshirts: boolean;
	Sweaters: boolean;
	Trousers: boolean;
	Shorts: boolean;
	Shirts: boolean;
	Shoes: boolean;
};

export type DetailsObj = {
	pn: string;
	bn: string;
	ip: number;
	fp: number;
};

export type ImagesObj = {
	key: string;
	url: string;
}[];

export type RetrievedItemsObj = {
	images: ImagesObj;
};
