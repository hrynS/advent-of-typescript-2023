type Reverse<Str extends string> =
    Str extends `${infer FirstChar}${infer RestStr}`
    ? `${Reverse<RestStr>}${FirstChar}`
    : Str;