import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Browse my web development portfolio to see examples of responsive designs, interactive features, and clean code. Specializing in front-end web development using C#, ASP.NET, HTML, CSS, JavaScript, TypeScript and Angular. Contact me to discuss your web development needs.' });
  }

}
