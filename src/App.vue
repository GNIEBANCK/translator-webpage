<template>
    <div class="container">
        <app-nav-bar></app-nav-bar>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    export default {
        components: {
            appNavBar: NavBar
        }
    }
</script>

