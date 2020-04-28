import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform{

    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
        .trim() // remove todos os espeçãos " "
        .toLowerCase(); // caixa baixa

        if(descriptionQuery){
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
             return photos;
        }
    }

}