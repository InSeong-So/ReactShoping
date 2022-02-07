export type Subscription<State> = (state: State) => void;

export default abstract class Bloc<State> {
  private internalState: State;
  private listeners: Subscription<State>[] = [];

  public get state(): State {
    return this.internalState;
  }

  constructor(internalState: State) {
    this.internalState = internalState;
  }

  changeState(state: State) {
    this.internalState = state;
    if (this.listeners.length > 0) this.listeners.forEach(listener => listener(this.state));
  }

  subscribe(listener: Subscription<State>) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Subscription<State>) {
    this.listeners = this.listeners.filter(target => target !== listener);
    // const index = this.listeners.indexOf(listener);
    // if (index > -1) this.listeners.splice(index, 1);
  }
}
