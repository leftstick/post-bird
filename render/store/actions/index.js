import {TOGGLE_SIDE_BAR} from '../mutations';

export function toggleSidebar({commit, state}) {
    commit(TOGGLE_SIDE_BAR.name);
}
