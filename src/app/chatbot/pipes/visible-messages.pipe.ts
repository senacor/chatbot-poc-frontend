import { Pipe, PipeTransform } from "@angular/core";
import { Message } from "../models/message";

@Pipe({
    standalone: true,
    name: 'visibleMessages',
    pure: false,
})
export class VisibleMessagesPipe implements PipeTransform {
    transform(allMessages: Message[]) {
        return allMessages.filter(message => message.role === 'assistant' || message.role === 'user')
    }
}