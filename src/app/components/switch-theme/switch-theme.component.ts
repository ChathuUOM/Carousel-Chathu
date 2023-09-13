import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'conv-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent implements OnInit {
  selectedTheme: string = 'Dark';

  constructor() {}

  ngOnInit(): void {
    this.toggleAppTheme('Dark');
  }

  // Toggle between "Light Theme" and "Dark Theme"
  toggleAppTheme(type: string): void {
    const ele = document.documentElement;
    if (type == 'Dark') {
      ele.setAttribute("data-bs-theme", "dark");
    } else if (type == 'Light') {
      ele.setAttribute("data-bs-theme", "light");
    }
  }
}
