const isUndefined = obj => obj === undefined;

export function hasArrayAccess(key) {
    return key => /\[[0-9]+\]$/.test(key);
}

export function isString(str) {
    return Object.prototype.toString.call(str) === '[object String]';
}

export function isBoolean(bool) {
    return Object.prototype.toString.call(bool) === '[object Boolean]';
}

export function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}

export function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

export function isNumber(num) {
    return Object.prototype.toString.call(num) === '[object Number]';
}

export function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

export function isNull(obj) {
    return obj === null || obj === undefined;
}

export function eraseGetter(obj) {
    return obj && JSON.parse(JSON.stringify(obj));
}

export function get(obj, key, defaultVal) {

    const realDefaultVal = isUndefined(defaultVal) ? null : defaultVal;

    if (isNull(obj)) {
        return realDefaultVal;
    }
    if (isNull(key)) {
        return realDefaultVal;
    }
    const keys = key.split('.');
    let val = obj;
    for (let k of keys) {
        if (hasArrayAccess(k)) {
            const index = k.match(/\[([0-9]+)\]/)[1] | 0;
            const tmpK = k.substring(0, k.indexOf('['));
            if (isNull(val[tmpK]) || isNull(val[tmpK][index])) {
                return realDefaultVal;
            }
            val = val[tmpK][index];
            continue;
        }

        if (isNull(val[k])) {
            return realDefaultVal;
        }
        val = val[k];
    }
    return eraseGetter(val);
}

export function clone(obj) {
    if (isNull(obj) || Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // Handle Array
    if (obj instanceof Array) {
        return obj.map(o => clone(o));
    }

    if (obj instanceof Object) {
        /* eslint-disable */
        return Object.keys(obj).reduce((p, c) => (p[c] = clone(obj[c]), p), {});
    }
}

export function pick(obj, fields) {

    if (!obj) {
        return null;
    }

    const val = {};
    const keys = Object.keys(obj);

    /* eslint-disable */
    return keys
        .filter(key => fields.indexOf(key) > -1)
        .reduce((p, c) => (p[c] = obj[c], p), val);
}

export function omit(obj, fields) {
    const val = {};

    if (!obj) {
        return val;
    }

    const keys = Object.keys(obj);

    /* eslint-disable */
    return keys
        .filter(key => fields.indexOf(key) < 0)
        .reduce((p, c) => (p[c] = obj[c], p), val);
}

export function pickNotEmpty(obj) {
    const val = {};

    if (!obj) {
        return val;
    }

    const keys = Object.keys(obj);

    /* eslint-disable */
    return keys
        .filter(key => obj[key])
        .reduce((p, c) => (p[c] = obj[c], p), val);
}
