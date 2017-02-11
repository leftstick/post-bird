import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import './fw/ext';
import postbird from './postbird';
import store from './store';
import {routes} from './features';

import locale from 'element-ui/lib/locale/lang/en';

class App {

    constructor() {
        Vue.use(ElementUI, {
            locale
        });
        Vue.use(VueRouter);
        Vue.config.devtools = process.env.NODE_ENV === 'dev';
    }

    createVueOpts() {
        this.vueOps = {
            components: {
                postbird
            },
            store: store()
        };
    }

    setDefaultPath() {
        var defaultPaths = routes
            .filter(route => route.isDefault)
            .map(route => route.path);
        if (!defaultPaths.length) {
            defaultPaths = [routes[0].path];
        }
        this.defaultPaths = [{
            path: '*',
            redirect: defaultPaths[0]
        }];
    }

    registerRouters() {
        this.router = new VueRouter({
            routes: routes.concat(this.defaultPaths),
            mode: 'hash',
            scrollBehavior: function(to, from, savedPosition) {
                return savedPosition ||
                    {
                        x: 0,
                        y: 0
                    };
            }
        });
        this.vueOps = Object.assign({}, this.vueOps, {
            router: this.router
        });
    }

    destroySplash() {
        document.head.removeChild(document.querySelector('#splash-spinner'));
        document.body.removeChild(document.querySelector('.spinner'));
    }

    launch() {
        new Vue(this.vueOps).$mount('#application');
    }

    run() {
        this.createVueOpts();
        this.setDefaultPath();
        this.registerRouters();
        this.destroySplash();
        this.launch();
    }

}

new App().run();

