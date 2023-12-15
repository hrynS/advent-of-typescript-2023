type AppendGood<T> = {
	[Property in keyof T as `good_${string & Property}`]: T[Property]
};