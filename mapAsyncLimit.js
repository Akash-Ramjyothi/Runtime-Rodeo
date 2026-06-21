function mapAsyncLimit(arr, limit, asyncFn) {
    if (arr.length === 0 || limit <= 0) {
        return Promise.resolve([]);
    }

    const results = [];
    let nextIndex = 0;

    function worker() {
        if (nextIndex >= arr.length) {
            return Promise.resolve();
        }

        const currentIndex = nextIndex++;

        return Promise.resolve(asyncFn(arr[currentIndex]))
            .then(value => {
                results[currentIndex] = value;
                return worker();
            });
    }

    const workers = Array(Math.min(limit, arr.length))
        .fill(null)
        .map(() => worker());

    return Promise.all(workers)
        .then(() => results);
}

module.exports = mapAsyncLimit;