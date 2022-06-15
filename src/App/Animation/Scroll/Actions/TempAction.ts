import ResolvingAction, {ResolveCallback} from 'App/Animation/Transition/ResolvingAction'
import InteractionContext from 'App/Animation/Scroll/Info/InteractionContext'


export default class TempAction extends ResolvingAction
{
    private info: InteractionContext; 


    private position: number = 0;

    private velocity: number = 0;

    private to: number = 0;
    
    private length = 0;
    
    private moving: boolean = false;

    private from = 0;
    

    private released: boolean = false;

    public constructor(info: InteractionContext, resolve: ResolveCallback)
    {
        super(resolve);
        this.info = info;

        console.log('created')
        this.position = this.info.getViewport().getPosition();
    } 

    public moveBy(value: number): void
    {
        if (value == 0)
            return;

        
        this.to = this.to + value;
        this.from = this.position;
        this.moving = true;

        console.log('by: ', value, 'to: ', this.to, 'from: ' , this.from);

        window['i']= 0;
    }

    public release(value: boolean)
    {
        this.released = value;
    }

    public update(timeDelta: number): void
    {
        // if (++window['i'] > 100)
        //     this.moving=false;


        if (!!!this.moving)
            return;

            timeDelta = 1/60;
  

        let k = -200;
        let m = 10;
        let d = -0.5;

        let fSpring = k * (this.position + 100);   
        let fDamping = d * this.velocity;

        let a2 = (fSpring + fDamping) / m;
        
        this.velocity += a2 * timeDelta;


        if (!!!this.released)
        {   
            k = -10;
            m = 1;
            d = -0;
    
            
            fSpring = k * (this.position - this.to - this.length);   
            fDamping = d * this.velocity;
    
            let a1 = (fSpring + fDamping) / m;
            
            this.velocity += a1 * timeDelta;
        }

        this.position += this.velocity * timeDelta;

        // console.log(a, this.position);

        // if (this.from > this.destination && this.position < this.destination)
        //     this.position = this.destination;
        // else if (this.from < this.destination && this.position >  this.destination)
        //     this.position = this.destination;    


        this.info.getViewport().setPosition(this.position);
     
        //  console.log('pos: ', this.position, 'des: ', this.destination, 'from: ', this.from, 'bvel', this.velocity); 
        // if (this.position === this.destination)
        //     (this.moving = false) || console.log('STOPPED');
;
    }
}