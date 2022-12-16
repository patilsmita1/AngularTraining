interface shape {
    area():number
}
class Rectangle implements shape{

    constructor(private height:number,private width:number){}
    area(): number {

        return this.height*this.width
    }

    
    
}

class Sphere implements shape{

    constructor(private radius:number){}
    area(): number {

        return 4*Math.PI* this.radius*this.radius
    }
}

class Cone implements shape{

    constructor(private radius:number,private height:number){}
    area(): number {

        return Math.PI*this.radius*(this.radius+Math.sqrt((this.height*this.height)+(this.radius*this.radius)))
    }
}

function measure(g:shape):void{
    console.log('area',g.area())
    

}

const r = new Rectangle(2,3)
const s= new Sphere(2)
const c = new Cone (1,2)

measure(r)
measure(s)
measure(c)