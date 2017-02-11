import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as state from './state';
import * as mutations from './mutations';

const isFunction = obj => obj && obj.call;
const hasOwnProperty = (obj, property) => obj && obj.hasOwnProperty(property);

/* eslint-disable */
const retrieveFunctions = obj => Object.keys(obj).filter(k => isFunction(obj[k])).reduce((p, k) => (p[k] = obj[k], p), {});
const retrieveProperty = obj => Object.keys(obj).filter(k => hasOwnProperty(obj, k)).reduce((p, k) => (p[k] = obj[k], p), {});
/* eslint-enable */

export default function() {

    Vue.use(Vuex);

    return new Vuex.Store({
        state: retrieveProperty(state),
        mutations: retrieveFunctions(mutations),
        getters: retrieveFunctions(getters),
        actions: retrieveFunctions(actions),
        strict: process.env.NODE_ENV !== 'production'
    });
}
