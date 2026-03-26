import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TypingLoaderComponent } from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component( {
  selector: 'app-assistant-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './assistantPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class AssistantPageComponent {

  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );

  handleMessage( prompt: string ) {

    this.isLoading.set(true);
    this.messages.update( (prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt
      }
    ]);

    this.openAiService.postQuestion( '', prompt )
      .subscribe( resp => {
        this.isLoading.set(false);
        this.messages.update( prev => [
          ...prev,
          {
            isGpt: true,
            text: resp.content,
          }
        ]);
      });
  }
}
