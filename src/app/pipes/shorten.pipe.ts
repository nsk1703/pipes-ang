import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
// ce pipe permet de reduire le nombre de caracteres a afficher du terme où il sera appliqué
    transform(value: any, limit: number) {
        if(value.length > limit)
            return value.substr(0, limit) + '...';
        
        return value;
    }
}