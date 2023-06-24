import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IfFeatureEnabledDirective } from '../../feature.directive';

@Component({
  selector: 'app-with-directive',
  templateUrl: './with.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IfFeatureEnabledDirective],
})
export class WithDirectiveComponent {}
