import { useEffect } from 'react';
import { useState } from 'react';
import Bloc from './Bloc';

export interface BlocBuilderProps<BlocState extends Bloc<State>, State> {
  bloc: BlocState;
  builder: (state: State) => JSX.Element;
}

export const BlocBuilder = <BlocState extends Bloc<State>, State>({
  bloc,
  builder,
}: BlocBuilderProps<BlocState, State>) => {
  const [state, setState] = useState(bloc.state);

  useEffect(() => {
    const stateSubscription = (state: State) => {
      setState(state);
    };

    bloc.subscribe(stateSubscription);

    return () => bloc.unsubscribe(stateSubscription);
  }, [bloc]);

  return builder(state);
};
