// varriable 

const constant = 123

const bool = true

if(bool) {
    let temp = "hello"
}

function handle2 (variable){
    console.log(variable)
}
handle2(constant)

const handle = () => {
    let temp1 = 1
    let temp2 = 3

    let result1 = temp1 + temp2
    let result2 = temp2 - temp1
    let result3 = temp2 * temp1
    let result4 = temp2 / temp1 
    let result5 = temp2 % temp1 


// opperateurs : == === & || 


    let table = []
    table.push(result1)
    table.push(result2)
    table.push(result3)
    table.push(result4)
    table.push(result5)
    console.log(table)
}
handle()

const object = {
    name: "salim",
    age: 24,
    experiance : ['front-end', 'back-end', 'design']
}


const error = "error"
console.log(object)
console.log(object.name)
console.log(object.experiance[0])

const promise = new Promise((resolve, reject) => {
    if(false) {
        resolve("success")
    } else {
        reject("error")
    }
})

console.log(promise)
