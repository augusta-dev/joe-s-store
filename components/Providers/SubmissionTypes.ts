export type colorsDef =
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

export type sizesDef =
	| 33
	| 34
	| 35
	| 36
	| 37
	| 38
	| 39
	| 40
	| 41
	| 42
	| 43
	| 44
	| 45
	| 46
	| 47
	| 48
	| 49
	| 50
	| "4XL"
	| "3XL"
	| "2XL"
	| "XL"
	| "L"
	| "M"
	| "S"
	| "XS"
	| "XXS";

export type categoriesDef = | 'Men' | 'Women' | 'Children' | 'Sweatshirts' | 'Sweaters' | 'Trousers' | 'Shorts' | 'Shirts' | 'Shoes'

export type detailsDef = {
	pn: string;
	bn: string;
	ip: number;
	fp: number;
};

export type imagesDef = {
	key: string;
	url: string;
}[];

export type retrievedItemsDef = {
	images: imagesDef;
};
