import { sceneKeys } from './sceneKeys';
import { Map_TPL } from './Map.tpl';
const { Eleca } = bosses;
import { bosses } from '../assetPath';
import { json, system } from '..';
import { shiden, pouler, mough } from '../actor/friends';
import { warp0 } from '../timelineWords/timelineWords';
import {
  explanation4,
  addMough,
  warpboss,
  backboss,
  goEleca,
  beforeElecaBattle,
} from '../timelineWords/timelineWords4';

export class Map4 extends Map_TPL {
  constructor() {
    super('json/map005.json', sceneKeys.map4);
  }
  preload() {
    super.preload();
    super.setnpcimage('Shiden', 1, shiden.spriteSrc);
    super.setnpcimage('Pouler', 1, pouler.spriteSrc);
    super.setnpcimage('Mough', 1, mough.spriteSrc);
    this.loadBossimage('Eleca', Eleca);
  }
  create() {
    super.create();
    {
      this.setBoss(29, 44, 'Eleca', system.isBossKilled.get('Eleca'));
      super.setHint('explanation4', explanation4);
      super.setEvent('exit', warp0);
      super.setEvent('add4', addMough, system.isExistActorInParty(mough.name));
      super.setHint('warpboss', warpboss);
      super.setHint('warptoboss', backboss);
      super.setEvent('goEleca', goEleca, system.isBossKilled.get('Eleca'));
      super.setEvent('beforeEleca', beforeElecaBattle, system.isBossKilled.get('Eleca'));
    }
    super.zoomUp();
  }

  public update(_time: number, delta: number): void {
    super.update(_time, delta);
  }
}
