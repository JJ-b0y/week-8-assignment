import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button implements OnInit {
  buttonType = input.required<string>();
  buttonText = input.required<string>();
  @Output() onClickTracker = new EventEmitter<void>();

  onClickHandler() {
    this.onClickTracker.emit();
  }
  ngOnInit(): void {
    console.log(this.buttonText());
  }
}
