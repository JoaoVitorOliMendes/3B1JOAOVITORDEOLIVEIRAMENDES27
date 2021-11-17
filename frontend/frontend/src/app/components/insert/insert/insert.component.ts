import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto';
import { InserirService } from '../insert.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  insertForm: any;

  constructor(
    private fb: FormBuilder,
    private insertService: InserirService
  ) { }

  ngOnInit(): void {
    this.initForms()
  }

  initForms() {
    this.insertForm = this.fb.group({
      produto: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      preco: [null, [Validators.required]]
    })
  }

  register() {
    console.log("click");
    const produto = this.insertForm.get('produto').value;
    const codigo = this.insertForm.get('codigo').value;
    const preco = this.insertForm.get('preco').value;

    const productFinal: Produto = {
      codigo: codigo,
      nome: produto,
      preco: preco
    }

    this.insertService.insert(productFinal).subscribe((res) => {
      this.insertService.showMessage("Cadastrado com sucesso")
    })

  }

}
