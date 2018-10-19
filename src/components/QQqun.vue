<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <a :href="item.split('：')[1]">{{item.split('：')[0]}}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'QQqun',
        data() {
            return {
                list: [
                    '点击链接加入群聊【WEB前端开发】：https://jq.qq.com/?_wv=1027&k=5EneNP9',
                    '点击链接加入群聊【vue】：https://jq.qq.com/?_wv=1027&k=5HLL1cv',
                    '点击链接加入群聊【vue】：https://jq.qq.com/?_wv=1027&k=5H4htYr',
                    '点击链接加入群聊【vue】：https://jq.qq.com/?_wv=1027&k=53qZaGq',
                    '点击链接加入群聊【vue】：https://jq.qq.com/?_wv=1027&k=57Tqjc8',
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
