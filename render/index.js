import Vue from 'vue';
import extensions from './fw/ext';
import postbird from './postbird';

class App {

    constructor() {
        this.extensionsOpts = extensions();
        Vue.config.devtools = process.env.NODE_ENV === 'dev';
    }

    createVueOpts() {
        this.vueOps = {
            components: {
                postbird
            },
            ...this.extensionsOpts
        };
    }

    registerRouters() {}

    destroySplash() {
        document.head.removeChild(document.querySelector('#splash-spinner'));
        document.body.removeChild(document.querySelector('.spinner'));
    }

    launch() {
        new Vue(this.vueOps).$mount('#application');
    }

    run() {
        this.createVueOpts();
        this.destroySplash();
        this.launch();
    }

}

new App().run();

