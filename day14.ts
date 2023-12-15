type DecipherNaughtyList<StringList extends string, 
	Acc extends Array<string> = []> = 
		StringList extends `${infer Name}/${infer Rest}`
			?  DecipherNaughtyList<Rest, [...Acc, Name]>
			:  StringList extends `${infer Name}` 
				?	Acc[number] | Name
				:	Acc[number];