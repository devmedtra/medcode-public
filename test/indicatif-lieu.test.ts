import { test } from "node:test";
import assert from "node:assert/strict";
import { indicatifsRecommandes, codePostalCanadien } from "../src/indicatif-lieu.ts";

const ind = (x: string) => indicatifsRecommandes(x)?.indicatifs[0] ?? null;

test("code postal : la RTA donne la région", () => {
  assert.equal(ind("H2X 1Y4"), "514");      // Montréal
  assert.equal(ind("H7N 5H9"), "450");      // Laval
  assert.equal(ind("G1R 4P5"), "418");      // Québec
  assert.equal(ind("G9A 5H7"), "819");      // Trois-Rivières
  assert.equal(ind("J8Y 3B2"), "819");      // Gatineau
  assert.equal(ind("J7V 0A1"), "450");      // Vaudreuil
  assert.equal(ind("M5V 2T6"), "416");      // Toronto
  assert.equal(ind("L5B 1M2"), "905");      // Mississauga
  assert.equal(ind("K1P 5J2"), "613");      // Ottawa
  assert.equal(ind("V6B 1A1"), "604");      // Vancouver
  assert.equal(ind("V8W 1P6"), "250");      // Victoria
  assert.equal(ind("T2P 1J9"), "403");      // Calgary
  assert.equal(ind("T5J 0N3"), "780");      // Edmonton
  assert.equal(ind("P7B 1A1"), "807");      // Thunder Bay
});
test("ville : avec ou sans accents, dans une adresse", () => {
  assert.equal(ind("Montréal"), "514");
  assert.equal(ind("vancouver"), "604");
  assert.equal(ind("Trois-Rivières"), "819");
  assert.equal(ind("12 rue Principale, Lévis"), "418");
  assert.equal(ind("Toronto, ON"), "416");
});
test("ordre : origine puis superposés", () => {
  assert.deepEqual(indicatifsRecommandes("Montréal")?.indicatifs, ["514", "438", "263"]);
});
test("lieu inconnu : rien, jamais une devinette", () => {
  assert.equal(indicatifsRecommandes("Paris"), null);
  assert.equal(indicatifsRecommandes(""), null);
  assert.equal(indicatifsRecommandes("D1A 1A1"), null); // lettre D jamais utilisée
});
test("code postal canadien", () => {
  assert.equal(codePostalCanadien("h2x 1y4"), "H2X1Y4");
  assert.equal(codePostalCanadien("12345"), null);
});

test("ville transmise à Twilio : forme sans accents, cœurs urbains pour un code postal", () => {
  assert.equal(indicatifsRecommandes("Trois-Rivières")?.localite, "Troisrivieres");
  assert.equal(indicatifsRecommandes("12 rue X, montréal")?.localite, "Montreal");
  assert.equal(indicatifsRecommandes("V6B 1A1")?.localite, "Vancouver");
  assert.equal(indicatifsRecommandes("J7V 0A1")?.localite, undefined); // couronne : pas de ville devinée
});
