import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'personal-information-section',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInformationComponent implements OnInit {

  ngOnInit(): void { }

}
