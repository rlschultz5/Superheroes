import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        TuiRootModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiNotificationsModule,
    ],
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent],
})
export class AppModule {}
