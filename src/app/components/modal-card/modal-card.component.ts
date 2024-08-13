import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
  selector: 'app-modal-card',
  standalone: true,
  imports: [I18nPipe, CommonModule],
  templateUrl: './modal-card.component.html',
  styleUrl: './modal-card.component.scss'
})
export class ModalCardComponent {
    openModal() {
      Swal.fire({
        title: "Ingrese sus datos para vincular su tarjeta",
        html: `
          <form action="" id="formulario-tarjeta" class="class="login-form"">
              <div class="group">
                <label for="inputNumero">Número Tarjeta</label>
                <input type="text" id="inputNumero" maxlength="19" autocomplete="off">
              </div>
              <div class="group">
                <label for="inputNombre">Nombre</label>
                <input type="text" id="inputNombre" maxlength="19" autocomplete="off">
              </div> 
              <label for="selectMes">Expiracion</label>
              <div class="flex-space-around">
                    <div class="group">
                      <select name="mes" id="selectMes">
                        <option disabled selected>Mes</option>
                      </select>
                      <i class="fas fa-angle-down"></i>
                    </div>
                    <div class="group">
                      <select name="year" id="selectYear">
                        <option disabled selected>Año</option>
                      </select>
                      <i class="fas fa-angle-down"></i>
                    </div>
              </div> 

                    

                <div class="grupo ccv">
                  <label for="inputCCV">CCV</label>
                  <input type="text" id="inputCCV" maxlength="3">
                </div>
              </div>
            </form>
        `,
        showCancelButton: true,
        confirmButtonText: "Vincular",
        customClass: {
            confirmButton: 'btn-primary',
            cancelButton: 'btn-secondary',
        },
      }).then((result) =>{
        if (result.value) {
        Swal.fire({
        title: 'Vinculado',
        text: 'Tarjeta vinculada correctamente',
        icon: 'success',
        customClass: {
          confirmButton: 'btn-primary',
          cancelButton: 'btn-secondary',
        },
        })}
      });
    }
}
