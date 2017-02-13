import appElementUI from './appElementUI';
import appRouter from './appRouter';
import store from '../../store';

export default function() {

    appElementUI();

    return {
        router: appRouter(),
        store: store()
    };
}
