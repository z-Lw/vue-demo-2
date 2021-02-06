<template>
    <div>
        {{displayName}}
        <button @click="user.nickname=undefined">remove nickname</button>
        <hr>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                nickname:'庄庄庄庄',
                phone:'1234567',
                email:'553855@qq.com'
            },
            displayName:''
        }
    },
    watch:{
        'user.nickname':{
            handler(){
                const {user:{email,nickname,phone}} = this
                this.displayName = nickname ||email ||phone
            },
            immediate:true
        }
    }
}
</script>
<style >

</style>