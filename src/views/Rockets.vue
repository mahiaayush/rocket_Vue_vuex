<template lang="html">
  <section>
    <nav-bar></nav-bar>
    <new-rocket-form></new-rocket-form>
    <rocket-list :rockets="rockets" ></rocket-list>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import NavBar from '@/components/NavBar';
import NewRocketForm from '@/components/NewRocketForm';
import RocketList from "@/components/RocketList"

export default {
  components: {
    NewRocketForm,
    NavBar,
    RocketList,

  },
  /*data :()=>({
    rockets:[],
  }),*/
  computed : mapGetters(['rockets']),
  async mounted() {
  //this.rockets = await API.getRockets();
  //console.log(rockets);
  this.$store.dispatch('getRockets');
},methods: {

}
};
</script>
