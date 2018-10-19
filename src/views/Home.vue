<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <QQqun/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import QQqun from '@/components/QQqun.vue'

    export default {
        name: 'home',
        components: {
            QQqun
        }
    }
</script>
