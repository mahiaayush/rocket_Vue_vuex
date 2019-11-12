<template lang="html">
  <div class="card" >
    <img class="card-img-top" :src="rocket.image" :alt="rocket.name">
    <div class="card-body">
      <h5 class="card-title">{{rocket.name}}</h5>
      <p class="card-text">{{rocket.description}}</p>
      <a href="#" class="btn btn-primary">{{rocket.city}}</a>
      <a @click="removeRocket(rocket)" class="btn btn-Danger">Delete</a>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  props: ['rocket'],
  methods: mapMutations(['removeRocket'])
}
</script>
