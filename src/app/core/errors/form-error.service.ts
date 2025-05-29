import { Injectable } from '@angular/core';
import { ApplicationMessages } from '../messages/applicationMessages';
import { FortesMessagesService } from '../messages/FortesMessages.service';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor(private message: FortesMessagesService) {}

  errors: FormControl[] = [];
  errorsP = [];

  applicationMessages = ApplicationMessages;

  setErrors(errors: FormControl[]) {
    this.errors = errors;
  }

  getAll() {
    return this.errors;
  }

  getErrors(form: FormGroup, error: string) {
    //TODO: Rehacer este método; esto es un parche no una solución y no ha sido probado.
    console.log(this.errors);

    if (error === 'Unknown Error') {
      this.message.error(
        this.applicationMessages.systemMessages.errorAPiConnection,
      );
    } else {
      //Utilizando entries()?? Si funciona sería genial!
      const content = form.controls as unknown as FormControl[];
      this.errorsP = [];
      content.forEach((element) => {
        // Element es cada elemento dentro de form.controls
        if (this.errors.includes(element)) {
          //Si el evento de Error contiene esta llave/identificador
          form.controls['element'].setErrors({ incorrect: true }); //Se le añade el "valor incorrecto" al campo de formulario
          /*if (element instanceof Array) {
            //Si es un arreglo se añade de uno en uno, sino de golpe
            this.errors[this.errors.indexOf(element)].forEach((ep: never) => {
              this.errorsP.push(ep               );
            }               );
          } else {
          this.errorsP.push(this.errors[this.errors.indexOf(element)] as never               );
          }*/
          this.errorsP.push(this.errors[this.errors.indexOf(element)] as never);
        } else {
          form.controls['element'].setErrors(null); //Se considera que este elemento no tiene errores
        }
      });
    }
    return of(this.errorsP); //Se retorna esto, sea lo que sea.
  }
}
