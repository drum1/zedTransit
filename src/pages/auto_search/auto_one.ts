import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavController , NavParams} from 'ionic-angular';

import {HomePage} from "../home/home";
declare var google: any;

@Component({
    selector: 'page-modal-autocomplete-items',
    templateUrl: 'auto_one.html'
})
export class ModalAutocompleteOne implements OnInit{
     

    //user input
    inputs: any;

    //result predictions list

    resultz:any;

    //auto_complete google api

    auto_complete:any;


    constructor(private navPa: NavParams, private nav: NavController, public vc: ViewController){
        
    }

    


    ngOnInit(){

        this.auto_complete = new google.maps.places.AutocompleteService();
        this.resultz = [];

        this.inputs = {
            query: ''
        };


    }

    chooseItem(item){
        console.log('modal > chooseItem');

        if(this.navPa.get('value')=='1'){
        this.nav.push(HomePage, { loc : item.description});
        }else if(this.navPa.get('value')=='2')
    {
        this.nav.push(HomePage,{loc_two:item.description});
    }

    }


    search(){
        console.log('searchs');

        if (this.inputs.query == ''){
          this.resultz = [];
          return;

        }
        let self = this;
        let inputOpts = {
            types: ['geocode'],
            input: this.inputs.query

        } 

        this.auto_complete.getPlacePredictions( inputOpts, function(predictions, status){
            console.log('modal', status);
            
            self.resultz = [];
            console.log('success');
            

            predictions.forEach(function (prediction){
                self.resultz.push(prediction);
            });

            console.log('success');

            
        });
    }




  
}