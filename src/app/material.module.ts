import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSidenavModule

    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSidenavModule

    ]
})
export class MaterialModule { }
