/**
 * Convert default MySQL formatted date/time strings into UTC ISO8601 string
 * (important for Javascript to handle timezone correctly)
 * @param {String} date_string (This can contain date and time concatenated by a space)
 * @param {String} time_string 
 */
export function get8601FromMySQLDateTime(date_string, time_string = null) {
	if(time_string === null) {
	  [ date_string, time_string ] = date_string.split(' ')
	}
	return `${date_string}T${time_string}Z`
  }
  
  /**
   * Convert default MySQL formatted date/time strings into UTC UNIX epoch time
   * @param {String} date_string (This can contain date and time concatenated by a space)
   * @param {String} time_string 
   */
  export function getEpochTimeFromMySQLDateTime(date_string, time_string = null) {
	return Math.floor(Date.parse(get8601FromMySQLDateTime(date_string, time_string)) / 1000)
  }
  
  /**
   * Converts a number of seconds to 'HH:MM:SS' formatted string
   * @param {Number} seconds 
   */
  export function formatTimeHMS(seconds) {
	let secs = Math.abs(seconds)
  
	let hrs = Math.floor(secs / 3600)
	let min = Math.floor((secs - (hrs * 3600)) / 60)
	secs = secs - (hrs * 3600) - (min * 60)
	secs = Math.round(secs * 100) / 100
  
	let result = seconds < 0 ? "-" : ''
	result += (hrs < 10 ? "0" + hrs : hrs)
	result += ":" + (min < 10 ? "0" + min : min)
	result += ":" + (secs < 10 ? "0" + secs : secs)
  
	return result;
  }
  