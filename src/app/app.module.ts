import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureService } from './feature-flags/feature.service';

const initFeatureServiceFactory = (featureService: FeatureService) => {
  return () => featureService.init();
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFeatureServiceFactory,
      deps: [FeatureService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
