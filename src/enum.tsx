// type in func
enum Methods {
    add,
    sub,
}

function calculate (method: Methods, left : number, right : number) : number {
    switch (method) {
        case Methods.add : return  left + right;
        case Methods.sub : return  left - right;
    }
}

calculate(Methods.add, 4, 4)