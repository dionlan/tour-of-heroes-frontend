import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  constructor(public loadingService: LoadingService) {
    /*this.loadingService.loading$.subscribe(x => {
      this.loadingService = loadingService;
    });*/ /** esse subscrite foi feito no template utilizando o | async */
   }
}
