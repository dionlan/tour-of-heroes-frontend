import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'actions']
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getHeroes();
  }
  /*
    FASES OBSERVABLE
    1 = next
    2 = error
    3 = complete
  */
  getHeroes(): void{
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.heroService.delete(hero).subscribe(() => {
          //this.heroes = this.heroes.filter(x => x !== hero);
          this.getHeroes();
        });
      }
    });
  }
}
