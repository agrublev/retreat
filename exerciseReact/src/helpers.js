export const styleConsole =
	"color:#fff;padding:5px; background-color:rgba(120,182,226,0.3); text-shadow:1px 0px 1px #2379b5; display:block;";
export const renderToConsole = (name, description) => {
	console.group(name);
	console.log(`%c ${name}`, styleConsole + "line-height:22px; font-size:18px; font-weight:bold;");
	console.log(`%c ${description}`, styleConsole + "line-height:14px; font-size:12px;");
	console.groupEnd();
};
