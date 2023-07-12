//git add .
//git commit -m "xyz"
class railwayForm{
    submit(){
        alert(this.name + " your form is submitted")
    }   

    cancel(){
        alert(this.name + " your form is cancelled")
    }
    fill(givenname){
        this.name = givenname

    }
}

let ayyan = new railwayForm()
ayyan.fill("ayyan")

let anas = new railwayForm()
anas.fill("anas")



ayyan.submit()
anas.submit()
ayyan.cancel()

