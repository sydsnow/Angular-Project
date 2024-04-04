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
  getTagBySlug(slug: string): Tag | undefined {
    return TAGS.find(tag => tag.slug === slug);
  }
}
