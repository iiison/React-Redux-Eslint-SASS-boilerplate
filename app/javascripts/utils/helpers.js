/**
 * Check if user is logged in
 * @param  {Object} store  Redux store instance
 * @return {Boolean}      true if user is logged in
 */
export default function checkIfAuthed(store) {
	return store.getState().user.isAuthed
}
