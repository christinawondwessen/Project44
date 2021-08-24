class System{

    constructor(){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.access1.value())) {
               this.button1.hide();
               this.access1.hide();
               score++;
            }
          });
    }

    // Add code to authenticate the given code and the access codes.


}