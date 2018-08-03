import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';
import { ChangeDetectorRef } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	matches: String[];
	isRecording = false;
	
	constructor(public navCtrl: NavController, private plt: Platform, private dbMeter: DBMeter, private cd: ChangeDetectorRef, private callNumber: CallNumber) {

  }
  
  
  startListening() {
	  let subscription = this.dbMeter.start().subscribe(data => {
	  
	  /**
	  Hier kann auch die if-Anweisung stehen
	  
	  */
	  
	  
	  
	  console.log(data)});
	  }  

  stopListening() {
	  subscription.unsubscribe();
	  
	  
	}

  isIos() {
	return this.plt.is ('ios');
  }

}