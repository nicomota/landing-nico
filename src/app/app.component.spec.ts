import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Script do FAQ
    const perguntas = document.querySelectorAll('.faq-question');
    perguntas.forEach(botao => {
      botao.addEventListener('click', () => {
        const item = botao.parentElement;
        item?.classList.toggle('active');
      });
    });
  }    
}
