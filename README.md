# emitter-gates

Logic gate simulation based on [Node EventEmitters](https://nodejs.org/api/events.html#events_class_eventemitter).

While logic gates can be implemented as pure functions (see [Logic Gates in JavaScript](https://ahuth.github.io/articles/logic-gates-in-javascript.html) and https://github.com/ahuth/bit-adder), they can't easily model circuits that require a delay.

For example, an [oscsillator](https://en.wikipedia.org/wiki/Electronic_oscillator) generally requires a feedback loop, and therefore a delay, for it to work. This project is an exploration of APIs that better support such circuits. By basing the simulation on events emitters, we can easily introduce slight a slight delay between the time a logic gate receives a signal, and the time the output signal is sent.

Working through this reminded me of the [A Simulator for Digital Circuits](https://mitpress.mit.edu/sites/default/files/sicp/full-text/sicp/book/node64.html) exercise in [Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sites/default/files/sicp/index.html).

## Usage

Tests can be ran with the following command:

```
yarn test
```
