import { NgIf } from '@angular/common';
import { Directive, Input } from '@angular/core';
import { FeatureService } from './feature.service';

@Directive({
  selector: '[appIfFeatureEnabled]',
  standalone: true,
  hostDirectives: [
    {
      directive: NgIf,
      inputs: ['ngIfElse: appIfFeatureEnabledElse'],
    },
  ],
})
export class IfFeatureEnabledDirective {
  @Input() set appIfFeatureEnabled(appIfFeatureEnabled: string) {
    this.ngIf.ngIf = this.featureService.isFeatureEnabled(
      appIfFeatureEnabled ?? false
    );
  }

  constructor(private ngIf: NgIf, private featureService: FeatureService) {}
}
