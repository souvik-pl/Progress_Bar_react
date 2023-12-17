# React ProgressBar Component
This React component, `ProgressBar`, is designed to visually represent the progress of a task. It displays the completed and total values along with a dynamic progress bar.

## Installation

- Pull this branch into your local system.
- Make sure you have Node installed (preferrably Node v18.17.1).
- Navigate to the project directory and run 
  ```
  npm install
  ```
- Once all the dependencies have been installed, run the following command to start the dev server.
  ```
  npm run dev
  ```

## Usage
```typescript
import ProgressBar from 'component-location/ProgressBar';

function YourComponent() {
  const completed = 50; // Replace with your dynamic or static completed value
  const total = 100; // Replace with your dynamic or static total value

  return (
    <ProgressBar completed={completed} total={total} />
  );
}
```

## Props
The `ProgressBar` component accepts the following props:

- `completed` (number): Represents the completed value.
- `total` (number): Represents the total value.
