const format = (data) => {
  return data.map(function(child) {
    if (child.leafNode === false) {
      return {
        name: child.name,
        children: format(child.subTreeNodes),
      };
    } else {
      return {
        name: child.name,
        children: child.resources.map(({ name }) => ({ name })),
      };
    }
  });
};

export const setTreeData = (tree) => {
  fetch("./mock/videoResourceGroups.json")
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      tree.setData(format(data.responseData));
    });
};
