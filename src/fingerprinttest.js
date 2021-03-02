import Fingerprint2 from "fingerprintjs2";


export default function XXX() {
    // var defaultOptions = {};

//     if (window.requestIdleCallback) {
//     requestIdleCallback(function () {
//         Fingerprint2.get(function (components) {
//           console.log(components) // an array of components: {key: ..., value: ...}
//         })
//     })
// } else {
//     setTimeout(function () {
//         Fingerprint2.get(function (components) {
//           console.log(components) // an array of components: {key: ..., value: ...}
//         })  
//     }, 500)
// }

    
    Fingerprint2.get({}, function(components) {
        var values = components.map(function(component) {
            return component.value;
        });
        var murmur = Fingerprint2.x64hash128(values.join(""), 31);
        console.log(murmur);
    });
}