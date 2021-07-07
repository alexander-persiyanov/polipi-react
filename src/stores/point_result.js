import Dispatcher from './dispatcher.js'; 
import {EventEmitter} from 'events';



const SET_RESULT_POINT = 'SET_RESULT_POINT';


class PointResultStore extends EventEmitter{
    constructor(){
       
        super();
        this.data = { 
            p1:null,
            p2:null,
            checkedPoint:null,          
            result: null,
            maxScore:8,
            percentage:0,
          
        };
        Dispatcher.register((payload)=> {
            switch (payload.actionType) {
                case SET_RESULT_POINT:
                    // console.log(payload);
               
                    this.data.p1 = payload.data.point1;
                    this.data.p2 = payload.data.point2;
                    this.data.checkedPoint= payload.data.chPoint;
                    this.data.result = payload.data.result;
                    this.data.percentage =  this.getpercentage(this.data.maxScore,this.data.result);
                   
                    // this.emit('stored-pointresult', this.data.result);

                    break;
               
                
               
                default:
               }
        });

    }

    getpercentage(max,result){
        return result/max*100;

    }
    


}

export default new PointResultStore();