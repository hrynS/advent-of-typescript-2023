/*
 * Option 1 with Flattening the array
 * Tests are shown as not passed, but this is valid solution
*/

// type Flatten<Arr extends Array<unknown>, Acc extends Array<unknown> = []> = 
// Arr extends [
// 	infer HeadElement,
// 	...infer Rest,
// ]
// 	? HeadElement extends Array<unknown>
// 		? Flatten<Rest, [...Acc, ...HeadElement>
// 		: Flatten<Rest, [...Acc, HeadElement]>
// 	: Acc;

// type GiftSequence = ["🛹", "🚲", "🛴", "🏄"];

// type FillGiftsList<
// 	Q extends number,
// 	Gift extends GiftSequence[number],
// 	Acc extends Array<GiftSequence[number]> = [],
// > = Acc["length"] extends Q ? Acc : FillGiftsList<Q, Gift, [...Acc, Gift]>;

// type Rebuild<
// 	Quantities extends Array<number>,
// 	Sequence extends Array<GiftSequence[number]> = GiftSequence,
// 	Result extends Array<GiftSequence[number][]> = [],
// > = 
// Flatten<
// Quantities extends [infer Head extends number, ...infer Tail extends Array<number>]
// 	? Sequence extends [
// 			infer Gift extends GiftSequence[number],
// 			...infer Rest extends Array<GiftSequence[number]>,
// 		]
// 		? Rebuild<Tail, Rest, [...Result, FillGiftsList<Head, Gift>]>
// 		: GiftSequence extends [
// 			infer FirstGift extends GiftSequence[number], 
// 			...infer OtherGifts extends Array<GiftSequence[number]>
// 			] 
// 			? Rebuild<Tail, OtherGifts, [...Result, FillGiftsList<Head, FirstGift>]>
// 			: Result
// 	: Result
// >;

/*
 * Option 2 - eliminating one level of recursion by usage of object 
*/

type Flatten<Arr extends Array<unknown>, Acc extends Array<unknown> = []> = Arr extends [
	infer HeadElement,
	...infer Rest,
]
	? HeadElement extends Array<unknown>
		? Flatten<Rest, [...Acc, ...HeadElement]>
		: Flatten<Rest, [...Acc, HeadElement]>
	: Acc;

type GiftSequence = {
	"🛹": "🚲";
	"🚲": "🛴";
	"🛴": "🏄";
	"🏄": "🛹";
};

type FillGiftsList<
	Q extends number,
	Gift extends GiftSequence[keyof GiftSequence],
	Acc extends Array<keyof GiftSequence> = [],
> = Acc["length"] extends Q ? Acc : FillGiftsList<Q, Gift, [...Acc, Gift]>;

type Rebuild<
	Quantities extends Array<number>,
	NextChar extends keyof GiftSequence = "🏄",
	Result extends Array<GiftSequence[keyof GiftSequence][]> = [],
> = Flatten<
	Quantities extends [infer Head extends number, ...infer Tail extends Array<number>]
		? Rebuild<
				Tail,
				GiftSequence[NextChar],
				[...Result, FillGiftsList<Head, GiftSequence[NextChar]>]
			>
		: Result
>;
