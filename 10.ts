type StreetSuffixTester<Street extends string, Suffix extends string> =
    Street extends `${infer StreetName}${Suffix}`
    ? true
    : false;