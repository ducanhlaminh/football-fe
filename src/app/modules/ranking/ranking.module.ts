import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { ListRankingComponent } from './components/content/list-ranking/list-ranking.component';


@NgModule({
  declarations: [
    ListRankingComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
