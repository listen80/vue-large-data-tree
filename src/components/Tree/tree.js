export const collectSonNodeFlag = (dataList, parent, selectedMap) => {
  dataList.forEach((data) => {
    data.$parent = parent;

    if (data.children) {
      collectSonNodeFlag(data.children, data, selectedMap);
      let $checked = 0;
      let $total = 0;
      for (let i = 0; i < data.children.length; i++) {
        $checked += data.children[i].$checked;
        $total += data.children[i].$total;
      }
      data.$checked = $checked;
      data.$total = $total;
    } else {
      data.$checked = selectedMap[data.id] ? 1 : 0;
      data.$total = 1;
    }
  });
};

export const calcSonNode = (data, flag) => {
  if (flag) {
    data.$checked = data.$total;
  } else {
    data.$checked = 0;
  }
  data.children &&
    data.children.forEach((data) => {
      calcSonNode(data, flag);
    });
};

export const calcParentNode = (data) => {
  if (data) {
    let $checked = 0;
    for (let i = 0; i < data.children.length; i++) {
      $checked += data.children[i].$checked;
    }
    data.$checked = $checked;
    calcParentNode(data.$parent);
  }
};

export const getSelected = (data, selected, onlyLeaf) => {
  if (data) {
    data.forEach((child) => {
      if (child.$checked > 0) {
        if (onlyLeaf && !child.children) {
          selected.push(child);
        } else {
          selected.push(child);
        }

        getSelected(child.children, selected, onlyLeaf);
      }
    });
  }
  return selected;
};