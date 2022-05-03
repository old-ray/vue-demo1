<template>
    <h3>id</h3>
    <input type="text" v-model="userData.id" readonly/>
    <h3>昵称</h3>
    <input type="text" v-model="userData.nickName"/>
    <h3>创建时间</h3>
    <input type="text" v-model="userData.createTime" readonly/>
    <p/>
    <button @click="saveData()">保存</button>
</template>

<script>
 export default{
     name:"EditUserView",
     data:function(){
         return {
             userData :{
                 id:"",
                 nickName:"",
                 createTime:""
             }
         }
     },
     methods:{
         getDetail:function(id){
            this.$axios.get("http://localhost:8872/user/info/"+id).then(resp=>{
                console.log(resp);
                this.userData = resp.data;
            })
         },
         saveData:function(){
             this.$axios.post("http://localhost:8872/user/edit",this.$qs.stringify(this.userData)).then(resp=>{
                console.log(resp.data);
                //跳转到列表页面
                this.$router.push("/");
            })
         }
     },
     mounted:function(){
         //获取传过来的参数
         this.userData.id = this.$route.query.id;
         this.getDetail(this.userData.id);
     }

 }
</script>