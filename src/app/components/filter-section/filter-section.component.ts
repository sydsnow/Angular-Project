// import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TagComponent } from '../tag/tag.component';
// import { CategoryComponent } from '../category/category.component';
// import { Category } from '../../models/category';
// import { Tag } from '../../models/tag';
// import { ActivatedRoute } from '@angular/router';
// import  { TagService } from "../../services/tag/tag.service";
// import { CategoryService } from '../../services/category/category.service';

// @Component({
//   selector: 'app-filter-section',
//   standalone: true,
//   imports: [TagComponent, CategoryComponent, CommonModule],
//   templateUrl: './filter-section.component.html',
//   styleUrl: './filter-section.component.scss'
// })
// export class FilterSectionComponent implements OnInit {
//   constructor(
//     private route: ActivatedRoute,
//     private tagService: TagService,
//     private categoryService: CategoryService,
//     private elRef: ElementRef, 
//     private renderer: Renderer2
//    ) { }
//   categoryFilter: Category | undefined;
//   tagFilter: Tag | undefined;
//   categorySlug: string = '';
//   tagSlug: string = '';
//   currentFilter = "";

//   setCategoryFilter(category: Category) {
//     this.categoryFilter = category;
//     this.categorySlug = category.slug;
//   }

//   setTagFilter(tag: Tag) {
//     this.tagFilter = tag;
//   }

//   clearFilters() {
//     this.categoryFilter = undefined;
//     this.tagFilter = undefined;
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       console.log(params);
//       const segment: string = this.route.snapshot.url[1]?.path;
//       console.log(segment);
//       const currentSlug = String(this.route.snapshot.paramMap.get('slug'));

//       if (segment === 'categories') {
//         const categoryObj = this.categoryService.getCategoryBySlug(currentSlug);
//         if (categoryObj) {
//           this.currentFilter = categoryObj.name;
//         }
//       }
//       else if (segment === 'tags') {
//         const tagObj = this.tagService.getTagBySlug(currentSlug);
//         if (tagObj) {
//           this.currentFilter = tagObj.name;
//         }
//       } 
//       else {
//         this.currentFilter = "";
//       }
//     })
//     ngAfterViewInit(): {
//       const hamburger = this.elRef.nativeElement.querySelector('.hamburger');
//       this.renderer.listen(hamburger, 'click', () => {
//         hamburger.classList.toggle('active');
//       });
//     }
    
//     console.log('the current filter slug is',this.currentFilter);
//   }
// }
// function ngAfterViewInit() {
//   throw new Error('Function not implemented.');
// }

import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
import { CategoryComponent } from '../category/category.component';
import { Category } from '../../models/category';
import { Tag } from '../../models/tag';
import { ActivatedRoute } from '@angular/router';
import { TagService } from "../../services/tag/tag.service";
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [TagComponent, CategoryComponent, CommonModule],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private categoryService: CategoryService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;
  categorySlug: string = '';
  tagSlug: string = '';
  currentFilter = "";

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.categorySlug = category.slug;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      const segment: string = this.route.snapshot.url[1]?.path;
      console.log(segment);
      const currentSlug = String(this.route.snapshot.paramMap.get('slug'));

      if (segment === 'categories') {
        const categoryObj = this.categoryService.getCategoryBySlug(currentSlug);
        if (categoryObj) {
          this.currentFilter = categoryObj.name;
        }
      }
      else if (segment === 'tags') {
        const tagObj = this.tagService.getTagBySlug(currentSlug);
        if (tagObj) {
          this.currentFilter = tagObj.name;
        }
      }
      else {
        this.currentFilter = "";
      }
    });
  }

  ngAfterViewInit(): void {
    // const hamburger = this.elRef.nativeElement.querySelector('.hamburger');
    // const filterMenu = this.elRef.nativeElement.querySelector('.filters-section');
  
    // this.renderer.listen(hamburger, 'click', () => {
    //   const isFilterMenuActive = filterMenu.classList.contains('active');
  
    //   if (!isFilterMenuActive) {
    //     filterMenu.classList.add('active');
    //   } else {
    //     filterMenu.classList.remove('active');
    //   }
  
    //   // Toggle hamburger class
    //   hamburger.classList.toggle('active');
    // });
  }
  
}
