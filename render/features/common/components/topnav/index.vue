<template>
    <div class="topnav">
        <div class="left-part">
            <el-button class="menu-btn" icon="fa fa-columns" @click="toggleSidebar"></el-button>
        </div>
        <div class="center-part">
            <router-link to="/home">Builder</router-link>
        </div>
        <div class="right-part">
            <el-button class="menu-btn" icon="fa fa-bell"></el-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions([
            'toggleSidebar'
        ])
    }
};
</script>

<style scoped>
    .topnav {
        background-color: #464646;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }

    .menu-btn {
        width: 40px;
        height: 30px;
        padding: 0;
    }

    .center-part {
        a {
            text-decoration: none;
            color: #fff;
            padding: 0 4px 10px 4px;
        }
        a.router-link-active {
            border-bottom: 2px solid #90e5f0;
        }
    }
</style>