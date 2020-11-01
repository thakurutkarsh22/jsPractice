

function Stopwatch() {
    duration = 0;
    let running;
    let startTime;
    let endTime;

    Object.defineProperty(this, 'duration', {
        get: function() {return duration},
        set: function(value) {duration = value}
    })

    Object.defineProperty(this, 'startTime', {
        get: function() {return startTime}
    })

    Object.defineProperty(this, 'endTime', {
        get: function() {return endTime}
    })

    Object.defineProperty(this, 'running', {
        get: function() {return running}
    })
}


Stopwatch.prototype.start = function() {
    if(this.running)
        throw new Error('already ')
    this.running = true;
    this.startTime = new Date();
    
};

Stopwatch.prototype.stop = function() {
    if(!this.running)
        throw new Error('!ntarted');
    
    this.running = false;
    this.endTime = new Date();
    
    const seconds = (endTime.getTime() - startTime.getTime())/1000
    this.duration +=seconds;
    
};

Stopwatch.prototype.reset = function() {
    this.startTime = null ;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};


const s = new Stopwatch();
console.log(s);
s.start();


// prematuure optimization 