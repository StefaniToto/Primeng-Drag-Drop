import { bootstrapApplication } from '@angular/platform-browser';
import { OrderlistDragDropDemo } from './app/orderlist-drag-drop-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(OrderlistDragDropDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));