/**
 * Created by zuoa on 09.06.2017.
 */

import assert from 'assert';
import getCorrectId from '../templates/levelGame/getCorrectId';

const list = [{
  answers: [{
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }],
  track: `/audio/Fringe.mp3`
}, {
  answers: [{
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`,
    isCorrect: true
  }, {
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }, {
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  }],
  track: `/audio/Fringe.mp3`
},
];

describe(`Экран определения артиста`, () => {
  it(`Поиск корректного ответа`, () => {
    assert.equal(getCorrectId(list[0].answers), 2);
    assert.equal(getCorrectId(list[1].answers), 2);
    assert.equal(getCorrectId(list[2].answers), 2);
    assert.equal(getCorrectId(list[list.length - 1].answers), 0);
  });
});
