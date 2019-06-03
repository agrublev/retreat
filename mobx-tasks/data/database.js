const database = {
	add: (name, data) => {
		window.localStorage.setItem(name, JSON.stringify(data));
		return new Promise(resolve => setTimeout(() =>
				resolve(true),
			200)
		)
	},
	update: (name, data) => {
		let update = window.localStorage.getItem(name) || false;
		let isJson = false;
		if (update !== false) {
			try {
				update = JSON.parse(update);
				isJson = true;
			} catch (e) {
				console.info("Not json.")
			}
		}
		if (isJson) {
			update = {...update, ...data};
		} else {
			update = data;
		}
		window.localStorage.setItem(name, JSON.stringify(update));

		return new Promise(resolve => setTimeout(() =>
				resolve(update),
			200)
		)
	},
	remove: (name) => {
		window.localStorage.removeItem(name);
		return new Promise(resolve => setTimeout(() =>
				resolve(true),
			200)
		)
	},
	get: (name) => {
		let data = window.localStorage.getItem(name) || false;
		if (data !== false) {
			try {
				data = JSON.parse(data);
			} catch (e) {
				console.info("Not json.")
			}
		}
		console.warn("data", window.localStorage.getItem(name), data);
		//, JSON.stringify(data));
		return new Promise(resolve => setTimeout(() =>
				resolve(data),
			200)
		)
	}
};
module.exports = database;
