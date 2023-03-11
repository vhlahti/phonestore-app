import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private http: HttpClient) { }

  openSnackbar() {
    // Get the snackbar DIV
    const x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    if (x) {
      x.className = "show";
    }
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(() => {
      if (x) {
        x.className = x.className.replace("show", "");
      }
    }, 3000);
}

}
