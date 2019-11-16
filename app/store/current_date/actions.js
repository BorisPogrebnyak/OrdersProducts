'use strict';

export const CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE';

export const changeCurrentDate = currentDate => ({
  type: CHANGE_CURRENT_DATE,
  currentDate
});