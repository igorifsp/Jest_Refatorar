const { Shop, Item } = require("../../src/gilded_rose");

describe("Qualidade aumenta em 3", function () {
  it("Quando data venda <= 5", function () {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const sellInInitial = 5;
    const qualityInitial = 14;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].name).toBe(name);
    expect(itens[0].sellIn).toBe(sellInInitial - 1); // A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(qualityInitial + 3); // A qualidade deve aumentar em 3
  });
});
