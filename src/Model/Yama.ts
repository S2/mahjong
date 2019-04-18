export default class {
    constructor(){
        this.createYama()
        this.createWanpai()
    }

    yama = []
    private createYama(){
        let yama = Array.prototype.concat.apply([] , [1,2,3,4].map( x => {
            return Array.prototype.concat.apply([] , [
                [Haku , Hatsu , Chun , Ton , Nan , Sha , Pe].map(stringPi => new stringPi()) , 
                [Manzu1 , Pinzu1 , Sozu1 ,
                Manzu2 , Pinzu2 , Sozu2 ,
                Manzu3 , Pinzu3 , Sozu3 ,
                Manzu4 , Pinzu4 , Sozu4 ,
                Manzu5 , Pinzu5 , Sozu5 ,
                Manzu6 , Pinzu6 , Sozu6 ,
                Manzu7 , Pinzu7 , Sozu7 ,
                Manzu8 , Pinzu8 , Sozu8 ,
                Manzu9 , Pinzu9 , Sozu9 ].map(numberPi => new numberPi())
            ])
        }))

        for(let i = yama.length - 1; i > 0; i--){
            let r = Math.floor(Math.random() * (i + 1));
            let tmp = yama[i];
            yama[i] = yama[r];
            yama[r] = tmp;
        }
        this.yama = yama
    }

    wanpai = []
    private createWanpai(){
        for(let i = 0 ; i < 14; i++){
            this.wanpai.push(this.yama.shift())
        }
    }

    getTehai(){
        const tehai = []
        for(let i = 0 ; i < 13; i++){
            tehai.push(this.yama.shift())
        }
        return tehai
    }

    tsumo(){
        return this.yama.shift()
    }

    kan(){
        this.yama.pop()
        return this.wanpai.shift()
    }
}

interface Pi {
    getName()
    isNumer()
}
class NumberPi implements Pi {
    number : number
    color : string
    getName(){
        return `${this.color}${this.number}`
    }
    getImage(){return `./images/${this.getName()}.png`}
    isNumer(){
        return true
    }
}
abstract class Manzu extends NumberPi{
    color = "m"
    number 
}
abstract class Sozu extends NumberPi{
    color = "s"
    number 
}
abstract class Pinzu extends NumberPi{
    color = "p"
    number 
}
class Manzu1 extends Manzu {
    number = 1
}
class Sozu1 extends Sozu{
    number = 1
}
class Pinzu1 extends Pinzu{
    number = 1
}

class Manzu2 extends Manzu {
    number = 2
}
class Sozu2 extends Sozu{
    number = 2
}
class Pinzu2 extends Pinzu{
    number = 2
}

class Manzu3 extends Manzu {
    number = 3
}
class Sozu3 extends Sozu{
    number = 3
}
class Pinzu3 extends Pinzu{
    number = 3
}

class Manzu4 extends Manzu {
    number = 4
}
class Sozu4 extends Sozu{
    number = 4
}
class Pinzu4 extends Pinzu{
    number = 4
}

class Manzu5 extends Manzu {
    number = 5
}
class Sozu5 extends Sozu{
    number = 5
}
class Pinzu5 extends Pinzu{
    number = 5
}

class Manzu6 extends Manzu {
    number = 6
}
class Sozu6 extends Sozu{
    number = 6
}
class Pinzu6 extends Pinzu{
    number = 6
}

class Manzu7 extends Manzu {
    number = 7
}
class Sozu7 extends Sozu{
    number = 7
}
class Pinzu7 extends Pinzu{
    number = 7
}

class Manzu8 extends Manzu {
    number = 8
}
class Sozu8 extends Sozu{
    number = 8
}
class Pinzu8 extends Pinzu{
    number = 8
}

class Manzu9 extends Manzu {
    number = 9
}
class Sozu9 extends Sozu{
    number = 9
}
class Pinzu9 extends Pinzu{
    number = 9
}

class StringPi implements Pi{
    string : string
    stringEn : string
    getName(){return this.string}
    getImage(){return `./images/${this.stringEn}.png`}
    isNumer(){
        return false
    }
}

interface Sangenpai {
}

class Haku extends StringPi implements Sangenpai{
    string = "白" 
    stringEn = "haku" 
}
class Hatsu extends StringPi implements Sangenpai {
    string = "發" 
    stringEn = "hatsu" 
}
class Chun extends StringPi implements Sangenpai {
    string = "中" 
    stringEn = "chun" 
}

interface Suhupai {
}

class Ton extends StringPi implements Suhupai {
    string = "東" 
    stringEn = "ton" 
}
class Nan extends StringPi implements Suhupai {
    string = "南" 
    stringEn = "nan" 
}
class Sha extends StringPi implements Suhupai {
    string = "西" 
    stringEn = "sha" 
}
class Pe extends StringPi implements Suhupai {
    string = "北" 
    stringEn = "pe" 
}
