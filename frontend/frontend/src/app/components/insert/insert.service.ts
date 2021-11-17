import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from "rxjs";
import { Produto } from "src/app/models/produto";

@Injectable({
    providedIn: 'root'
})
export class InserirService {

    baseUrl = 'http://localhost:3000/produtos';

    constructor(
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) { }

    showMessage(message: String, isError: boolean = false) {
        this.snackBar.open(
            message.toString(),
            "X",
            {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: isError ? ['msg-error'] : ['msg-seccess']
            }
        )
    }

    insert(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseUrl,produto)
    }
}