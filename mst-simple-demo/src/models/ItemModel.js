import { getRoot, types } from "mobx-state-tree";

const ItemModel = types
  .model("ItemModel", {
    id: types.optional(types.number, () => Math.random()),
    title: types.string,
    status: types.enumeration("Status", ["new", "done"])
  })
  .views(self => ({
    get getChangeStatusLabel() {
      return self.status === "new" ? "Complete" : "Reset";
    }
  }))
  .actions(self => ({
    changeStatus() {
      self.status = self.status === "new" ? "done" : "new";
    },
    delete() {
      const store = getRoot(self);
      if ("removeItem" in store) {
        store.removeItem(self);
      }
    }
  }));

export default ItemModel
