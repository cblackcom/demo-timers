import { createSelector } from 'reselect'
import _ from 'lodash'
import { formatTimeHMS } from '../misc/timeHelper'

const selectEpochTime = (state) => state.timer.movement.epochTime
const selectInstances = (state) => state.timer.instances
const instanceSort = (a, b) => a.timeRemaining - b.timeRemaining

// NOTE
// Selectors are the sanctioned way to create derived data from the state tree.
// Memoized selectors (reselect's createSelector) save the results of the
// computation and only re-calculate when the underlying state changes.
// https://redux.js.org/recipes/computing-derived-data
// This one even sorts the timers by timeRemaining automatically.

export const selectCalculatedTimers = createSelector(
  selectEpochTime,
  selectInstances,
  (epochTime, instances) => {
    return instances.map((instance) => {
      const timeElapsed = (epochTime - instance.start_time)
      const timeRemaining = (instance.start_time + instance.duration_seconds - epochTime)
      const progress = (timeElapsed / instance.duration_seconds)
      return {
        ...instance,
        timeElapsed,
        timeRemaining,
        formattedTime: formatTimeHMS(timeRemaining),
        progress,
      }
    }).sort(instanceSort)  // also order by expiring first
  }
)

export const selectTimerById = (state, timer_id) => {
  return _.find(selectCalculatedTimers(state), {timer_id})
}

export const selectTimerIsShowingOptions = (state, contextView, timer_id) => {
  return (state.timer.showOptionsOnId[contextView] === timer_id)
}
