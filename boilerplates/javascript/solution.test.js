import {describe, it} from "node:test";
import assert from "node:assert";

import { helloWorld } from "./solution.js";

describe("Our first test suite", () => {
  it("Should work", () => {
    assert.equal(helloWorld(), "Hello World");
  });

  it("Should fail", () => {
    assert.equal(helloWorld(), "Goodbye World");
  })
});

describe("Our second test suite", () => {
  it("Should work second", () => {
    assert.equal(helloWorld(), "Hello World");
  });

  it("Should failsecond ", () => {
    assert.equal(helloWorld(), "Goodbye World");
  })
});
