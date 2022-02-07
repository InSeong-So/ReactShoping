import React from 'react';

export default function createContext<TYPE>() {
  const context = React.createContext<TYPE | undefined>(undefined);

  const useContext = () => {
    const ctx = React.useContext(context);
    if (!ctx) throw new Error('context must be inside a Provider with a value');
    return ctx;
  };

  return [context, useContext] as const;
}
