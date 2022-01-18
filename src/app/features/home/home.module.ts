import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [CommonModule],
})
export class HomePageModule {}
