type Count<
	ToySack extends Array<unknown>,
	Toy extends string,
	Acc extends Array<string> = [],
> = ToySack extends [infer T, ...infer Tail]
	? T extends Toy
		? Count<Tail, Toy, [T, ...Acc]>
		: Count<Tail, Toy, Acc>
	: Acc['length'];