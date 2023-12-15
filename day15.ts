type PutToy<Name extends string, 
	NumberOfBoxes extends number, 
	Boxes extends Array<Name> = [Name]> =
		Boxes['length'] extends NumberOfBoxes 
				? Boxes
				: PutToy<Name, NumberOfBoxes, [...Boxes, Name]>;

type BoxToys<ToyName extends string, N extends number, Result = {
	[K in N]: PutToy<ToyName, K>
}> = Result[keyof Result];
