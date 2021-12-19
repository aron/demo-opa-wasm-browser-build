const { loadPolicy } = require("@open-policy-agent/opa-wasm");

(async function () {
  const wasm = await fetch("./bundle/policy.wasm")
    .then((res) => res.blob())
    .then((blob) => blob.arrayBuffer());
  const policy = await loadPolicy(wasm);
  const result = policy.evaluate({});
  console.log(result);
})();
