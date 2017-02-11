<template>
    <div class="root">
        <topnav></topnav>

        <router-view id="view"></router-view>
    </div>
</template>

<script>
import topnav from './features/common/components/topnav';

export default {
    components: {
        topnav
    }
};
</script>

<style>
    [class^="el-icon-fa"], [class*=" el-icon-fa"] {
        display: inline-block;
        font-family: FontAwesome!important;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .root {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>