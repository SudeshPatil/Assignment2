import { Component, Input } from '@angular/core';
 
@Component({
    selector: 'app-basic',
    template: `<h2>{{basic}}</h2>
`
})
export class BasicComponent {
    @Input() basic: string;
    
}