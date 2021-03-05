export const fromTempToClothes = (tempInC) => {
  switch (true) {
    case tempInC < 15:
      return 'toque';
    case 15 <= tempInC && tempInC < 25:
      return 'scarf';
    case 25 <= tempInC:
      return 'tshirt';
  }
};
