class Security {

    constructor(){
        this.access1 = createInput("Code1");
        this.access1.postition(100,90);
        this.access1.style('background','white');

        this.button1 = createButton("Check");
        this.button1.postition(100,120);
        this.button1.style('background','lightgrey');

        // Add code to create the input and button elements


    }

    display(){

        authenticate(actualCode,enteredCode) {

            if (actualCode === enteredCode)
               return true

            else 
               return false

               score=score+1;
        }

        // Add code to make the buttons function as expected
        

    }
}