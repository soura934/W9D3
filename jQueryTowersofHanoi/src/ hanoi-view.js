class HanoiView {
    constructor(game, ele) {
        this.game = game;
        this.ele = ele;
    }
}

HanoiView.prototype.setupTowers = function() {
    let $ul1 = $('<ul></ul>')
    let $ul2 = $('<ul></ul>')
    let $ul3 = $('<ul></ul>')
    this.ele.append($ul1)
    this.ele.append($ul2)
    this.ele.append($ul3)
    this.game.towers.each((el) =>{
        el.each((ring) => {
            ring.towe
        })
    })
}

module.exports = HanoiView;