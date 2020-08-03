<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as noticias do: {{ championship }}</h3>
            </div>
        </div>
        <router-view></router-view>
        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é: {{ myclub }}</h2>
                </div>
                <div class="col-6">
                    <HcodeInput/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HcodeInput from './HcodeInput'
import { mapGetters } from 'vuex'

export default {
    components: {
        HcodeInput
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
           championship: 'getChampionship',     
           myclub: 'getClubName'
        })
        
        /*
        championship(){
            this.$store.getters.getChampionship
        }
        ...mapState(['championship']),
        ...mapState({myclub: 'clubName'}),
        */
    }    
}
</script>

<style scoped>

</style>