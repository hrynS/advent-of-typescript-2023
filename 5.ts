type SantasList<Bads extends Readonly<Array<unknown>>,
    Goods extends Readonly<Array<unknown>>> =
    [...Bads, ...Goods];    