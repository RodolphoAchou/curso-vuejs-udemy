<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual
                v-for="notice in this.news" 
                :key="notice.id"
                :img-name= "notice.imgName"
                :img-info= "notice.imgInfo"
                :news-date= "notice.date"
            >
                <template #title>
                    <h2>{{ notice.title }}</h2>
                </template>
                <p>{{ notice.content | truncate(200) }}</p>    
            </HcodeSectionNewsIndividual>
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
export default {
    components: {
        HcodeSectionNewsIndividual
    },
    data() {
        return {
            news: []
        }
    },
    created() {
        this.news= [{
            id: 1,
            title: "Começam os treinos para a nova temporada",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta officia, qui nisi voluptas neque ab adipisci dolore rem quidem rerum assumenda quasi enim necessitatibus facilis eaque eius reiciendis molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae, ducimus ratione quia voluptatum excepturi distinctio laborum quos beatae natus fugiat ex, quae commodi voluptas soluta, iste minima dolore magni?",
            date: "2020-01-01",
            imgName: "news1.jpg",
            imgInfo: "Noticia 1"
        }, {
            id: 2,
            title: "Jogo de quarta-feira termina empatado",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta officia, qui nisi voluptas neque ab adipisci dolore rem quidem rerum assumenda quasi enim necessitatibus facilis eaque eius reiciendis molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae, ducimus ratione quia voluptatum excepturi distinctio laborum quos beatae natus fugiat ex, quae commodi voluptas soluta, iste minima dolore magni?",
            date: "2020-01-07",
            imgName: "news2.jpg",
            imgInfo: "Noticia 2"
        },{
            id: 3,
            title: "A inauguração do novo estádio será na semana que vem",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta officia, qui nisi voluptas neque ab adipisci dolore rem quidem rerum assumenda quasi enim necessitatibus facilis eaque eius reiciendis molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae, ducimus ratione quia voluptatum excepturi distinctio laborum quos beatae natus fugiat ex, quae commodi voluptas soluta, iste minima dolore magni?",
            date: "2020-01-20",
            imgName: "news3.jpg",
            imgInfo: "Noticia 3"
        },
        ]
    }
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}
</style>