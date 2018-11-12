import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    //listFilter: string = 'cart';

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Iproduct[];
    products: Iproduct[];

    constructor(private productService: ProductService) //implements productService and initializes it
    {
       
    }


    //Filters product list
    performFilter(filterBy: string): Iproduct[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        //For each product of Iproduct, compare product's name with filtered string
        return this.products.filter((product: Iproduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //On Rating Clicked Event
    onRatingClicked(message: string) : void
    {
        this.pageTitle = 'Product List: ' + message;
    }



    //Show/Hide show image button
    toggleImage() : void 
    {
        this.showImage = !this.showImage;
    }

    //implements OnInit
    ngOnInit(): void 
    {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products; //allows for async retrieval
            },
            error => this.errorMessage = <any>error
        );


        //this.filteredProducts = this.products;  <-- this won't work because of products being retrieved async
         //this.listFilter = 'cart';
    }
}