
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Comment }           from '../model/comment';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class whereIsMyTransport{


    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http){

this.headers      = new Headers({ 'Accept': 'application/json' }); 
this.options       = new RequestOptions({ headers: this.headers }); 

    }
        private CLIENT_ID = 'c8bab029-f566-46a6-9e76-35aa78763ba7';
        private CLIENT_SECRET = '4t3CjCO/Lt2t94DrAqhq2BvZxpnK42TjSdyrHL8BrTA=';

        //URLS
        private token_url =  'https://identity.whereismytransport.com/connect/token';
        private journey_url = 'https://platform.whereismytransport.com/api/journeys';
        private stop_url  = 'https://platform.whereismytransport.com/api/stops';


        //body

        private payload = {
    "client_id": this.CLIENT_ID,
    "client_secret": this.CLIENT_SECRET,
    "grant_type": "client_credentials",
    "scope": "transportapi:all"
};


//header


 private extractData(res: Response) {

        let body = res.json();       
        return body || {};
    }

     private errorHandler(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    



    get_connection(): Observable<any> {

        let payload = {
    "client_id": this.CLIENT_ID,
    "client_secret": this.CLIENT_SECRET,
    "grant_type": "client_credentials",
    "scope": "transportapi:all"
};


       // let bodyString = JSON.stringify(this.payload); 

        let formData: FormData = new FormData();
            for (let key in this.payload) {

    formData.append(key, this.payload[key]);
}
           

         return   this.
                         http.post(this.token_url, formData, this.options) // ...using post request
                         .map(this.extractData) // ...and calling .json() on the response to return data
                         .catch(this.errorHandler);

                        






    }

    get_journey(){

        var token = localStorage.getItem('token');

var body = {
    geometry: {
        type: "Multipoint",
        coordinates: [[18.395448, -33.909531], [18.416798, -33.912683]]
    }
};

var request = new XMLHttpRequest();
request.open('POST', 'https://platform.whereismytransport.com/api/journeys', true);
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'Bearer ' + token);
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 201) {
        var responseText = request.responseText;
        var response = JSON.parse(request.responseText);
        var stop_name = response.name;
        var stop_geo = response.geometry;
    }
};

request.send(JSON.stringify(body));


} 

get_stops(){
    var token = 'retrieved in first request';

var body = {
   point:'',
   
};

var request = new XMLHttpRequest();
request.open('GET', 'https://platform.whereismytransport.com/api/stops', true);
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'Bearer ' + token);
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 201) {
        var responseText = request.responseText;
        var response = JSON.parse(request.responseText);
        
    }
};

request.send(JSON.stringify(body));
}

get_agencies(){

    
}


}