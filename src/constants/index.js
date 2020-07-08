// Get the perimeter around a given grid item
export const getPerimeter = (x, y, width, height) => {
  const perimeter = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];

  // Remoe an item from the perimeter if it is outside the grid
  return perimeter.filter((per) => {
    return per[0] >= 0 && per[0] < width && per[1] >= 0 && per[1] < height;
  });
};
