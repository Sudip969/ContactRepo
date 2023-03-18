import { createRouter, createWebHistory } from 'vue-router';

import newFriend from './components/service/newFriend.vue'
import EditContact from './components/service/EditContact.vue'
import StoredFriend from './components/service/StoredFriend.vue';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/friendcontacts'},
        {path:'/friendcontacts',component:StoredFriend},
        {path:'/addfriend',component:newFriend},
        {path:'/friendcontacts/edit/:id',component:EditContact},
        {path:'/:notFound(.*)', redirect:'/friendcontacts'}

    ]
})

export default router;