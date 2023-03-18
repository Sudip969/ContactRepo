<template>
  <header>
   
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default{
    props:['title']
}
</script>

<style scoped>
header {
  /* width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color:  #640032;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

header h1 {
  color: white;
  margin: 0;
  
}

</style>