import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ChildComponent  } from "../navbar/header/header.component";
// import  style  from "./assets/css";

@Component(
{
 selector:"app-navbar",
 templateUrl:"./navbar.component.html",
 styleUrls:['./navbar.component.css']
  


})
export class navbarcomponent implements AfterViewInit
 {
     @ViewChild(ChildComponent) child;

     constructor(){}

     ngAfterViewInit() {
         
     }

}