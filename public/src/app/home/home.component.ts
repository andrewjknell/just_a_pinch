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
        [{ name: "All Purpose Flour", value: "flour" },
        { name: "Baking Soda", value: "baking soda" },
        { name: "Baking Powder", value: "baking powder" },
        { name: "Rolled Oats", value: "rolled oat" },
        { name: "Yeast", value: "yeast" },
        { name: "Cornstarch", value: "cornstarch" },
        { name: "Cake Mix", value: "cake mix" },
        { name: "Coconut Flakes", value: "flaked coconut" },
        { name: "Cocoa Powder", value: "cocoa powder" },
        { name: "Nuts", value: "nuts" },
        { name: "Vanilla Extract", value: "vanilla extract" },
        ], [
            { name: "Sugar", value: "sugar" },
            { name: "Brown Sugar", value: "brown sugar" },
            { name: "Powdered Sugar", value: " powdered sugar" },
            { name: "Cinnamon", value: "cinnamon" },
            { name: "Nutmeg", value: "nutmeg" },
            { name: "Ginger", value: "ginger" },
            { name: "Honey", value: "honey" },
            { name: "Maple Syrup", value: "maple syrup" },
            { name: "Molasses", value: "molasses" },
            { name: "Agave Nectar", value: "agave nectar" },
            { name: "Corn Syrup", value: "corn syrup" },
            { name: "Artificial Sweetener", value: "sugar substitute" },
        ], [
            { name: "Butter", value: "butter" },
            { name: "Margarine", value: "margarine" },
            { name: "Eggs", value: "eggs" },
            { name: "Cream", value: "cream" },
            { name: "Buttermilk", value: "buttermilk" },
            { name: "Half and Half", value: "half and half" },
            { name: "Powdered Milk", value: "powdered milk" },
            { name: "Cream Cheese", value: "cream cheese" },
            { name: "Condensed Milk", value: "condensed milk" },
            { name: "Whipped Cream", value: "whipped cream" },
            { name: "Soy Milk", value: "soy milk" },
            { name: "Skim Milk", value: "skim milk" },
        ], [
            { name: "Peanut Butter", value: "peanut butter" },
            { name: "Graham Crackers", value: "graham crackers" },
            { name: "Chocolate Syrup", value: "chocolate syrup" },
            { name: "Marshmallows", value: "marshmallows" },
            { name: "Chocolate Chips", value: "milk chocolate chips" },
            { name: "Raspberry Jam", value: "raspberry jam" },
            { name: "Jelly", value: "jelly" },
            { name: "Jello", value: "jello" },
            { name: "White Chocolate", value: "white chocolate" },
            { name: "Sprinkles", value: "sprinkles" },
            { name: "Apples", value: "apple" },
        ]
    ]
    igsinform: any = {};
    newArry: any = [];
    recipesFound: any;
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
        let thisString = this.newArry.join(",")
        this.getRecipes(thisString);
        this.newArry = []

    }

    getRecipes(str) {
        let qstr = "dessert"
        let recipes = this.http.getRecipes(str, qstr)
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