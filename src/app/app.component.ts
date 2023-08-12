import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/item';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>;
  itemParaSerEditado! : Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
   this.listaDeCompra = this.listaService.getListaDeCompra();
   this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }
  deletarItem(id: number){
    const index = this.listaDeCompra.findIndex((item)=>item.id === id);
    this.listaDeCompra.splice(index, 1);
  }
  limparLista(){
    this.listaService.limparLocalStorage();
    this.listaDeCompra = [];
  }
}
