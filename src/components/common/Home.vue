<template>
    <section class="hbox h-100">
        <v-sidebar></v-sidebar>
        <div class="vbox" id="contain">
            <v-head></v-head>
            <section class="contain p-3">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </section>
        </div>
    </section>
</template>
<script>
import vSidebar from './Sidebar.vue'
import vHead from './Header.vue';
export default {
    name: 'Home',
    components: {
        vHead,
        vSidebar
    },
    data() {
        return {

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
