function Produto(nome, fabricante, preco) {
    this.nome = nome;
    this.fabricante = fabricante;
    let _preco = preco;

    this.getPreco = function(){
        return _preco;
    }

    this.setPreco = function(valor){
        if (typeof valor === "number") {
            _preco = valor;
        }
    }

    this.taxa = function(){
        const precoFinal = _preco * 1.2
        _preco = precoFinal;
    }
}

function FireTvStick(nome) {
    Produto1.call(this, nome, "Amazon", 200)

    this.taxa = function(){
        const precoFinal = this.getPreco() * 1.2;
        this.setPreco(precoFinal);
    }
}

function Kindle(nome) {
    Produto1.call(this, nome, "Amazon", 500)

    this.taxa = function(){
        const precoFinal = this.getPreco() * 1.2;
        this.setPreco(precoFinal);
    }
}

const produto1 = new Produto("Alexa", "Amazon", 300);
const produto2 = new FireTvStick("Fire TV Stick");
const produto3 = new Kindle("Kindle");