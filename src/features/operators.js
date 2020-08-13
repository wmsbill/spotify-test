const pipe = (...funcs) => funcs.reduce((prev, curr) => curr(prev));

const map = signal => async function* (fn) {
    for await (let value of signal) {
        yield fn(value);
    }
}

module.exports = {
    pipe,
    map
}
