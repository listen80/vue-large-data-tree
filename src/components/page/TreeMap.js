export const format = (data, resources) => {
  return data.map(function(child) {
    if (child.leafNode === false) {
      return {
        name: child.name,
        children: format(child.subTreeNodes, resources),
      };
    } else {
      const children = child.resources.map(({ name }) => ({ name }));
      resources.push(...children);
      return {
        name: child.name,
        children: child.resources,
      };
    }
  });
};

export const getTreeData = () => {
  return fetch("./mock/videoResourceGroups.json").then(function(data) {
    return data.json();
  });
};
