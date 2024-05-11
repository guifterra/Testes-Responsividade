import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CheckboxModule, FormsModule, ReactiveFormsModule, RouterLink, InputMaskModule, PasswordModule, DialogModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  value: string | undefined;

  formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            city: new FormControl<string | null>(null)
        });
    }
    
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
