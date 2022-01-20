import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    exports: [],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomePageModule {}
