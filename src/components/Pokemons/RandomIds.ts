export const getRandomIds = () => {
  const result: number[] = [];
  const min = 1;
  const max = 386;

  while (result.length < 6) {
    const randomInt: number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!result.includes(randomInt)) {
      result.push(randomInt);
    }
  }
  return result;
};
