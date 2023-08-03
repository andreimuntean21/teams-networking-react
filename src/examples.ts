let firstName = "yes";
// firstName = false;

function getConf(r) {
  return {
    name: "my conf",
    x: 123,
    ready: r
  };
}

const conf = getConf(true);
console.info(conf.name);

// conf.ready = "not ready";

export default null;
