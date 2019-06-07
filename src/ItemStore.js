import { types, getParent } from "mobx-state-tree";
import { Item } from "./ItemModel.js";

export const ItemStore = types
    .model({
        items: types.array(Item),
        selectedItem: types.reference(Item)
    })
    .views(self => ({
        get currentItem() {
            return self.selectedItem;
        }
    }))
    .actions(self => ({
        addItem(data) {
            return self.items.push(data);
        },
        selectItem(itemId) {
            self.selectedItem = itemId;
        }
    }));
