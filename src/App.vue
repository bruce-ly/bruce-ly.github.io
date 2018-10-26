<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/demo">Demo</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 20px;
        ul {
            border-radius: 4px;
            background: #f9f9f9;
            li {
                padding: 4px 8px;
            }
        }
        button {
            color: #42b983;
        }
    }

    #nav {
        overflow-x: auto;
        white-space: nowrap;
        background: #f9f9f9;
        a {
            display: inline-block;
            padding: 4px 8px;
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
