var tape = require("tape"),
    topojson = require("../");

require("./inDelta");

tape("mesh stitches together two connected line strings", function(test) {
  var topology = topojson.topology({collection: {type: "FeatureCollection", features: [
    {type: "Feature", id: "foo", geometry: {type: "LineString", coordinates: [[1, 0], [2, 0]]}},
    {type: "Feature", id: "foo", geometry: {type: "LineString", coordinates: [[0, 0], [1, 0]]}}
  ]}}, {
    quantization: 0
  });
  test.inDelta(topojson.mesh(topology, topology.objects.collection), {
    type: "MultiLineString",
    coordinates: [[[0, 0], [1, 0], [2, 0]]]
  });
  test.end();
});

tape("mesh does not stitch together two disconnected line strings", function(test) {
  var topology = topojson.topology({collection: {type: "FeatureCollection", features: [
    {type: "Feature", id: "foo", geometry: {type: "LineString", coordinates: [[2, 0], [3, 0]]}},
    {type: "Feature", id: "foo", geometry: {type: "LineString", coordinates: [[0, 0], [1, 0]]}}
  ]}});
  test.inDelta(topojson.mesh(topology, topology.objects.collection), {
    type: "MultiLineString",
    coordinates: [[[2, 0], [3, 0]], [[0, 0], [1, 0]]]
  });
  test.end();
});
