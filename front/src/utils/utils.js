/**
 * Deep clone an object, Faster than JSON.parse(JSON.stringify())
 *
 * @param {*} obj
 * @return {*} newObj
 */
 export function deepClone (obj) {
	if (Array.isArray(obj)) {
	    return obj.map(deepClone)
	} else if (obj && typeof obj === 'object') {
	    var cloned = {}
	    for(var i in obj){cloned[i]=deepClone[i]}
	    return cloned
	} else {
	    return obj
	}
}