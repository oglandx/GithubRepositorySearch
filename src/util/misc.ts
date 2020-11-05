export const getWordForm =
    (n: number, endsWithOne: string, endsWithTwoOrMore: string, endsWithFiveOrMore: string | null = null): string =>
        n % 10 === 1 && n !== 11 ? endsWithOne:
            endsWithFiveOrMore === null ? endsWithTwoOrMore:
                [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? endsWithTwoOrMore: endsWithFiveOrMore;
