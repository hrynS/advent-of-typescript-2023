type ArrayTo<To extends number, Acc extends Array<unknown> = [To]> = 
	To extends Acc['length'] 
		?	Acc[number]
		: ArrayTo<To, [...Acc, Acc['length']]>

type DayCounter<Start extends number, Finish extends number> = 
    Start | ArrayTo<Finish>;