import Yama from "./Yama"
export default class {
    tehai
    kawa = []
    constructor(private name , private yama : Yama){
        this.tehai = this.yama.getTehai()
        console.log("-------------------------")
        console.log(this.tehai.map(t => t.getName()).sort())
        console.log(this.getKotuCount())
        console.log(this.getToituCount())
        console.log(this.getShuntuCount())
        console.log("-------------------------")
    }

    getTehai(){
        return this.tehai
    }

    getKawa(){
        return this.kawa
    }

    tsumo(){
        this.tehai.push(this.yama.tsumo())
    }

    throw(pi){
        this.tehai = this.tehai.filter( tehaiPi => tehaiPi !== pi)
        this.kawa.push(pi)
    }

    getKotuCount(){
        let counts = {}
        this.tehai.forEach((pi)=>{
            counts[pi.getName()] = counts[pi.getName()] || 0
            counts[pi.getName()]++
        })
        return Object.keys(counts).filter(pi => counts[pi] == 3).length 
    }
    getToituCount(){
        let counts = {}
        this.tehai.forEach((pi)=>{
            counts[pi.getName()] = counts[pi.getName()] || 0
            counts[pi.getName()]++
        })
        return Object.keys(counts).filter(pi => counts[pi] == 2).length 
    }
    getShuntuCount(){
        let counts = {}
        let pies = {}
        this.tehai.forEach((pi)=>{
            counts[pi.getName()] = counts[pi.getName()] || 0
            counts[pi.getName()]++
            pies[pi.getName()] = pi
        })

        let count = 0
        Object.keys(counts).forEach(piName => {
            let pi = pies[piName]
            if(!pi.isNumer()){
                return
            }
            if(pi.number == 9 || pi.number == 8){
                return
            }
            if(counts[piName] == 0){
                return
            }
            let nextPiName = piName.replace(/(m|p|s)(\d)/ , (arg1 , arg2 , arg3)=> `${arg2}${++arg3}`)
            let nextNextPiName = piName.replace(/(m|p|s)(\d)/ , (arg1 , arg2 , arg3)=> `${arg2}${parseInt(arg3) + 2}`)

            if(counts[nextPiName] > 0 && counts[nextNextPiName] > 0){
                counts[piName]--
                counts[nextPiName] -- 
                counts[nextNextPiName] --
                count++
            }
        })
        return count
    }
}
