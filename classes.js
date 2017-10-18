class Data {
    set temperaturaCpu(data) {
        this._temperaturaCpu = data.main;
    }
    get temperaturaCpu(){
        return this._temperaturaCpu
    }

    set memoriaLivre(data) {
        this._memoriaLivre = Number((data.available / 1024) / 1024).toFixed();
    }
    get memoriaLivre(){
        return this._memoriaLivre
    }

    set cargaAtual(data) {
        this._cargaAtual = data.currentload;
    }
    get cargaAtual(){
        return this._cargaAtual
    }

    constructor() {
        this.hora = new Date()
    }
}

module.exports = Data