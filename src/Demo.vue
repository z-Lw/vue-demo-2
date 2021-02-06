<template>
  <div>
    {{n}}
    <hr>
    <button @click="add">+1</button>
    <button @click="add2">+2</button>
    <button @click="minus1">-1</button>
    <button @click="minus2">-2</button>
    <hr/>
    <button @click="undo">撤销</button>
    <hr/>
    {{history}}
    <hr/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      n:0,
      history:[],
      inUndoMode:false
    }
  },
  watch:{
    n(newValue,oldValue){
      if(!this.inUndoMode)
      this.history.push({from:oldValue,to:newValue})
    }
  },
  methods:{
    add(){
      this.n += 1
    },
    add2(){
      this.n += 2
    },
    minus1(){
      this.n -= 1    
    },
    minus2(){
      this.n -= 2
    },
    undo(){
      if(this.history.length){
      const last=this.history.pop()
      console.log(last)
      const old =last.from
      this.inUndoMode=true
      this.n =old //watch是异步的
      this.$nextTick(()=>{ //尽快执行，上一个异步操作后立刻执行
        this.inUndoMode = false
      })
      }
    }

  }
}
</script>
<style></style>