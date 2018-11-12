
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses> 
    template: `<h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                    {{ course }}
                    </li>
                </ul>`
})
export class CoursesComponent 
{
    title = "List of Courses";
    coursesNum;
    courses;

    constructor(service: CoursesService)
    {
        // let service = new CoursesService();
        this.courses = service.getCourses();
        this.coursesNum = service.getCourses().length;
    }

    


    getTitle() 
    {
        return this.coursesNum + ' ' + this.title;
    }
}
