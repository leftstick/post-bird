
export function TOGGLE_SIDE_BAR(state) {
    state.sidebar.display = !state.sidebar.display;
    localStorage.setItem('sidebar_display', state.sidebar.display);
}
