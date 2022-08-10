// Se ejecuta con deno test fileName.ts

import {
  assertEquals,
  assertStrictEquals,
  assertObjectMatch,
  equal
} from 'https://deno.land/std@0.100.0/testing/asserts.ts';

Deno.test('example', () => {
  const a = 'world';
  assertEquals(a, 'world');
  assertEquals({ hello: 'world' }, { hello: 'world' });
});

// This test fails
Deno.test('assertObjectMatch - Compara contenido de objetos', () => {
  const a = {};
  const b = {};
  assertObjectMatch(a, b);
  equal(a,b);
});

Deno.test('isStrictlyEqual - Compara igualdad objetos', () => {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});

// This test fails
Deno.test('isNotStrictlyEqual', () => {
  const a = {};
  const b = {};
  assertStrictEquals(a, b);
});
