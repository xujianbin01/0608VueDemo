<template>
      <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{
      username:"",
      content:""
    }
  },
  props:["addComment"],
  methods:{
    addC(){
       let {username,content}=this;
       if(username.trim()&&content.trim()){
         let id=Date.now();
         let obj={
           id,
           username,
           content
         }
      //把数据给添加到comments数组当中
      //数据在哪里，操作数据的方法就要定义在哪里，哪里需要操作数据，我们是把操作数据的方法传过来，让其调用
      //在这里我们把App当中操作添加评论的方法addComment传递给Add这个组件去调用添加评论
      this.addComment(obj)
       }
       else{
         alert('请输入合法内容')
       }
       this.username=""
       this.content=""
    }
  }
};
</script>

<style scoped>

</style>
