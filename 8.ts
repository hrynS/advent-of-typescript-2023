type RemoveNaughtyChildren<T> = {
    [Property in Exclude<keyof T, `naughty_${string}`>]: T[Property]
};