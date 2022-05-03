<template>
    <div style="text-align:center;">
        <h1>用户列表页面</h1>
        <router-link :to="{path:'/addUser'}">添加</router-link>
    </div>
    <table style="width:100%;text-align:center;" border="1">
        <tr>
            <td>编码</td>
            <td>姓名</td>
            <td>创建时间</td>
            <td>修改</td>
            <td>删除</td>
        </tr>
        <tr v-for="item in dataList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.nickName}}</td>
            <td>{{item.createTime}}</td>
            <!-- <td><router-link :to="{'path':'/editUser',query:{id:item.id}}">修改</router-link></td> -->
            <td><router-link :to="{path:'/editUser',query:{id:item.id}}">修改</router-link></td>
            <td><a href="#" @click.prevent="delUser(item.id)">删除</a></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name:"UserListView",
        data:function(){
            return {
                dataList:[]
            }
        },
        methods:{
          getUserList: function(){
              //获取用户列表
              console.log("test2")

            this.$axios.get("http://localhost:8872/user/list").then(resp=>{
                console.log(resp.data);
                this.dataList = resp.data;
            });

          },
          delUser: function(id){
              if(confirm("确定删除吗？")){
                  this.$axios.get("http://localhost:8872/user/delete/"+id).then(resp=>{
                      console.log(resp.data);
                      //重新获取用户的数据
                      this.getUserList();
                  });
              }
          }
        },
        mounted: function(){
            this.getUserList();
        }
    }
</script>
