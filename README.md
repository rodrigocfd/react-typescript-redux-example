# React TypeScript Redux Example

Minimal example of a React application written in TypeScript, using Redux for state management via custom `useRedux` hook.

## How it works

You can use this project as the skeleton for yours. The files are:

| File | Description |
| - | - |
| [`useRedux.ts`](src/app/useRedux.ts?ts=4) | Contains all the Redux boilerplate. You only need to change the `initialState` object, that's where you define the your state layout. |
| [`App.tsx`](src/app/App.tsx?ts=4) | Root component. Wraps everything with the `ReduxProvider` and creates the state with `createReduxStore`. |
| [`Inputs.tsx`](src/app/Inputs.tsx?ts=4) | Component with inputs that write values into the store with `useRedux` hook. |
| [`ViewAddress.tsx`](src/app/ViewAddress.tsx?ts=4) [`ViewCity.tsx`](src/app/ViewCity.tsx?ts=4) | Components that show values from the store with `useRedux` hook. |
