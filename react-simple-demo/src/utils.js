export const initData = {
  items: [
    {
      id: 1,
      title: "My Title"
    }
  ]
};

export function getNextId(items) {
  return items[items.length - 1].id + 1;
}
