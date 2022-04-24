const createData = (maxDept, count = 10) => {
  if (maxDept > 0) {
    return Array(count)
      .fill()
      .map((item, index) => ({
        name: `${maxDept}-${index}`,
        id: `${maxDept}-${index}`,
        children: createData(maxDept - 1),
      }));
  } else {
    return [];
  }
};

export const getTreeData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(createData(6, 10));
    }, 400);
  });
