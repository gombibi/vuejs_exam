const app = Vue.createApp({
    //data, functions
    // template:'<h2>I am the template</h2>'
    data(){
        return {
            url:'http://www.naver.com',
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x:0,
            y:0,
            books:[
                {title:'name of the wind', author:'patrick rothfuss', img:'assets/1.png', isFav:true},
                {title:'the way of kings', author:'brandon sanderson', img:'assets/2.png', isFav:false},
                {title:'the final empire', author:'brandon sanderson', img:'assets/3.png', isFav:true}
            ]
        }
    },
    methods:{
        changeTitle(title){
            // this.title= 'Words of Randiance'
            this.title=title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount('#app')

//Challenge - Add to favs
//  -attach a click event to each li tag(for each book)
//  -when a user clicks an li, toggle the 'isFav' property of that book
