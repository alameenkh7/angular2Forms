import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent{

  powers=['Really smart','super Flexible', 'Super Hot', 'Weather change'];

  model=new Hero(1,'Bolt',this.powers[1],'Chuck over cool');
  submitted=false;

  onSubmit(){this.submitted=true;}

  getDiagnostic(){return JSON.stringify(this.model);}

}
