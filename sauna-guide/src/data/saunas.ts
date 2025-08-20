import { Sauna } from '../types';

export const saunas: Sauna[] = [
  {
    id: 1,
    name: '渋谷サウナ',
    prefecture: '東京都',
    saunaTemp: 95,
    coldBathTemp: 15,
    rating: 4.5,
    amenities: ['ロウリュ', '外気浴'],
    description: '渋谷駅近くの都会型サウナ。',
    address: '東京都渋谷区1-2-3',
    hours: '10:00-23:00',
    priceRange: '¥1,200〜'
  },
  {
    id: 2,
    name: '新宿ヒート',
    prefecture: '東京都',
    saunaTemp: 90,
    coldBathTemp: 16,
    rating: 4.0,
    amenities: ['TV', '休憩スペース'],
    description: '新宿で人気の大型サウナ施設。',
    address: '東京都新宿区4-5-6',
    hours: '24時間',
    priceRange: '¥1,000〜'
  },
  {
    id: 3,
    name: '大阪リラックス',
    prefecture: '大阪府',
    saunaTemp: 92,
    coldBathTemp: 14,
    rating: 4.1,
    amenities: ['ロウリュ', '食事処'],
    description: '大阪の中心部でゆったりと。',
    address: '大阪府大阪市1-2-3',
    hours: '9:00-25:00',
    priceRange: '¥1,100〜'
  },
  {
    id: 4,
    name: '北海道チル',
    prefecture: '北海道',
    saunaTemp: 98,
    coldBathTemp: 10,
    rating: 4.2,
    amenities: ['雪ダイブ', '外気浴'],
    description: '極寒の地ならではの体験。',
    address: '北海道札幌市1-2-3',
    hours: '8:00-22:00',
    priceRange: '¥1,300〜'
  },
  {
    id: 5,
    name: '福岡スチーム',
    prefecture: '福岡県',
    saunaTemp: 88,
    coldBathTemp: 17,
    rating: 3.9,
    amenities: ['サウナ飯', 'マッサージ'],
    description: '博多駅から徒歩5分。',
    address: '福岡県福岡市1-2-3',
    hours: '10:00-24:00',
    priceRange: '¥900〜'
  },
  {
    id: 6,
    name: '京都禅サウナ',
    prefecture: '京都府',
    saunaTemp: 85,
    coldBathTemp: 18,
    rating: 3.8,
    amenities: ['瞑想室'],
    description: '静寂に包まれた和風サウナ。',
    address: '京都府京都市1-2-3',
    hours: '12:00-22:00',
    priceRange: '¥1,000〜'
  },
  {
    id: 7,
    name: '名古屋ヒート',
    prefecture: '愛知県',
    saunaTemp: 94,
    coldBathTemp: 13,
    rating: 4.1,
    amenities: ['TV', '外気浴'],
    description: '名古屋の定番サウナ。',
    address: '愛知県名古屋市1-2-3',
    hours: '11:00-23:00',
    priceRange: '¥1,050〜'
  },
  {
    id: 8,
    name: '神戸ハーバーサウナ',
    prefecture: '兵庫県',
    saunaTemp: 93,
    coldBathTemp: 12,
    rating: 4.3,
    amenities: ['ロウリュ', '海風外気浴'],
    description: '港の風を感じるサウナ。',
    address: '兵庫県神戸市1-2-3',
    hours: '10:00-23:00',
    priceRange: '¥1,200〜'
  }
];
