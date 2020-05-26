# emitter-gates

Logic gate simulation based on [Node EventEmitters](https://nodejs.org/api/events.html#events_class_eventemitter).

I've previously worked on logic gates based on pure functionss in [Logic Gates in JavaScript](https://ahuth.github.io/articles/logic-gates-in-javascript.html) and https://github.com/ahuth/bit-adder. Pure functions work well, but can't easily model circuits that require a delay, such as an [oscsillator](https://en.wikipedia.org/wiki/Electronic_oscillator). This project is an exploration of APIs for logic circuits with a slight delay based on events.
