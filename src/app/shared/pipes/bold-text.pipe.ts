import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'boldText',
  standalone: true
})
export class BoldTextPipe implements PipeTransform {
  SEARCH_BOLD_REGEX = new RegExp("(^\\*{2})*[^\\n]*(\\*{2})");

  constructor(readonly sanitizer: DomSanitizer){}

  transform(value: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML,value);
  }

  replace(value:string, regex:RegExp){
    const matched = value.match(regex);
    matched?.forEach(match => {
      //Pattern is **makeBold**
      const makeBold = match.substring(2, match.length-2);
      value = value.replace(regex, `<b>${makeBold}</b>`);
    })
    return value
  }

}
