# PIG-dice-game

Vytvořil jsem hru podle předlohy [Pig (dice game)](<https://en.wikipedia.org/wiki/Pig_(dice_game)>). Standardní verze této hry je s jednou kostkou. Já jsem se rozhodl vytvořit modifikaci s názvem `Two-Dice Pig` (viz odkaz výše).

## Spuštění

Hra se spustí otevřením souboru `index.html` v prohlížeči.

## Návod / Ovládání

- Hra je určeno pro 2 hráče, hraje se na kola.
- Hráč na tahu hází kostkami pomocí tlačítka `ROLL DICE`. Každý hod se přičítá do jeho momentálního skóre za dané kolo.
- Po každém hodu má hráč 2 možnosti:
  1. použít tlačítko `HOLD`, což jeho momentální skóre z daného kola přičte do jeho celkového skóre. Kolo se ukončí a na řadě je druhý hráč.
  2. použit znovu `ROLL DICE` a zkusit navýšit své skóre za kolo
- ALE, jakmile padne `1` na libovolné kostce, jeho momentální skóre získané v tomto kole je ztraceno. Kolo se ukončí a na řadě je druhý hráč.
- Navíc, pokud hráč hodí na obou kostkách `1`, tak je jeho celkové skóre vynulováno. Kolo se ukončí a na řadě je druhý hráč.
- Vyhrává hráč, který jako první získá skóre _100 bodů_ nebo více.
- Pro další hru stiskněte tlačítko `NEW GAME`

## Použito

- Ikonky: https://ionicframework.com/
- Font: https://fonts.google.com/ (Lato)

## Autor

Adam Pechar
