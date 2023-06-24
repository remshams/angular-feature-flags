import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureService } from '../../feature.service';

@Component({
  selector: 'app-without-directive',
  templateUrl: './without.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class WithoutDirectiveComponent {
  constructor(public featureService: FeatureService) {}
}
