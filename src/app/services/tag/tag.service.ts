import { Injectable } from '@angular/core';
import { TAGS } from '../../data/tags'; 
import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor() { }
  getTags(): Tag[] {
    return TAGS;
  }
}
