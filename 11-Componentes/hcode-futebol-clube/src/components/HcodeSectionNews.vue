<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual 
                img-name="news1.jpg"
                img-info="Noticia 1"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta officia, qui nisi voluptas neque ab adipisci dolore rem quidem rerum assumenda quasi enim necessitatibus facilis eaque eius reiciendis molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae, ducimus ratione quia voluptatum excepturi distinctio laborum quos beatae natus fugiat ex, quae commodi voluptas soluta, iste minima dolore magni?"
                news-date="01/01/2020"
            />
            <HcodeSectionNewsIndividual 
                img-name="news2.jpg"
                img-info="Noticia 2"
                news-title="Jogo de quarta-feira termina empatado"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta officia, qui nisi voluptas neque ab adipisci dolore rem quidem rerum assumenda quasi enim necessitatibus facilis eaque eius reiciendis molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae, ducimus ratione quia voluptatum excepturi distinctio laborum quos beatae natus fugiat ex, quae commodi voluptas soluta, iste minima dolore magni?"
                news-date="07/01/2020"
            />
            <HcodeSectionNewsIndividual 
                img-name="news3.jpg"
                img-info="Noticia 3"
                news-title="A inauguração do novo estádio será na semana que vem"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta officia, qui nisi voluptas neque ab adipisci dolore rem quidem rerum assumenda quasi enim necessitatibus facilis eaque eius reiciendis molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae, ducimus ratione quia voluptatum excepturi distinctio laborum quos beatae natus fugiat ex, quae commodi voluptas soluta, iste minima dolore magni?"
                news-date="20/01/2020"
            />
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
export default {
    components: {
        HcodeSectionNewsIndividual
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