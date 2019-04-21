import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule

} from '@angular/material';
@NgModule({
    imports: [
        MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule,
         MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
         MatToolbarModule, MatIconModule, MatListModule, MatTabsModule,
         MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
         MatTabsModule, MatTableModule, MatSortModule, MatSnackBarModule

    ],
    exports: [
        MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule,
         MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
         MatToolbarModule, MatIconModule, MatListModule, MatTabsModule,
         MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
         MatTabsModule, MatTableModule, MatSortModule, MatSnackBarModule

    ]
})

export class MaterialModule {}
