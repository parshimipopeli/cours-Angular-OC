import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
