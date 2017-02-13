import Vue from 'vue';
import ElementUI from 'element-ui';
import 'font-awesome/css/font-awesome.css';
import locale from 'element-ui/lib/locale/lang/en';

export default function() {
    Vue.use(ElementUI, {
        locale
    });
}
