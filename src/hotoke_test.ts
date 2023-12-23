// url_test.ts
import { assertEquals } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { 仏 } from "./hotoke.ts";

Deno.test("にるぽカメラ買いな スペース埋めなし", () => {
  assertEquals(
    仏("にるぽカメラ買いな", {
      spacerCenter: "　",
      spacerLeft: "　",
      spacerRight: "　",
      fillLeftSpace: false,
    }),
    `に　　　　　　　な
　る　　　　　い
　　ぽ　　　買
　　　カ　ラ
　　　　メ`
  );
});

Deno.test("にるぽカメラ買いな スペース埋めあり", () => {
  assertEquals(
    仏("にるぽカメラ買いな", {
      spacerCenter: "　",
      spacerLeft: "　",
      spacerRight: "　",
      fillLeftSpace: true,
    }),
    `に　　　　　　　な
　る　　　　　い　
　　ぽ　　　買　　
　　　カ　ラ　　　
　　　　メ　　　　`
  );
});

Deno.test("にるぽキメラ飼いな スペース埋めなし", () => {
  assertEquals(
    仏("にるぽキメラ飼いな", {
      spacerRight: "🦁",
      spacerCenter: "🐐",
      spacerLeft: "🐍",
      fillLeftSpace: false,
    }),
    `に🐐🐐🐐🐐🐐🐐🐐な
🐍る🐐🐐🐐🐐🐐い
🐍🐍ぽ🐐🐐🐐飼
🐍🐍🐍キ🐐ラ
🐍🐍🐍🐍メ`
  );
});

Deno.test("にるぽキメラ飼いな スペース埋めあり", () => {
  assertEquals(
    仏("にるぽキメラ飼いな", {
      spacerRight: "🦁",
      spacerCenter: "🐐",
      spacerLeft: "🐍",
      fillLeftSpace: true,
    }),
    `に🐐🐐🐐🐐🐐🐐🐐な
🐍る🐐🐐🐐🐐🐐い🦁
🐍🐍ぽ🐐🐐🐐飼🦁🦁
🐍🐍🐍キ🐐ラ🦁🦁🦁
🐍🐍🐍🐍メ🦁🦁🦁🦁`
  );
});
