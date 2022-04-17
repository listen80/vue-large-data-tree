function createData(maxDept, count = 10) {
  if (maxDept > 0) {
    return Array(count).fill().map((item, index) => ({
      name: `${maxDept}-${index}`,
      children: createData(maxDept - 1)
    }))
  } else {
    return []
  }
}
export const getTreeData = () => Promise.resolve(createData(5, 10))