<template>
    <div>
        <router-link to="/friendcontacts">Friends</router-link>
        <router-link to="/addfriend">Add Friend</router-link>
         <input type="text"  placeholder="Search" v-model="searchedContact" >
          <button @click="searchContact"> Search</button>
    </div>
    <router-view></router-view>
</template>

<script>
import axios from 'axios'

export default {
        data(){
            return{
             searchedContact:""  
        }
    },
    provide(){
        return{
          getContacts:this.getContacts
        }
    },
    watch:{
        searchedContact(changes){
          if(changes==="")
          {
            this.getContacts()
          }
        }
    },

    
    methods:{
         async getContacts()
        {if(this.searchedContact===""){
          this.$store.state.friends=(await axios.get('http://localhost:3000/select')).data
          }
        },
        async searchContact(){
            this.$store.state.friends=[]
            this.$store.state.friends.push((await axios.get(`http://localhost:3000/select/${this.searchedContact}`)).data)
           
          
        }
    }
}

</script>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
a {
  text-decoration: none;;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #ff0077;
  border: 1px solid #ff0077;
  color: white;
  cursor: pointer;
 
}

a:hover,
a:active,
a.router-link-active {
  background-color:  #ec3169;;
  border-color:  #ec3169;;
}
input{
 margin-left:45px;
 margin-right:3px 
}

button{
  font: inherit;
  cursor: pointer;
  border: 10px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  
}
button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
