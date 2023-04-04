function Alexa(nome, fabricante, preco) {
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

function FireTvStick(nome, fabricante, preco) {
    Alexa.call(this, nome, fabricante, preco)

    this.taxa = function(){
        const precoFinal = this.getPreco() * 1.2;
        this.setPreco(precoFinal);
    }
}

function Kindle(nome, fabricante, preco) {
    Alexa.call(this, nome, fabricante, preco)

    this.taxa = function(){
        const precoFinal = this.getPreco() * 1.2;
        this.setPreco(precoFinal);
    }
}

const produto1 = new Alexa("Alexa", "Amazon", 300);
const produto2 = new FireTvStick("Fire TV Stick", "Amazon", 400);
const produto3 = new Kindle("Kindle", "Amazon", 150);

produto1.taxa();
console.log(produto1.getPreco())

produto2.taxa();
console.log(produto2.getPreco())

produto3.taxa();
console.log(produto3.getPreco())