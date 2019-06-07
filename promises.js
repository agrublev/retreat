const waitingFunction = async (data = {}) => {
    await new Promise(async resolve => {
        let someData = { ...data, data: 52 };
        await new Promise(resolve1 => setTimeout(
            () => resolve1())
        );
        resolve(someData);
    });
};

(async () => {
    const myReturnedData = await waitingFunction({});
    console.log(myReturnedData);
})();
