<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as noticias do: {{ championship }}</h3>
            </div>
        </div>
        <HcodeSectionBanner />
        <HcodeSectionNews />
        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é: {{ myclub }}</h2>
                </div>
                <div class="col-6">
                    <HcodeInput v-model="myclub"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner'
import HcodeSectionNews from './HcodeSectionNews'
import HcodeInput from './HcodeInput'

export default {
    components: {
        HcodeSectionBanner,
        HcodeSectionNews,
        HcodeInput
    },
    data() {
        return {
            myclub: 'Vasco da Gama'
        }
    },
    props: {
        championship: String
    }
}
</script>

<style scoped>

</style>