import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



export interface PeriodicElement {
  valor: string;
  espetinho: string;
  unidade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {espetinho: 'Frago c/ queijo  ', unidade: '5 unidade', valor: 'R$31,99'},
  {espetinho: 'Frango c/ Bacon', unidade: '5 unidade', valor: 'R$26,99'},
  {espetinho: 'Frango', unidade: '10 unidade', valor: 'R$32,99'},
  {espetinho: 'Carne ', unidade: '10 unidade', valor: 'R$42,99'},
  {espetinho: 'Carne de sol c/ queijo', unidade: '5 unidade', valor: 'R$31,99'},
  {espetinho: 'Carne c/ Bacon', unidade: '5 unidade', valor: 'R$26,99'},
  {espetinho: 'Coração de frango', unidade: '10 unidade', valor: 'R$36,99'},
  {espetinho: 'Mistão', unidade: '10 unidade', valor: 'R$36,99'},
  {espetinho: 'Cafita bovina', unidade: '5 unidade', valor: 'R$15,99'},
];

@Component({
  selector: 'app-cardapio-espetinhos',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatCardModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './cardapio-espetinhos.component.html',
  styleUrls: ['./cardapio-espetinhos.component.scss']
})
export class CardapioEspetinhosComponent implements OnInit {

  displayedColumns: string[] = ['espetinho', 'unidades', 'valor'];
  dataSource = ELEMENT_DATA;
  formsRegister!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.formsRegister = new FormGroup({
        nomeCliente: new FormControl('', Validators.required),
        
     });
  }

}
