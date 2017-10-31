import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:any;
  ciphertext:any;
  plaintext:any;
 
  encryptdata(a, b){
    var A=a.toString(16)+ "";
    var B=b.toString(16) +"";
      var res = "",
         i = A.length,
         j = B.length;
     while (i-- > 0 && j-- > 0) {
          res = (parseInt(A.charAt(i), 16) ^ parseInt(b.charAt(j), 16)).toString(16) + res;
     }
     return res;
  }
  encrypt(){
    this.ciphertext=this.encryptdata(this.message,"36be452d4f4e6af0");
    console.log(this.ciphertext);
  }
  Decryptdata(a,b){
    var A=a.toString(16)+ " ";
    var B=b.toString(16) +" ";
      var res = "",
         i = A.length,
         j = B.length;
     while (i-- > 0 && j-- > 0) {
          res = (parseInt(A.charAt(i), 16) ^ parseInt(b.charAt(j), 16)).toString(16);
     }
     return res.toString();
  }
  Decrypt(){
    this.plaintext=this.encryptdata(this.ciphertext,"36be452d4f4e6af0");
    console.log(this.plaintext);
  }
  

}
