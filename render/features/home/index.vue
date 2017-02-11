<template>
    <div class="home">
        <sidebar v-if="sidebarDisplay"></sidebar>
        <workview></workview>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import sidebar from './components/sidebar';
import workview from './components/workview';

export default {
    computed: {
        ...mapGetters([
            'sidebarDisplay'
        ])
    },
    components: {
        sidebar,
        workview
    }
};
</script>

<style scoped>
    .home {
        width: 100%;
        display: flex;
        flex-grow: 5;
    }
</style>