import { types } from "mobx-state-tree";
import ItemModel from "../models/ItemModel";
import { getNextId } from "../utils";

const Store = types
  .model("TodoStore", {
    items: types.array(ItemModel)
  })
  .actions(self => ({
    addNew(title) {
      self.items.push({ id: getNextId(self.items), status: "new", title });
    },
    removeItem(item) {
      const index = self.items.indexOf(item);
      if (index > -1) {
        self.items.splice(index, 1);
      }
    }
  }));

export default Store;
