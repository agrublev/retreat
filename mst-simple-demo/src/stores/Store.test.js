import React from "react";
import Store from "./Store";

describe("Store", () => {
  let store = null;
  beforeEach(() => {
    store = Store.create({
      items: [
        {
          id: 123,
          title: "This is a test #1",
          status: "new"
        }, {
          id: 124,
          title: "This is a test #2",
          status: "new"
        }
      ]
    });
  });

  test("can create store instance", () => {
    expect(store.items.length).toBe(2);
  });

  test("can add items", () => {
    store.addNew("This is a test #3");
    expect(store.items.length).toBe(3);
  });

  test("can add items", () => {
    store.items[0].delete();
    expect(store.items.length).toBe(1);
  });

});
