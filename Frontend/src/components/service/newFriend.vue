<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError" >
    <template #default>
      <p>Unfortunately,At Least One Input Value is Invalid</p>
      <p>Please Check All Inputs</p>
    </template>
    <template #actions>
        <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
    <form @submit.prevent="submitData" >
        <div :class="{invalid: userName==='invalid'}">
        <label>Name:</label>
        <input  type="text" v-model="enteredName" @blur="validityName"> 
        <p v-if="userName ==='invalid'">Invalid name  </p>
        </div>

        <div :class="{invalid: phoneNumber==='invalid'}">
        <label>Phone-No:</label>
        <input  type="tel" maxlength="10"  v-model="enteredNo" @blur="validityNumber">
        <p v-if="phoneNumber=== 'invalid'">Invalid number </p>
        </div>

        <div  :class="{invalid: email ==='invalid'}">
        <label>E-mail:</label>
        <input  type="email" v-model="enteredEmail"  @blur="validityEmail">
        <p v-if="email === 'invalid'">Invalid e-mail</p>
        </div>


        <div>
        <base-button type="submit" >Add Contact</base-button>
        </div>
    </form>    
</template>

<script>
import axios from 'axios'
export default{
   
    
    data(){
        return{
        enteredName:"",
        enteredNo:"",
        enteredEmail:"",
        inputIsInvalid:false,
        userName:'pending',
        phoneNumber:"pending",
        email:"pending"
        }
    },
    methods:{
        submitData(){
            if(this.enteredName.trim() === "" || this.enteredNo.trim() === ""|| this.enteredEmail.trim() === "" || this.phoneNumber==='invalid' || this.userName=='invalid' || this.email=='invalid' )
                {
                    this.inputIsInvalid=true;
                    return;
                }
           this.addContact(this.enteredName,this.enteredNo,this.enteredEmail)
        },
        confirmError(){
            this.inputIsInvalid=false
        },
        validityName(){
            if (this.enteredName.trim()===""){
                this.userName="invalid"
               
                }
            else{
                    this.userName="valid"
            }
        },
        validityNumber(){
               if(this.enteredNo===null  || !/^\d{10}$/.test(this.enteredNo)){
                this.phoneNumber="invalid"
            }
            else{
                this.phoneNumber="valid"
            }
        },
        validityEmail(){
                if(this.enteredEmail.trim()===null  || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.enteredEmail.trim())){
                this.email="invalid"
            }
            else{
                this.email="valid"
            }
        },
            async addContact(name,phone,email){
               
        const newFriend={
            name:name,
            phone:phone,
            email:email,
            favourite:false        
            };
            await axios.post('http://localhost:3000/insert',newFriend)
           this.$router.push('/friendcontacts')
        },
    }
}
</script>


<style scoped>
.invalid input{
    border-color: red;
}
.invalid label{
    color: red;
}
p{
    font-family:Verdana ;
    margin-left: 7px;
    margin-top:3px
}
</style>