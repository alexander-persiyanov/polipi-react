import Dispatcher from './dispatcher.js'; 
import {EventEmitter} from 'events';
import axios from 'axios';


const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_LOGIN_SESSION = 'SET_LOGIN_SESSION';
const SET_LOGIN_FIELD_VALUE ='SET_LOGIN_FIELD_VALUE';
const DELETE_LOGIN_DATA ='DELETE_LOGIN_DATA';

class LoginStore extends EventEmitter{
    constructor(){
        // alert("cons");
        super();
        this.data = {     
            fieldLoginValue:'',       
            isLogged: localStorage.getItem('logged_loc_storage') == 'TRUE',
            error:false,
            prova:true,
        };
        Dispatcher.register((payload)=> {
            switch (payload.actionType) {
                case SET_LOGIN_DATA:
                    console.log(payload);
                    // let result = this.data.isLogged = payload.data;
                    let login =  payload.data.login;       //'hobbit'
                    let password =  payload.data.password; //'Manuel73'

                    this.getLogin(login,password).then((response)=>{ 
                       
                        if(response){
                            this.data.isLogged = payload.data;
                            localStorage.setItem('logged_loc_storage',response);
                            this.emit('logged-loaded', response);
                         }
                    });
                    
                       
                    break;
                case SET_LOGIN_SESSION:
                      
                       this.emit('logged-loaded',  this.data.isLogged);

                break;

                case SET_LOGIN_FIELD_VALUE:
                    // console.log(this.data.fieldLoginValue);
                    this.data.fieldLoginValue =  payload.data.value;
                break;

                case DELETE_LOGIN_DATA:
                        localStorage.clear();
                        this.data.isLogged = false;
                        this.data.fieldLoginValue = '';
                        this.emit('delete-login',  this.data.isLogged);

                break;
                
               
                default:
               }
        });

    }
    verificationDidLogged(){
        
        if(localStorage.getItem('logged_loc_storage')){
           
            return true;

        }else{
            return false;
        }

    }

    getLogin(login,password){
       return  axios.get('http://127.0.0.1:8080/https://login.msd-italia.it/tools/authentication_APP.asp',{
            params: {
                username: login,
                password: password,
                source: 'Polipi_Nasali_ANDROID',
                tiporeply: 'P'
              }
        })
        .then((response)=>{
           
            // handle success
            //  console.log(response.data.includes("TRUE"));
             if(response.data.includes("TRUE")){
                 return true;
             }else{
                this.data.error = true;
                // console.log(this.data.error);
                return false;
             }
           
          
           
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    }


}

export default new LoginStore();