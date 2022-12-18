const canvas = document.getElementById('mycanvas');
const pointing = document.getElementById('container')
const y = document.getElementById('coordy')
const x = document.getElementById('coordx')
const submit = document.getElementById('coordinates')

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = this.constructPoint()
        this.addPoint()
    }
    
    constructPoint() {
        // const Top = y.value
        // const Left = x.value
        // canvas.innerHTML= `<span id ='pointy' style='color: red;font-size: 100px;position:absolute;top:${Top}px;right:${Left}px;' >.</span>`
        
        let point = document.createElement('span');
        point.classList.add('pointy')

        point.style.top = this.y  +'px';
        point.style.left = this.x + 'px';

        return point;
    }
    
    addPoint() {
        canvas.appendChild(this.element);// adds dots to the board
    }
}

const intaialSetup = ()=>{
    const Point = [];

    let p1 = new Point(450,30);
    let p2 = new Point(200,300);
    let p3 = new Point(680,300);

    
}


// const point1 = new Point(50,50)

// point1.constructPoint()

submit.addEventListener('click',() =>{
    
    
    if(x.value >= 2000 || y.value >= 1000){
        alert("cant exceed the boards's limits");
        return;
        
    }    
    const point1 = new Point(x.value, y.value)

})

