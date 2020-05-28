export const findNodeByTestAttr = (component, attr) => {
  const node = component.find(`[data-test='${attr}']`);
  return node;
};
