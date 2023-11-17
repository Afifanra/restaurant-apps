/* eslint-disable func-names */
global.structuredClone = function (value) {
    return JSON.parse(JSON.stringify(value));
};
