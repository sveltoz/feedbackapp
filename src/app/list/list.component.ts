import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Coffee } from "../logic/Coffee";
import { DataService } from "../data.service";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  coffee : Coffee;
  elementType = 'url';
  value = 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png';
  @ViewChild('result') resultElement: ElementRef;
  showQRCode : boolean = true;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private data: DataService,
              private snackBar: MdSnackBar,
            ) { }

  routingSubscription: any;

  cancel() {
    console.log("cancel press");
    this.router.navigate(["/"]);
  }

  save() {
    console.log("save press");
    this.data.save(this.coffee, result => {
      if (result) {
        //this.router.navigate(["/"]);
        this.snackBar.open("Details saved successfully.", 
        "", { duration: 3000 });
      }
    });
  }

  delete() {
    this.coffee.mobile = "";
    this.coffee.name = "";
    this.data.save(this.coffee, result => {
      if (result) {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnInit() {
    this.coffee = new Coffee();
console.log("View reloaded");
    this.data.getList(list => {
      console.log("View reloaded with data");
      if(list.length >0 ){
      this.coffee = list[0];
      }
    })

    
  }

  ngOnDestroy() {
    console.log("ng destroyed");
    this.routingSubscription.unsubscribe();
  }

}
