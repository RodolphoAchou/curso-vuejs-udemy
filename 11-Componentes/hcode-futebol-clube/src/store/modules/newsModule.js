export default {
    state: {
        news: [{
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
    },
    getters: {
        getNews(state) {
            return state.news
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            })
            return notice
        }
    }
}