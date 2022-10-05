import { AnyAction } from '@reduxjs/toolkit';

/**
 * Check if the async action type is rejected
 */
 export function isRejectedAction(action: AnyAction) {
    return action.type.endsWith('/rejected');
}

/**
 * Check if the async action type is pending
 */
export function isPendingAction(action: AnyAction) {
    return action.type.endsWith('/pending');
}

/**
 * Check if the async action type is completed
 */
export function isFulfilledAction(action: AnyAction) {
    return action.type.endsWith('/fulfilled');
}



export default () => (next: any) => (action: any) => {
  const { error, payload } = action;

  
  // console.log(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);
  
  /**
   *
   * The notification middleware serves to add success and error notifications
   */
  if (isFulfilledAction(action)) {
    console.log(action)
  }

  if (isPendingAction(action)) {
    console.log(action)
  } 

  if (isRejectedAction(action)) {
    console.log(action)
  } 

  return next(action);
};
