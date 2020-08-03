<template>
    <input type="text" :value="clubName" @keyup="updateClubName($event.target.value)" class="form-control" placeholder="Digite seu Clube">
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters({
        clubName: 'getClubName'
    }),
    methods: mapActions(['updateClubName']) 
}
</script>

<style scoped>

</style>