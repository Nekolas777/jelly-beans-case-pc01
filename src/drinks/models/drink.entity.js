export class Drink {
    constructor(
        beanId = 0,
        ingredients = [],
        backGroundColor = '',
        flavorName = '',
        description = '',
        imageUrl = '',
        glutenFree = false,
        sugarFree = false,
        seasonal = false,
        kosher = false,
        groupName = [],
    ) {
        this.beanId = beanId;
        this.ingredients = ingredients;
        this.backGroundColor = backGroundColor;
        this.flavorName = flavorName;
        this.description = description;
        this.imageUrl = imageUrl;
        this.glutenFree = glutenFree;
        this.sugarFree = sugarFree;
        this.seasonal = seasonal;
        this.kosher = kosher;
        this.groupName = groupName;
    }
}