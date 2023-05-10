import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'As a software developer with expertise in C# and TypeScript, I bring a unique set of skills to any development team.' });
  }

}
