import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{

  title = 'pruebafrontdoublev';
  public formGroup: FormGroup;
  public users: any = [];

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      word: [Validators.required, Validators.minLength(4)]
    });
  }

  filter(){
    if (this.formGroup.valid) {
      if(this.formGroup.value.word == "doublevpartners") return alert('No puede realizar la búsqueda con la palabra ' + this.formGroup.value.word)
      this.userService.filterUser('search/users', this.formGroup.value.word).then((res: any) => {
        this.users = res.items.slice(0, 10)
      })
    }else{
      alert("Por favor llena el campo")
    }
  }

  filterObservable(){
    if (this.formGroup.valid) {
      if(this.formGroup.value.word == "doublevpartners") return alert('No puede realizar la búsqueda con la palabra ' + this.formGroup.value.word)
      this.userService.filterUserObservable('search/users', this.formGroup.value.word).subscribe((res: any) => {
        console.log("res", res)
        this.users = res.items.slice(0, 10)
        if(this.users.length == 0){
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'No se encontro ningún usuario',
          })
        }
      })
    }else{
      alert("Por favor llena el campo")
    }
  }

}
