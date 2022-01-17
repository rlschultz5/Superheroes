import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
})
export class CoreModule {}
