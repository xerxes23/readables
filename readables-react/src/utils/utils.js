

export const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export const showDate = timestamp => {
	let a = new Date(timestamp)
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]
	let year = a.getFullYear()
	let month = months[a.getMonth()]
	let date = a.getDate()
	let hour = a.getHours()
	hour = ('00' + hour).slice(-2)
	let min = a.getMinutes()
	min = ('00' + min).slice(-2)
	
	let time = `${date} ${month} ${year} ${hour}:${min}`
	return time

}
	


export const sortByScore = (a, b) => {
  if (a.voteScore > b.voteScore) return -1
  if (a.voteScore < b.voteScore) return 1
  return 0
}

export const sortByDate = (a, b) => {
  if (a.timestamp > b.timestamp) return -1
  if (a.timestamp < b.timestamp) return 1
  return 0
}