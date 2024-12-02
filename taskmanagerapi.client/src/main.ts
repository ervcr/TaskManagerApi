import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Correct the path to the app.module

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
