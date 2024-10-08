import {Component, Inject, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FloatLabelType, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {toSignal} from "@angular/core/rxjs-interop";
import {map, refCount} from "rxjs";
import {MatButton} from "@angular/material/button";
import {PanneService} from "../../Core/services/panne.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../Core/services/auth.service";
import {Panne} from "../../Core/models/panne";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../Core/models/user";
import {Equipement} from "../../Core/models/equipement";

@Component({
  selector: 'app-signaler-ticket',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCheckbox,
    MatRadioButton,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatLabel,
    MatButton,
    NgForOf,
    MatHint
  ],
  templateUrl: './signaler-ticket.component.html',
  styleUrl: './signaler-ticket.component.css'
})
export class SignalerTicketComponent implements OnInit{
  panneForm!:FormGroup;
  protected readonly value = signal('');
  keys!:Panne[];
  user = () => this.authService?.currentUser();

  constructor(
    private fb:FormBuilder,
    private panneservice:PanneService,
    private router:Router,
    private authService: AuthService,
    private snackBar:MatSnackBar,
    public dialogRef: MatDialogRef<SignalerTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Equipement
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.loadPannneOptions();
  }
  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
  initForm(){
    this.panneForm=this.fb.group({
      descriptionPanne:'',
      typePanne:'' })
  }

  loadPannneOptions() {
    this.panneservice.getAllPannes().subscribe({
      next: (pannes) => (this.keys = pannes),
      error: (err) => console.error('Error fetching pannes', err),
    });
  }
    newTicket() {
      const description = this.panneForm.value.descriptionPanne;
      const idPanne = this.panneForm.value.typePanne;
      const idUser:number = <number>this.user()?.id;
      if ( description ) {

        this.panneservice
          .signaler(description, this.data.materialId, idPanne,idUser)
          .subscribe({
            next: (response) => this.dialogRef.close(),
            error: (err) => console.error('Error signaling ticket', err),

          });
      }else {
        this.snackBar.open('ther is a problem in inputs ','fermer')
      }
    }

cancel(){}




}
