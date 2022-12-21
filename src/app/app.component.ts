import { Component } from '@angular/core';
import { validateIE } from 'validations-br';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCodeBranch, faCodeFork  } from '@fortawesome/free-solid-svg-icons';

interface Estado {
  sigla: string;
  nome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private snackBar: MatSnackBar ) { }

  title = 'Inscrição Estadual';
  selectedState: string = 'MS';

  // ie = '283554541';
  ie = '000177369';
  // faCodeBranch = faCodeFork;

  estados: Estado[] = [
    {sigla: 'AC', nome:'Acre'},
    {sigla: 'AL', nome:'Alagoas'},
    {sigla: 'AP', nome:'Amapá'},
    {sigla: 'AM', nome:'Amazonas'},
    {sigla: 'BA', nome:'Bahia'},
    {sigla: 'CE', nome:'Ceará'},
    {sigla: 'DF', nome:'Distrito Federal'},
    {sigla: 'ES', nome:'Espírito Santo'},
    {sigla: 'GO', nome:'Goiás'},
    {sigla: 'MA', nome:'Maranhão'},
    {sigla: 'MT', nome:'Mato Grosso'},
    {sigla: 'MS', nome:'Mato Grosso do Sul'},
    {sigla: 'MG', nome:'Minas Gerais'},
    {sigla: 'PA', nome:'Pará'},
    {sigla: 'PB', nome:'Paraíba'},
    {sigla: 'PR', nome:'Paraná'},
    {sigla: 'PE', nome:'Pernambuco'},
    {sigla: 'PI', nome:'Piauí'},
    {sigla: 'RJ', nome:'Riode Janeiro'},
    {sigla: 'RN', nome:'Rio Grande do Norte'},
    {sigla: 'RS', nome:'Rio Grande do Sul'},
    {sigla: 'RO', nome:'Rondônia'},
    {sigla: 'RR', nome:'Roraima'},
    {sigla: 'SC', nome:'Santa Catarina'},
    {sigla: 'SP', nome:'São Paulo'},
    {sigla: 'SE', nome:'Sergipe'},
    {sigla: 'TO', nome:'Tocantins'}
  ];

  onSend(valor: string): void {
    this.ie = valor;
  }

  onClick() {
    let isValid: any;

    if (this.selectedState === 'AC') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'AL') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'AP') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'AM') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'BA') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'CE') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'DF') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'ES') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'GO') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'MA') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'MT') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'MS') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'MG') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'PA') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'PB') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'PR') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'PE') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'PI') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'RJ') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'RN') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'RS') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'RO') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'RR') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'SC') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'SP') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'SE') {
      isValid = validateIE(this.ie, this.selectedState);
    } else if (this.selectedState === 'TO') {
      isValid = validateIE(this.ie, this.selectedState);
    }else {
      isValid = "Escrição Estadual inválida!"
    }

    this.snackBar.open(isValid, 'OK');
  }

}
