import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureService } from './feature-flags/feature.service';
import { WithoutDirectiveComponent } from './feature-flags/components/without-directive/without.components';
import { WithDirectiveComponent } from './feature-flags/components/with-directive/with.component';

const initFeatureServiceFactory = (featureService: FeatureService) => {
  return () => featureService.init();
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    WithoutDirectiveComponent,
    WithDirectiveComponent,
  ],
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
