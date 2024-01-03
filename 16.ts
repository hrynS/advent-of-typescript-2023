type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never;

type FindSantaRow<Forest extends Array<unknown>, Acc extends Array<unknown> = []> = Forest extends [
	infer Head,
	...infer Tail,
]
	? Head extends "🎅🏼"
		? Acc["length"]
		: FindSantaRow<Tail, [...Acc, Head]>
	: never;

type FindSanta<TForest extends Array<Array<unknown>>> = {
	[K in keyof TForest]: FindSantaRow<TForest[K]> extends infer Result
		? Result extends never
			? never
			: [ParseInt<`${K}`>, Result]
		: never;
}[number];