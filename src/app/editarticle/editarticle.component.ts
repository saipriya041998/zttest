import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {
  cat:string[]=['Acounts Recievables','Acounts Recievables','Acounts Recievables'];
  constructor() { }

  ngOnInit() {
  }

}
