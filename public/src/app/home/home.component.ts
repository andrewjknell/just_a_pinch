import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    igs: any = [
        [{ name: "All Purpose Flour", value: "flour", isChecked: false },
        { name: "Baking Soda", value: "baking soda", isChecked: false },
        { name: "Baking Powder", value: "baking powder", isChecked: false },
        { name: "Rolled Oats", value: "rolled oat", isChecked: false },
        { name: "Yeast", value: "yeast", isChecked: false },
        { name: "Cornstarch", value: "cornstarch", isChecked: false },
        { name: "Cake Mix", value: "cake mix", isChecked: false },
        { name: "Coconut Flakes", value: "flaked coconut", isChecked: false },
        { name: "Cocoa Powder", value: "cocoa powder", isChecked: false },
        { name: "Nuts", value: "nuts", isChecked: false },
        { name: "Vanilla Extract", value: "vanilla extract", isChecked: false },
        ], [
            { name: "Sugar", value: "sugar", isChecked: false },
            { name: "Brown Sugar", value: "brown sugar", isChecked: false },
            { name: "Powdered Sugar", value: " powdered sugar", isChecked: false },
            { name: "Cinnamon", value: "cinnamon", isChecked: false },
            { name: "Nutmeg", value: "nutmeg", isChecked: false },
            { name: "Ginger", value: "ginger", isChecked: false },
            { name: "Honey", value: "honey", isChecked: false },
            { name: "Maple Syrup", value: "maple syrup", isChecked: false },
            { name: "Molasses", value: "molasses", isChecked: false },
            { name: "Agave Nectar", value: "agave nectar", isChecked: false },
            { name: "Corn Syrup", value: "corn syrup", isChecked: false },
            { name: "Artificial Sweetener", value: "sugar substitute", isChecked: false },
        ], [
            { name: "Butter", value: "butter", isChecked: false },
            { name: "Margarine", value: "margarine", isChecked: false },
            { name: "Eggs", value: "eggs", isChecked: false },
            { name: "Cream", value: "cream", isChecked: false },
            { name: "Buttermilk", value: "buttermilk", isChecked: false },
            { name: "Half and Half", value: "half and half", isChecked: false },
            { name: "Powdered Milk", value: "powdered milk", isChecked: false },
            { name: "Cream Cheese", value: "cream cheese", isChecked: false },
            { name: "Condensed Milk", value: "condensed milk", isChecked: false },
            { name: "Whipped Cream", value: "whipped cream", isChecked: false },
            { name: "Soy Milk", value: "soy milk", isChecked: false },
            { name: "Skim Milk", value: "skim milk", isChecked: false },
        ], [
            { name: "Peanut Butter", value: "peanut butter", isChecked: false },
            { name: "Graham Crackers", value: "graham crackers", isChecked: false },
            { name: "Chocolate Syrup", value: "chocolate syrup", isChecked: false },
            { name: "Marshmallows", value: "marshmallows", isChecked: false },
            { name: "Chocolate Chips", value: "milk chocolate chips", isChecked: false },
            { name: "Raspberry Jam", value: "raspberry jam", isChecked: false },
            { name: "Jelly", value: "jelly", isChecked: false },
            { name: "Jello", value: "jello", isChecked: false },
            { name: "White Chocolate", value: "white chocolate", isChecked: false },
            { name: "Sprinkles", value: "sprinkles", isChecked: false },
            { name: "Apples", value: "apple", isChecked: false },
        ]
    ]
    igsinform: any = {};
    newArry: any = [];
    recipesFound: any;
    newString: string = '';
    constructor(
        private http: HttpService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {

    }

    getClicked() {
        this.recipesFound = [];
        for (let key in this.igsinform) {
            if (this.igsinform[key] == true) {
                this.newArry.push(key)
            }
        }
        this.newString = this.newArry.join(",")
        this.getRecipes();
    }

    getRecipes() {
        let istr = this.newString
        let qstr = "dessert"
        let recipes = this.http.getRecipes(istr, qstr)
        recipes.subscribe((data: any) => {
            let a = JSON.parse(data)
            for (let i = 0; i < a.results.length; i++) {
                this.recipesFound.push(a.results[i])
            }
        })


    }
    resetToFalse() {
        for (let key in this.igsinform) {
            if (this.igsinform[key] == true) {
                this.igsinform[key] = false;
            }
        }
    }
}