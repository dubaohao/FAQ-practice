class Tab {
    constructor(opts) {
        this.index = opts.index || 0;
        this.$tabHeader = opts.header;
        this.$tabBody = opts.body;
        this.render();
        this.bind();
    }
    render() {
        this.$tabHeader.find("li").eq(this.index).addClass("active").siblings().removeClass("active");
        this.$tabBody.find("li").eq(this.index).show().siblings().hide();
    }
    bind() {
        this.$tabHeader.on("click", "li", e => {
            this.index = $(e.target).index();
            this.render();
        });
    }
}

let tab = new Tab({
    header: $(".tab-header"),
    body: $(".tab-body")
})