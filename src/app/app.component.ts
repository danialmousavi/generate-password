import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: String='';
  includelatter: boolean = false;
  includesymbol: boolean = false;
  includenumbers: boolean = false;
  length: number = 0;

  onButtonClick() {
    const numbers='0123456789';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='!@#$%$^%^%*&()';
    let validchar='';
    if(this.includelatter){
      validchar+=letters;
    }
    if(this.includenumbers){
      validchar+=numbers;
    }
    if(this.includesymbol){
      validchar+=symbols;
    }
    let generatedpassword='';
    for(var index=0;index<this.length;index++){
      let index=Math.floor(Math.random()*validchar.length);
      generatedpassword+=validchar[index];
    }
    this.password = generatedpassword;

  }
  getpassword() {
    return this.password;
  }
  onlatterchange() {
    this.includelatter = !this.includelatter;
  }
  onnumberschange() {
    this.includenumbers = !this.includenumbers;
  }
  onsymbolschange() {
    this.includesymbol = !this.includesymbol;
  }
  onChangeLength(target: any) {
    const parsvalue = parseInt(target.value);
    if (!isNaN(parsvalue)) {
      this.length = parsvalue;
    }
  }
}
