import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { CheckoutflexSharedModule, UserRouteAccessService } from './shared';
import { CheckoutflexAppRoutingModule} from './app-routing.module';
import { CheckoutflexHomeModule } from './home/home.module';
import { CheckoutflexAdminModule } from './admin/admin.module';
import { CheckoutflexAccountModule } from './account/account.module';
import { CheckoutflexEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        CheckoutflexAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        CheckoutflexSharedModule,
        CheckoutflexHomeModule,
        CheckoutflexAdminModule,
        CheckoutflexAccountModule,
        CheckoutflexEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class CheckoutflexAppModule {}
