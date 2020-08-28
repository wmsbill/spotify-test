const pipe = (...funcs) => funcs.reduce((prev, curr) => curr(prev));

const map = fn => async function* (iterator) {
    for await (let value of iterator) {
        yield fn(value);
    }
}

const callWithArgs = fn => async function* (iterator) {
    for await (let input of iterator) {
        input.output = Object.assign(input.output, await fn(input.args));
        yield input;
    }
}

const buildArgs = fn => async function* (iterator) {
    for await (let input of iterator) {
        input.args = Object.assign(input.args, fn(input.req));
        yield input;
    }
}

const mapOutput = fn => async function* (iterator) {
    for await (let input of iterator) {
        input.output = Object.assign(input.output, fn(input.output, input.args));
        yield input;
    }
}

const debug = async function* (iterator) {
    for await (let input of iterator) {
        console.info(input);
        yield input;
    }
}

const render = view => async function (iterator) {
    for await (let {res, output} of iterator) {
        res.render(view, output);
    }
}

async function* zip(...iterators) {
    while(true) {
        const values = await Promise.all(
            iterators.map(iterator => console.info(iterator) || iterator.next())
        );

        console.info(values);

        if (values.some(v => v.done)) return;
        yield values.map(v => v.value);
    }
}

module.exports = {
    buildArgs,
    callWithArgs,
    debug,
    map,
    mapOutput,
    pipe,
    render,
}
