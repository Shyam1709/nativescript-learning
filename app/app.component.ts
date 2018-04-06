import { Component } from "@angular/core";
import { TextField } from "ui/text-field";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
  public oneway = "Hello KLS";

// onTap(){
// alert("Hurrey");
// }

onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    let textField = <TextField>args.object;
}
}
