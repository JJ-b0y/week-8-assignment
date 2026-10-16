import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink, NgClass, UpperCasePipe, Button ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  id = input.required<number>();
  heading = input.required<string>();
  title = input.required<string>();
  subTitle = input.required<string>();
  content = input.required<string>();
  link = input.required<string>();
  linkText = input.required<string>();
  showOverlay = input.required<boolean>();
  showOuterBorder = input.required<boolean>();
  outerBorderTextTag = input.required<string>();
  showOuterTextTag = input.required<boolean>();
  showButton = input.required<boolean>();
  buttonType = input.required<string>();
  buttonText = input.required<string>();

  clickChildButton(buttonName: string) {
    console.log(`Button clicked: ${buttonName}`);
  }
}
