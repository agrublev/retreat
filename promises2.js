const newPromise = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.52) {
            resolve({ data: 52 });
        } else {
            reject("LESS THAN 0.52");
        }
    });
};

(async () => {
    newPromise()
        .then(someData => {
            console.log(someData);
        })
        .catch(problem => {
            console.warn("PROBLEM", problem);
        });
})();
