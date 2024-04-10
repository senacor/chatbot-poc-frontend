import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IdentityService } from './chatbot/services/identity/identity.service';
import { AddIdentityHeaderHttpInterceptor } from './chatbot/interceptors/add-identity-http-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(), provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddIdentityHeaderHttpInterceptor,
      deps: [IdentityService],
      multi: true,
  },
  ]
};
