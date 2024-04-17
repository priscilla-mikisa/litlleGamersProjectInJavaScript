//Create a program that enables children to find if a shape is either a triangle,rectangle, square, or circle
//      PSEUDO CODE
//1. Input the name shape and properties(whether the shape is regular,two opposite sides equal,or all sides are equal).
//2. If the shape has four sides and all sides are equal shape is a rectangle.
//3. If shape has four sides and 2 opposite sides are equal output shape is a square.
//4. If shape has infinity sides and is regular, output shape is a circle.
//5. If shape has three sides and all sides are equal output shape is a triangle.
//6. Else output  shape is advanced and your promoted!!

function findMyShape(name, numberOfSides, property){
    if (name.toLowerCase()=="rectangle" && numberOfSides==4 || numberOfSides.toLowerCase()=="four" && property.toLowerCase()=="all sides equal"){
        console.log(`Right!!! Shape is a ${name}.`)
    }
    else if (name.toLowerCase()=="triangle" && numberOfSides==3 || numberOfSides.toLowerCase()=="three" && property.toLowerCase()=="all sides equal"){
        console.log(`Right!!! Shape is a ${name}.`)
    }
    else if (name.toLowerCase()=="square" && numberOfSides==4 || numberOfSides.toLowerCase()=="four" && property.toLowerCase()=="two opposite sides are equal"){
        console.log(`Right!!! Shape is a ${name}.`)
    }
    else if (name.toLowerCase()=="circle" && numberOfSides.toLowerCase()=="infinity" && property.toLowerCase()=="regular"){
        console.log(`Right!!! Shape is a ${name}.`)
    }
    else{
        console.log("Try again shape is either wrong or not basic.")
    }
}
findMyShape("rectangle","four","all sides equal")