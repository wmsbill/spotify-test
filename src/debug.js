module.exports = {
    // Register all defined template helpers
    debug(param) {

        // Render JSON representation of current context,
        // e.g., {{{debug this}}}
        return '<pre class="debug">' + JSON.stringify(param, null, 2) + '</pre>';
    }
};
