{
    let view = {
        el: '.songList-container',
        tempate: `
        <ul class="songList">
            <li>歌曲111</li>
            <li>歌曲222</li>
            <li>歌曲3333333</li>
            <li class="active">歌曲4</li>
            <li>歌曲555</li>
            <li>歌曲6666</li>
            <li>歌曲7</li>
            <li>歌曲8</li>
            <li>歌曲999999</li>
            <li>歌曲10</li>
        </ul>
        `,
        render(data){
            $(this.el).html(this.tempate)
        }
    }
    let model = {}
    let controller = {
        init(view,model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
        }
    }
    controller.init(view,model)
}