// import Vue from 'vue'
// import App from './App.vue'
import Demo from './Demo.vue'
import Demo2 from './Demo2.vue'

Vue.config.productionTip = false
let id = 0
const createUser = (name,gender)=>{
  id+=1
  return {
    id:id,
    name:name,
    gender:gender
  }
}

const vm=new Vue({
  el:'#app',
  components:{Demo,Demo2},
  data:{
      user:{
        email:'123456789@qq.com',
        nickname:'庄庄',
        phone:'123456789'
      },
      users:[
        createUser('庄庄','男'),
        createUser('圆圆','女'),
        createUser('小新','男'),
        createUser('小葵','女')
      ],
      gender:'',
      displayUsers:[]
  },
  computed:{
    displayName:{
      get(){
        const user=this.user
        return user.nickname||user.phone||user.email
      },
      set(value){
        this.user.nickname=value
      }
      
    },
    displayUsers2(){
      console.log('计算了一次')
      const hash = {
        male:'男',
        female:'女'
      }
      const {users,gender}=this
      console.log(users)
      if(gender === ''){
        return users
      }else if(typeof gender === 'string'){
        return users.filter(u=>u.gender === hash[gender])
      }else{
        throw new Error('gender 的值是意外的值')
      }
    }
  },
  created(){
    this.displayUsers = this.users
  },
  methods:{
    showMale(){
      this.displayUsers = this.users.filter(u=>u.gender === '男')
    },
    showFemale(){
      this.displayUsers = this.users.filter(u=> u.gender === '女')
    },
    showAll(){
      this.displayUsers=this.users
    }

  },
template: //展示用户名
` 
<div>
<Demo/>

{{displayName}}{{user.phone||user.nickname||user.email}}<button @click="displayName='xx'">按钮</button>
<div>

</div>
<div>
<button @click='showAll'>全部</button>
<button @click = 'showMale'>男</button>
<button @click = 'showFemale'>女</button>
</div>

<ul>
  <li v-for="(u,index) in displayUsers":key="index">{{u.name}} - {{u.gender}}</li>
</ul>
<hr>
<div>
<button @click="gender = '' ">全部</button>
<button @click ="gender = 'male' ">男</button>
<button @click ="gender = 'female' ">女</button>
</div>

<ul>
  <li v-for="(u,index) in displayUsers2":key="index">{{u.name}} - {{u.gender}}</li>
</ul>
<Demo2/>
</div>

`

})
