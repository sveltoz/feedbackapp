import { Callback } from '@ngtools/webpack/src/webpack';
import { Injectable } from '@angular/core';
import { Coffee } from "./logic/Coffee";
import { Http } from "@angular/http";

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://202.88.154.118:4201";

  get(coffeeId: string, callback) {
    this.http.get(`${this.endpoint}/tasks/${coffeeId}`)
      .subscribe(response => {
        callback(response.json());
      })
  }

  getList(callback) {    
    // const list = [
    //   new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
    //   new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    // ]; 
    // callback(list);
    this.http.get(`${this.endpoint}/tasks`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      });
  }

  save(coffee, callback) {
    if (coffee._id) {
      // It's an update
      console.log("data save press" + coffee._id);
      this.http.put(`${this.endpoint}/tasks/${coffee._id}`, coffee)
        .subscribe(response => {
          console.log(response);
          //callback(response.json());
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/tasks`, coffee)
        .subscribe(response => {
          console.log(response.json());
          //callback(response.json());
        });
    }
  }

  delete(coffee, callback)
  {
    debugger
    if (coffee._id) {
      // It's an update
      this.http.delete(`${this.endpoint}/tasks/${coffee._id}`, coffee)
        .subscribe(response => {
          console.log(response.json());
          callback(response.json());
        });
    }
  }

}
