// mode myFiles.js


const pendingTimers = [];
const pendingOsSTAcks = [];
const pendingOperations = [];

//New times, tasks, operation are recorded from myFiles running
myFile.runContents();


function shouldContinue(){
    //Check one: Any pending setTimeout , seInterval, setImmediate?
    //Check two: Any pending OS tasks? (like server listening to port)
    //Check three: Any pending long running operations?(like ds module)

    return pendingTimer.length || pendingOsSTAcks.length || pendingOperations.length
}

//Entire body executes in onr 'tick
while(shouldContinue()){
    //Node looks at pexndingTimers and sees if any functions
    //are ready to be called


    //2) Noden  looks at pendingOsTasks and pendingOperations

    // 3) Pause execution. Continue When...
    // -a new pendingOSTasks is done
    // -a new pendingOperations is done
    // a timewr is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any pending operations
}

///exit back to terminal mode