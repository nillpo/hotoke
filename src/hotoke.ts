/**
 * Configuration options for Hotoke.
 */
type HotokeConfig = {
  /**
   * The spacer character to be added to the right of each line.
   */
  spacerRight: string;
  /**
   * The spacer character to be added between characters in the middle of each line.
   */
  spacerCenter: string;
  /**
   * The spacer character to be added to the left of each line.
   */
  spacerLeft: string;
  /**
   * Optional. Specifies whether to fill the left space with spacerRight characters.
   * @default false
   */
  fillLeftSpace?: boolean;
  /**
   * Optional. Specifies how to align the string when it has an even length.
   */
  evenLengthStringAlignment?: "LEFT" | "RIGHT";
};

/**
 * Generates a pyramid-like string representation of the input string.
 *
 * @param str - The input string.
 * @params HotokeConfig - Configuration options for Hotoke.
 * @returns The pyramid-like string representation of the input string.
 */
export function 仏(
  str: string,
  {
    spacerRight,
    spacerCenter,
    spacerLeft,
    fillLeftSpace,
    evenLengthStringAlignment,
  }: HotokeConfig
): string {
  const array = [...str];
  if (evenLengthStringAlignment) {
    if (array.length % 2 === 0) {
      switch (evenLengthStringAlignment) {
        case "LEFT":
          array.unshift(spacerCenter);
          break;
        case "RIGHT":
          array.push(spacerCenter);
          break;
      }
    }
  }
  return pickHeadAndTail({ array, pairs: [] }).pairs.join("\n");

  function pickHeadAndTail(meta: { array: string[]; pairs: string[] }): {
    array: string[];
    pairs: string[];
  } {
    if (array.length === 0) {
      return {
        array: [],
        pairs: meta.pairs,
      };
    }
    if (array.length === 1) {
      meta.pairs.push(
        `${spacerLeft.repeat(meta.pairs.length)}${array[0]}${
          fillLeftSpace ? spacerRight.repeat(meta.pairs.length) : ""
        }`
      );
      return {
        array: [],
        pairs: meta.pairs,
      };
    }
    const head = array.shift()!;
    const last = array.pop()!;
    return pickHeadAndTail({
      array: array,
      pairs: [
        ...meta.pairs,
        `${spacerLeft.repeat(meta.pairs.length)}${head}${spacerCenter.repeat(
          array.length
        )}${last}${fillLeftSpace ? spacerRight.repeat(meta.pairs.length) : ""}`,
      ],
    });
  }
}
