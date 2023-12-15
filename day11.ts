type SantaListProtector<T> = {
	readonly [Key in keyof T]: T[Key] extends Exclude<T[Key], Function>
	? SantaListProtector<T[Key]> : T[Key];
};
