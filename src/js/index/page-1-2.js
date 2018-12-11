{
    let view = {
        el: '.songs',
        template: `
            <li class="aWrap active" href="">
                <div class="liWrap">
                    <div class="lileft">
                        <div class="songname">{{song.name}}</div>
                        <div class="singer">
                            <img class="sq" src="./img/2.png" alt="#">
                            {{song.singer}}
                        </div>
                    </div>
                    <div class="liright">
                        <a href="./song.html?id={{song.id}}">
                            <img class="player" src="./img/1.png" alt="">
                        </a>
                    </div>
                </div>
            </li>
        `,
        init(){
            this.$el = $(this.el)
        },

        render(data){
            let {songs} = data
            songs.map((song)=>{
                let $li = $(this.template
                    .replace('{{song.name}}',song.name)
                    .replace('{{song.singer}}',song.singer)
                    .replace('{{song.id}}',song.id)
                    )
                this.$el.find('ol.songList').append($li)
            })
            
        }
    }
    let model = {
        data: {
            songs: []
        },
        find(){
            var query = new AV.Query('Song')
            return query.find().then((songs)=>{
                this.data.songs = songs.map((song)=>{
                    return {id: song.id, ...song.attributes}
                })
                return songs
            })
        }
    }
    let controller = {
        init(view,model){
            this.view = view
            this.view.init()
            this.model = model
            this.model.find().then(()=>{
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view,model)
}