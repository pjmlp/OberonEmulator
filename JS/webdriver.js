var emulator;

window.onload = function() {
	emulator = new WebDriver();
}

function WebDriver() {
	this.keyBuffer = [];

	emuInit();
}

{
	let $proto = WebDriver.prototype;

	$proto.cpuTimeout = null;
	$proto.keyBuffer = null;

	$proto.reset = function(cold) {
		cpuReset(cold);
		this.resume();
	};

	$proto.resume = function() {
		if (this.cpuTimeout != null) window.clearTimeout(this.cpuTimeout);
		this.cpuTimeout = window.setTimeout(cpuRun, 1);
	};
}
