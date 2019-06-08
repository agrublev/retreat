export const initData = {
    items: [
        {
            id: 1,
            title: "My Task",
            status: "done"
        },
        {
            id: 2,
            title: "My Task #2",
            status: "new"
        }
    ]
};

export function getNextId(items) {
    return items.length ? items[items.length - 1].id + 1 : 1;
}
