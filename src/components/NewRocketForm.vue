<template lang="html">
  <section>
    <button @click="showForm=!showForm"
    type="button" name="button" class="btn btn-success"> show Form</button>

  <form v-if="showForm" @submit.prevent="onAddRocket">
    <h1>new Rockets form</h1>
    <div class="input-group mb-3">
    <label for="name"> Name</label>
    <input type="text" name="name" id="name" v-model="rocket.name" class="form-control">
  </div>
  <div class="input-group mb-3">
  <label for="description"> Description</label>
  <input type="text" v-model="rocket.description" name="description" id="description" class="form-control">
</div>

<div class="input-group mb-3">
<label for="city"> City</label>
<input type="text" v-model="rocket.city" name="city" id="city" class="form-control">
</div>
<div class="input-group mb-3">
<label for="image"> Image</label>
<input type="text" v-model="rocket.image" name="image" id="image" class="form-control">
</div>
<button type="submit" class="btn btn-success" name="button"> Add Rockets</button>
  </form>
  </section>
</template>

<script>
function getEmptyRocket(){
  return {
    name: '',
    description: '',
    city : '',
    image :''
  }
}
export default {
//  props: ['addRocket'],
  data : () =>({
    showForm:false,
    rocket  : getEmptyRocket()
  }),
  methods: {
        onAddRocket() {
      //  this.addRocket(this.rocket);
        this.$store.commit('addRocket',this.rocket);
        this.rocket=getEmptyRocket();
        this.showForm=false;
    }
  }
};
</script>
