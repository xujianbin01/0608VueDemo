<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :coms="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>


<script>
import Header from '@/components/Header'
import Add from '@/components/Add'
import List from '@/components/List'
export default {
  name: '',
  components:{
    Header,
    Add,
    List
  },
  data(){
    return {
      comments:[
        {id:1,content:'vue牛逼',username:'赵丽颖'},
        {id:2,content:'vue可以',username:'杨幂'},
        {id:3,content:'vue不错',username:'戚薇'}
      ]
    }
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment);
    },
    deleteComment(index){
      // array.splice(index,howmany,item1,.....,itemX),index表示从何处开始，howmany表示删除几个，
      // item1, ..., itemX是可选参数，可加可不加，表示新添加数组的数据
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>

</style>
