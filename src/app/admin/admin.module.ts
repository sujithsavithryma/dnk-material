import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatSidenavModule,
	MatListModule
	 } from '@angular/material';

import { AdminComponent } from './admin.component';

/* custome modules */
import { SidemenuModule } from '../core/sidemenu/sidemenu.module';

@NgModule({
	declarations: [AdminComponent],
	imports: [
	    CommonModule,
	    MatSidenavModule,
	    MatListModule,
	    SidemenuModule,
	], 
	providers: [
	],
	exports: [
		AdminComponent
	]
})
export class AdminModule { }