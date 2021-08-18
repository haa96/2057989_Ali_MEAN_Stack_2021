import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-tracker';

  myArray=[];
  task:any="";  

  taskRef = new FormGroup({
    id:new FormControl(""),
    name:new FormControl(""),
    task:new FormControl(""),
    duedate:new FormControl("")
  })
  populateTable(){

      let temp = this.taskRef.value;
      this.myArray.push({'id':temp.id, 'name':temp.name,'task':temp.task,'duedate':temp.duedate})
      this.taskRef.reset();
      console.log(this.myArray)

  }

}
