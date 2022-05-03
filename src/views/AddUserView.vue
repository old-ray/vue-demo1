<template>
    <h3>id</h3>
    <input type="text" v-model="userData.id"/>
    <h3>昵称</h3>
    <input type="text" v-model="userData.nickName"/>
    <p/>
    <button @click="addUser()">保存</button>
</template>

<script>
export default{
    name:"AddUserView",
    data:function(){
        return {
            userData:{
                id:"",
                nickName:""
            }
        }
        //测试
    },
    methods:{
        addUser:function(){
            this.$axios.post("http://localhost:8872/user/add",this.$qs.stringify(this.userData)).then(resp=>{
                this.$router.push("/");
            })
        }
    }
}
</script>