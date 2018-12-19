const rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}

const solveRect = (l,b) => {
    console.log(`Solving for Rectangle with l = ${l} , and b = ${b}`)

    if(l <= 0 || b <= 0) {
        console.log(`Rectangle dimesions should be greater than zero: l = ${l}, and b= ${b}`)
    }

    else {
        console.log(`The perimeter of the rectangle id ${rect.perimeter(l,b)}`)
        console.log(`The area of the rectangle id ${rect.area(l,b)}`)
    }
}

solveRect(2,4)
solveRect(5,7)
solveRect(0,4)