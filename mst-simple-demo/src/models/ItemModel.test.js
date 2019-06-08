import React from "react";
import ItemModel from "./ItemModel.js"

describe("ItemModel", () => {
  let item = null;
  beforeEach(() => {
    item = ItemModel.create({
      title: "This is a test",
      status: "new"
    });
  });

  test("can create item model instance", () => {
    expect(item.title).toBe("This is a test");
    expect(item.status).toBe("new");
  });

  test("can change action status label", () => {
    expect(item.getChangeStatusLabel).toBe("Complete");
    item.changeStatus();
    expect(item.getChangeStatusLabel).toBe("Reset");
    item.changeStatus();
    expect(item.status).toBe("new");
  });

  test("can not delete if stand alone", () => {
    item.delete();
    expect(item).toBeDefined();
  });

});
