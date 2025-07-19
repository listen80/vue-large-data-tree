const createData = (maxDept = 6, count = 10, curDept = 0) => {
  if (curDept < maxDept) {
    return Array(count)
      .fill(curDept)
      .map((curDept, index) => ({
        name: `name-depth-${curDept}-index-${index}`,
        id: `id-depth-${curDept}-index-${index}`,
        children: createData(maxDept, count, curDept + 1),
      }));
  } else {
    return [];
  }
};

export const getTreeData = (maxDept, count, curDept) => Promise.resolve(createData(maxDept, count, curDept));
