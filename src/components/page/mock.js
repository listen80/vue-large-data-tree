const createData = (maxDept, count = 10) => {
  if (maxDept > 0) {
    return Array(count)
      .fill()
      .map((item, index) => ({
        name: `name-${maxDept}-${index}`,
        id: `id-${maxDept}-${index}`,
        children: createData(maxDept - 1, count),
      }));
  } else {
    return [];
  }
};

export const getTreeData = () => Promise.resolve(createData(6, 9));
