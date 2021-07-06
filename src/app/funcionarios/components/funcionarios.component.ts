import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visiblevBar: boolean = false;
  visiblehBar: boolean = false;
  visible: boolean = false;
  selectedUserDesc: string = "";
  selectedUserName: string = "";

  users: { id: string, name: string, description: string} [] =
  [
    { id: "1", name: "João Paulo", description: "Gerente de Projetos"},
    { id: "2", name: "Eduardo Cunha", description: "Engenheiro de Software"},
    { id: "3", name: "José Pereira", description: "Analista de Sistemas"}
  ];

  onChangeColor(elementId: string): void {

    let backgroundColor: string = (document.getElementById(elementId) as HTMLElement).style.backgroundColor;

    if(backgroundColor == "red")
      (document.getElementById(elementId) as HTMLElement).style.backgroundColor = "rgb(207, 233, 229)";
      else
      (document.getElementById(elementId) as HTMLElement).style.backgroundColor = "red";
  }

  onClickMenu(event: Event): void {
    if(this.visiblevBar){

      (document.getElementById("vBar") as HTMLElement).style.visibility = "hidden";
    }
    else
    {
      (document.getElementById("vBar") as HTMLElement).style.visibility = "visible";
    }
    this.visiblevBar = !this.visiblevBar;
    let elementId: string = (event.currentTarget as Element).id || "";

    this.onChangeColor(elementId);
  }

  onClickMenu2(event: Event): void {
    if(this.visiblehBar){
      (document.getElementById("hBar") as HTMLElement).style.visibility = "hidden";
    }
    else
    {
      (document.getElementById("hBar") as HTMLElement).style.visibility = "visible";
    }
    this.visiblehBar = !this.visiblehBar;
    let elementId: string = (event.currentTarget as Element).id || "";

    this.onChangeColor(elementId);
  }

  onExit(event: Event): void {
    window.location.reload();
  }

  selectChangeHandler (event: any) {
    let user = this.users.find(u => u.id == event.target.value);
    this.selectedUserName = user?.name || "";
    this.selectedUserDesc = user?.description || "";
  }

  clearScreen(){
    this.visible = true;
    this.visiblehBar = false;
    this.visiblevBar = false;
  }

  title = 'avaliation';
}

  